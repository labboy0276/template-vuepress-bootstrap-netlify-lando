module.exports = {
  title: 'Template for Vuepress, Bootstrap, Netlify, & Lando',
  description: 'Site description goes here.',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['link', { rel: 'preload', href: '/fonts/roboto-v19-latin-regular.woff2', as: 'font', type: 'font/woff2', crossorigin: 'true' }],
    ['link', { rel: 'preload', href: '/fonts/roboto-slab-v8-latin-700.woff2', as: 'font', type: 'font/woff2', crossorigin: 'true' }],
    ['link', { rel: 'preload', href: '/fonts/roboto-slab-v8-latin-300.woff2', as: 'font', type: 'font/woff2', crossorigin: 'true' }]
  ],
  plugins: {
    '@vuepress/google-analytics': {
      ga: 'UA-XXXXXXX',
    },
    'autometa': {
      site: {
        name: 'Template for Vuepress, Bootstrap, Netlify, & Lando',
      },
      canonical_base: 'https://yoursite.com',
      image  : false,
    },
    'canonical': {
      baseURL: 'https://yoursite.com',
    },
    'robots': {
      host: 'https://yoursite.com',
    },
    'sitemap': {
      hostname: 'https://yoursite.com',
      exclude: ['/404.html'],
    },
  },
  themeConfig: {
    nav: [
      { text: 'Test', link: '/test/' },
    ]
  },
};
