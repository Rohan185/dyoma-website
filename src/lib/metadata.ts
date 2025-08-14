import { Metadata } from 'next';

export const siteConfig = {
  name: 'Dyoma Labs',
  description: 'AI & Engineering Solutions - Transforming businesses through innovative AI solutions, automation, and cutting-edge engineering consulting.',
  url: 'https://dyomalabs.com',
  ogImage: '/og-image.jpg',
  links: {
    twitter: 'https://twitter.com/dyomalabs',
    github: 'https://github.com/dyomalabs',
    linkedin: 'https://linkedin.com/company/dyomalabs',
  },
};

export const defaultMetadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    'AI consulting',
    'artificial intelligence',
    'machine learning',
    'automation',
    'business intelligence',
    'custom development',
    'engineering solutions',
    'generative AI',
    'workflow automation',
    'data analytics',
  ],
  authors: [
    {
      name: 'Dyoma Labs',
      url: siteConfig.url,
    },
  ],
  creator: 'Dyoma Labs',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: '@dyomalabs',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
};
