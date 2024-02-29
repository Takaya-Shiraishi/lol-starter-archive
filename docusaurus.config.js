// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'lol-starter-archive',
  tagline: 'Starter Archive',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://takaya-shiraishi.github.io/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/lol-starter-archive/docs/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Takaya-Shiraishi', // Usually your GitHub org/user name.
  projectName: 'lol-starter-archive', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'ja',
    locales: ['ja', 'en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          remarkPlugins: [require('remark-breaks')]
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/logo.webp',
      navbar: {
        title: 'LoL Starter Archive',
        logo: {
          alt: 'LSAlogo',
          src: 'img/logo.logo.webp',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'チュートリアル',
          }
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'ドキュメント',
            items: [
              {
                label: 'チュートリアル',
                to: '/',
              },
            ],
          },
          {
            title: '参考にしたサイト一覧',
            items: [
              {
                label: 'op.gg',
                href: 'https://www.op.gg/?hl=ja_JP',
              },
              {
                label: 'blitz',
                href: 'https://blitz.gg/',
              },
              {
                label: 'League of Legends 公式サイト',
                href: 'https://www.leagueoflegends.com/ja-jp/',
              },
            ],
          },
          {
            title: 'その他',
            items: [
              {
                label: 'Writer GitHub',
                href: 'https://github.com/souta0318',
              },
              {
                label: 'Developer GitHub',
                href: 'https://github.com/Takaya-Shiraishi',
              }
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} League of Legends Starter Archive Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
