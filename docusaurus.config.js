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