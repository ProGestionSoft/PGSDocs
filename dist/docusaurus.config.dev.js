"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _prismReactRenderer = require("prism-react-renderer");

/** @type {import('@docusaurus/types').Config} */
var config = {
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
        label: 'Français'
      },
      en: {
        label: 'English'
      }
    }
  },
  presets: [['classic',
  /** @type {import('@docusaurus/preset-classic').Options} */
  {
    docs: {
      sidebarPath: './sidebars.js'
    },
    blog: {
      showReadingTime: true,
      feedOptions: {
        type: ['rss', 'atom'],
        xslt: true
      },
      onInlineTags: 'warn',
      onInlineAuthors: 'warn',
      onUntruncatedBlogPosts: 'warn',
      blogTitle: 'PGS Blog',
      blogSidebarTitle: 'Articles récents'
    },
    theme: {
      customCss: './src/css/custom.css'
    }
  }]],
  plugins: [[require.resolve("@easyops-cn/docusaurus-search-local"), {
    hashed: true,
    language: ["fr"],
    highlightSearchTermsOnTargetPage: true,
    searchBarShortcut: false
  }]],
  themes: ['@docusaurus/theme-live-codeblock'],
  themeConfig:
  /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
  {
    image: 'img/Cfg-Share.png',
    colorMode: {
      respectPrefersColorScheme: true,
      disableSwitch: false
    },
    hideOnScroll: true,
    liveCodeBlock: {
      playgroundPosition: 'top'
    },
    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: true
      }
    },
    navbar: {
      title: 'PGS Docs',
      logo: {
        alt: 'Logo PGS Docs',
        src: 'img/Cfg-LogoBlk.ico',
        srcDark: 'img/Cfg-LogoWth.ico'
      },
      items: [{
        type: 'docSidebar',
        sidebarId: 'tutorialSidebar',
        label: 'Docs',
        position: 'left'
      }, {
        to: '/blog',
        label: 'Blog',
        position: 'left'
      }, {
        type: 'dropdown',
        label: 'Pour les candidats',
        position: 'left',
        items: [{
          label: 'Checker les offres',
          href: 'https://hire.progestionsoft.com'
        }, {
          label: 'Comment postuler',
          to: '/docs/cnd/postulate'
        }, {
          label: 'A propos des  tests en ligne',
          to: '/docs/cnd/test'
        }]
      }, {
        type: 'dropdown',
        label: 'Pour les développeurs',
        position: 'left',
        items: [{
          label: 'Iframe dans PGSThèque',
          to: '/docs/dev/iframe'
        }, {
          label: 'Intégrer un site web statique',
          to: '/docs/dev/site-statique'
        }, {
          label: 'PGS API',
          to: '/docs/category/api-référence'
        }, {
          label: 'Playground',
          to: '/playground'
        }]
      }, {
        type: 'search',
        position: 'right'
      }, {
        type: 'localeDropdown',
        position: 'right',
        dropdownItemsAfter: [{
          to: 'https://github.com/ProGestionSoft/PGSTranslate',
          label: 'Proposer une traduction'
        }]
      }]
    },
    footer: {
      style: 'light',
      links: [{
        title: 'Ressources',
        items: [{
          label: 'Documentation',
          to: '/docs/intro'
        }, {
          label: 'Blog',
          to: '/blog'
        }, {
          label: 'API',
          to: '/docs/category/api-référence'
        }, {
          label: 'Playground',
          to: '/playground'
        }]
      }, {
        title: 'Plus',
        items: [{
          label: 'Politique de confidentialité',
          href: '/'
        }, {
          label: 'Conditions d\'utilisation',
          href: '/'
        }, {
          label: 'Foires aux questions',
          href: '/'
        }]
      }, {
        title: 'Communauté',
        items: [{
          label: 'Forum',
          href: '/'
        }, {
          label: 'Télégram',
          href: 'https://t.me/PGSUsers'
        }, {
          label: 'WhatsApp',
          href: 'https://chat.whatsapp.com/DQTw6LfDkH8CyM7XE9AVRd'
        }, {
          label: 'Facebook',
          href: 'https://facebook.com/groups/PGSUsers'
        }, {
          label: 'Discord',
          href: 'https://discord.gg/ygy6dv6C'
        }]
      }, {
        title: 'Nous suivre',
        items: [{
          html: "\n                  <a href=\"https://linkedin.com/company/ProGestionSoft\"\n                  target=\"_blank\" rel=\"noopener noreferrer\" aria-label=\"LinkedIn\">\n                    <i\n                    class=\"fab fa-linkedin fa-2x\"\n                    style=\"var(--txt-clr); opacity: 0.8;\">\n                    </i>\n                  </a>\n                  \n                  <a\n                  href=\"https://facebook.com/ProGestionSoft\"\n                  target=\"_blank\" rel=\"noopener noreferrer\" aria-label=\"Facebook\">\n                    <i class=\"fab fa-facebook fa-2x\"\n                    style=\"var(--txt-clr); opacity: 0.8;\">\n                    </i>\n                  </a>\n\n                  <a\n                  href=\"https:/instagram.com/ProGestionSoft\"\n                  target=\"_blank\" rel=\"noopener noreferrer\" aria-label=\"instagram\">\n                    <i class=\"fab fa-instagram fa-2x\"\n                    style=\"var(--txt-clr); opacity: 0.8;\">\n                    </i>\n                  </a>\n\n                  <a\n                  href=\"https:/twitter.com/ProGestionSoft\"\n                  target=\"_blank\" rel=\"noopener noreferrer\" aria-label=\"twitter\">\n                    <i class=\"fab fa-x-twitter fa-2x\"\n                    style=\"var(--txt-clr); opacity: 0.8;\">\n                    </i>\n                  </a>\n\n                  <a href=\"https://youtube.com/@ProGestionSoft\"\n                  target=\"_blank\" rel=\"noopener noreferrer\" aria-label=\"YouTube\">\n                    <i class=\"fab fa-youtube fa-2x\"\n                    style=\"var(--txt-clr); opacity: 0.8;\">\n                    </i>\n                  </a>\n\n                  <a href=\"https://t.me/Pro_Gestion_Soft\"\n                  target=\"_blank\" rel=\"noopener noreferrer\" aria-label=\"Telegram\">\n                    <i class=\"fab fa-telegram-plane fa-2x\"\n                    style=\"var(--txt-clr); opacity: 0.8;\">\n                    </i>\n                  </a>\n\n                  <a href=\"https://tiktok.com/@ProGestionSoft\"\n                  target=\"_blank\" rel=\"noopener noreferrer\" aria-label=\"YouTube\">\n                    <i class=\"fab fa-tiktok fa-2x\"\n                    style=\"var(--txt-clr); opacity: 0.8;\">\n                    </i>\n                  </a>\n                "
        }]
      }],
      copyright: "\xA9 ".concat(new Date().getFullYear(), " PRO GESTION SOFT, SARL")
    },
    plugins: ['@docusaurus/plugin-content-docs', '@docusaurus/plugin-global-styles'],
    prism: {
      theme: _prismReactRenderer.themes.github,
      darkTheme: _prismReactRenderer.themes.dracula
    }
  }
};
var _default = config;
exports["default"] = _default;