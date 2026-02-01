import { useEffect } from 'react';

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  canonical?: string;
}

export function SEOHead({ title, description, keywords, ogImage, canonical }: SEOHeadProps) {
  useEffect(() => {
    const baseUrl = 'https://sweatoutgym.fit';
    const defaultImage = `${baseUrl}/images/gallery/image1.webp`;
    const currentUrl = canonical || `${baseUrl}${window.location.pathname}`;
    const imageUrl = ogImage || defaultImage;

    // Set document title
    document.title = title;

    // Set or update meta tags
    const setMetaTag = (selector: string, attribute: string, attributeValue: string, content: string) => {
      let tag = document.querySelector(selector);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute(attribute, attributeValue);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    // Primary Meta Tags
    setMetaTag('meta[name="title"]', 'name', 'title', title);
    setMetaTag('meta[name="description"]', 'name', 'description', description);

    if (keywords) {
      setMetaTag('meta[name="keywords"]', 'name', 'keywords', keywords);
    }

    // Canonical URL
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', currentUrl);

    // Open Graph / Facebook
    const ogTags = [
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: currentUrl },
      { property: 'og:site_name', content: 'SweatOut Health & Fitness' },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:image', content: imageUrl },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' },
      { property: 'og:image:alt', content: title },
      { property: 'og:locale', content: 'en_IN' },
    ];

    ogTags.forEach(({ property, content }) => {
      setMetaTag(`meta[property="${property}"]`, 'property', property, content);
    });

    // Twitter Card
    const twitterTags = [
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:url', content: currentUrl },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: imageUrl },
      { name: 'twitter:image:alt', content: title },
    ];

    twitterTags.forEach(({ name, content }) => {
      setMetaTag(`meta[name="${name}"]`, 'name', name, content);
    });

    // Additional SEO tags
    setMetaTag('meta[name="robots"]', 'name', 'robots', 'index, follow, max-image-preview:large');
    setMetaTag('meta[name="googlebot"]', 'name', 'googlebot', 'index, follow');
    setMetaTag('meta[name="author"]', 'name', 'author', 'SweatOut Health & Fitness');

  }, [title, description, keywords, ogImage, canonical]);

  return null;
}
