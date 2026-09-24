import type { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://webnoia.com',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: 'https://webnoia.com/schedule',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://webnoia.com/privacy-policy',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: 'https://webnoia.com/refund-policy',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: 'https://webnoia.com/terms-of-service',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ]
}
