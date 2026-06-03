import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.codenix.agency/',
      lastModified: '2026-06-03',
      priority: 1.0,
      changeFrequency: 'monthly',
    },
    {
      url: 'https://www.codenix.agency/about',
      lastModified: '2026-06-03',
      priority: 0.9,
      changeFrequency: 'monthly',
    },
    {
      url: 'https://www.codenix.agency/services',
      lastModified: '2026-06-03',
      priority: 0.8,
      changeFrequency: 'monthly',
    },
    {
      url: 'https://www.codenix.agency/work',
      lastModified: '2026-06-03',
      priority: 0.8,
      changeFrequency: 'monthly',
    },
    {
      url: 'https://www.codenix.agency/faqs',
      lastModified: '2026-06-03',
      priority: 0.7,
      changeFrequency: 'monthly',
    },
    {
      url: 'https://www.codenix.agency/contact',
      lastModified: '2026-06-03',
      priority: 0.8,
      changeFrequency: 'monthly',
    },
  ];
}
