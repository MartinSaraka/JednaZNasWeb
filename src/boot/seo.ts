import { boot } from 'quasar/wrappers';
import { findProject } from 'src/data/projects';

// Default SEO values
const defaultTitle = 'JEDNA Z NÁS - Občianske združenie';
const defaultDescription =
  'Občianske združenie JEDNA Z NÁS - pomáhame znevýhodneným skupinám na Slovensku prostredníctvom sociálnej inklúzie, vzdelávania a komunitných projektov.';
const siteUrl = 'https://jednaznas.sk';

// Helper function to update meta tags
function updateMetaTag(
  name: string,
  content: string,
  attribute: 'name' | 'property' = 'name'
) {
  let element = document.querySelector(
    `meta[${attribute}="${name}"]`
  ) as HTMLMetaElement;

  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, name);
    document.head.appendChild(element);
  }

  element.setAttribute('content', content);
}

// Helper function to update canonical URL
function updateCanonical(url: string) {
  let element = document.querySelector(
    'link[rel="canonical"]'
  ) as HTMLLinkElement;

  if (!element) {
    element = document.createElement('link');
    element.setAttribute('rel', 'canonical');
    document.head.appendChild(element);
  }

  element.setAttribute('href', url);
}

export default boot(({ router }) => {
  router.afterEach((to) => {
    // Get meta from route or use defaults
    let title = (to.meta.title as string) || defaultTitle;
    let description = (to.meta.description as string) || defaultDescription;

    // Detail projektu – titulok a popis podľa konkrétneho projektu
    if (to.name === 'project-detail') {
      const project = findProject(to.params.slug as string);
      if (project) {
        title = `${project.name} – Projekty – JEDNA Z NÁS`;
        description = project.eu
          ? `${project.eu.fullName}. Projekt je spolufinancovaný Európskou úniou v rámci Programu Slovensko z ESF+.`
          : `${project.name}: ${project.shortPurpose}.`;
      }
    }
    const path = to.path === '/' ? '' : to.path;
    const fullUrl = `${siteUrl}${path}`;

    // Update document title
    document.title = title;

    // Update basic meta tags
    updateMetaTag('description', description);

    // Update Open Graph tags
    updateMetaTag('og:title', title, 'property');
    updateMetaTag('og:description', description, 'property');
    updateMetaTag('og:url', fullUrl, 'property');

    // Update Twitter Card tags
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:url', fullUrl);

    // Update canonical URL
    updateCanonical(fullUrl);

    // Stránku 404 neindexovať
    updateMetaTag('robots', to.matched.length && to.name ? 'index, follow' : 'noindex');
  });
});
