import {
  themes as prismThemes
} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'PGS Docs',
  tagline: 'Découvrez la documentation officielle de PGS',
  favicon: 'img/Cfg-LogoBlk.ico',

  url: 'https://pgsdocs.github.io',
  baseUrl: '/',

  organizationName: 'ProGestionSoft',
  projectName: 'PGSDocs',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'fr',
    locales: ['fr', 'en'],
    localeConfigs: {
      fr: {
        label: 'Français',
      },
      en: {
        label: 'English',
      },
    },
  },

  presets: [
    ['classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
        },

        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
          blogTitle: 'PGS Blog',
          blogSidebarTitle: 'Articles récents'
        },

        theme: {
          customCss: './src/css/custom.css',
        },

        googleTagManager: {
          containerId: 'GTM-P5NG32J9',
        },
      }),
    ],
  ],

  plugins: [
    [require.resolve("@easyops-cn/docusaurus-search-local"),
      ({
        hashed: true,
        language: ["fr"],
        highlightSearchTermsOnTargetPage: true,
        searchBarShortcut: false,
      }),
    ],
  ],

  themes: ['@docusaurus/theme-live-codeblock'],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/Cfg-Share.png',

      colorMode: {
        respectPrefersColorScheme: true,
      },

      hideOnScroll: true,

      liveCodeBlock: {
       playgroundPosition: 'top',
      },

      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },

      navbar: {
        title: 'PGS Docs',

        logo: {
          alt: 'Logo PGS Docs',
          src: 'img/Cfg-LogoBlk.ico',
          srcDark: 'img/Cfg-LogoWth.ico',
        },

        items: [{
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            label: 'Docs',
            position: 'left',
          },
          {
            to: '/blog',
            label: 'Blog',
            position: 'left'
          },
          {
            type: 'dropdown',
            label: 'Pour les candidats',
            position: 'left',
            items: [{
                label: 'Checker les offres',
                href: 'https://hire.progestionsoft.com',
              },
              {
                label: 'Comment postuler',
                to: '/docs/cnd/postulate',
              },
              {
                label: 'A propos des  tests en ligne',
                to: '/docs/cnd/test',
              },
            ],
          },
          {
            type: 'dropdown',
            label: 'Pour les développeurs',
            position: 'left',
            items: [{
                label: 'Iframe dans PGSThèque',
                to: '/docs/dev/iframe',
              },
              {
                label: 'Intégrer un site web statique',
                to: '/docs/dev/site-statique',
              },
              {
                label: 'API référence',
                to: '/docs/category/api-référence',
              },
              {
                label: 'Playground',
                to: '/playground',
              },
            ],
          },
          {
            type: 'search',
            position: 'right',
          },
          {
            type: 'localeDropdown',
            position: 'right',
            dropdownItemsAfter: [{
              to: 'https://github.com/ProGestionSoft/PGSTranslate',
              label: 'Proposer une traduction',
            }],
          },
        ],
      },

      footer: {
        style: 'light',
        links: [{
            title: 'Ressources',
            items: [{
                label: 'Documentation',
                to: '/docs/intro',
              },
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'API',
                to: '/docs/category/api-référence',
              },
              {
                label: 'Playground',
                to: '/playground',
              },
            ],
          },
          {
            title: 'Plus',
            items: [{
                label: 'Politique de confidentialité',
                href: '/',
              },
              {
                label: 'Conditions d\'utilisation',
                href: '/',
              },
              {
                label: 'Foires aux questions',
                href: '/',
              },
            ],
          },
          {
            title: 'Communauté',
            items: [{
                label: 'Forum',
                href: '/',
              },
              {
                label: 'Telegram',
                href: 'https://t.me/PGSUsers',
              },
              {
                label: 'WhatsApp',
                href: 'https://chat.whatsapp.com/DQTw6LfDkH8CyM7XE9AVRd',
              },
              {
                label: 'Facebook',
                href: 'https://facebook.com/groups/PGSUsers',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/ygy6dv6C',
              },
            ],
          },
          {
            title: 'Nous suivre',
            items: [
              {
                html: `
                  <a href="https://linkedin.com/company/ProGestionSoft"
                  target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <i
                    class="fab fa-linkedin fa-2x"
                    style="color:var(--txt-clr); opacity: 0.8;">
                    </i>
                  </a>
                  
                  <a
                  href="https://facebook.com/ProGestionSoft"
                  target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                    <i class="fab fa-facebook fa-2x"
                    style="color:var(--txt-clr); opacity: 0.8;">
                    </i>
                  </a>

                  <a
                  href="https://instagram.com/ProGestionSoft"
                  target="_blank" rel="noopener noreferrer" aria-label="instagram">
                    <i class="fab fa-instagram fa-2x"
                    style="color:var(--txt-clr); opacity: 0.8;">
                    </i>
                  </a>

                  <a
                  href="https://twitter.com/ProGestionSoft"
                  target="_blank" rel="noopener noreferrer" aria-label="twitter">
                    <i class="fab fa-x-twitter fa-2x"
                    style="color:var(--txt-clr); opacity: 0.8;">
                    </i>
                  </a>

                  <a href="https://youtube.com/@ProGestionSoft"
                  target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                    <i class="fab fa-youtube fa-2x"
                    style="color:var(--txt-clr); opacity: 0.8;">
                    </i>
                  </a>

                  <a href="https://t.me/Pro_Gestion_Soft"
                  target="_blank" rel="noopener noreferrer" aria-label="Telegram">
                    <i class="fab fa-telegram-plane fa-2x"
                    style="color:var(--txt-clr); opacity: 0.8;">
                    </i>
                  </a>

                  <a href="https://tiktok.com/@ProGestionSoft"
                  target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                    <i class="fab fa-tiktok fa-2x"
                    style="color:var(--txt-clr); opacity: 0.8;">
                    </i>
                  </a>
                `,
              },
            ]
          }
        ],

        copyright: `© ${new Date().getFullYear()} PRO GESTION SOFT, SARL`,
      },

      plugins: [
        '@docusaurus/plugin-content-docs',
        '@docusaurus/plugin-global-styles',
      ],

      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;