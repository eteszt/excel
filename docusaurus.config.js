const config = {
  title: 'Excel kezdőknek és haladóknak',
  tagline: 'Interaktív tananyag',
  favicon: 'img/favicon.ico',

  url: 'https://eteszt.github.io',
  baseUrl: '/excel/',
  organizationName: 'eteszt', 
  projectName: 'excel',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Témák: hozzáadjuk a mermaid témát is
  themes: [
    '@docusaurus/theme-live-codeblock',
    '@docusaurus/theme-mermaid'
  ],

  // Markdown beállítások: engedélyezzük a mermaid-et
  markdown: {
    mermaid: true,
  },

  i18n: {
    defaultLocale: 'hu',
    locales: ['hu'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  themeConfig: {
    // A search beállítások
    // TODO: Algolia keresés beállítása
    
    algolia: {
      apiKey: 'eaefd8b63c6cf32c17431f10e2ba8051',
      indexName: 'sek',
      appId: 'V4NU5FZZK3',
      contextualSearch: true,
      placeholder: 'Keresés a tananyagban',
    },
    
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },

    navbar: {
      title: 'Excel kezdőknek és haladóknak',
      items: [
        {
          type: 'search',
          position: 'right',
        },
        {
          href: 'https://github.com/eteszt/excel',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} - Minden jog fenntartva`,
    },
    liveCodeBlock: {
      playgroundPosition: 'bottom',
    },
  },
};

module.exports = config;