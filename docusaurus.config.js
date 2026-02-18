// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Cubing History",
  tagline: "Preserving contributions and achievements in the puzzle community",
  favicon: "img/CubingHistory.svg",

  // Set the production url of your site here
  url: "http://www.cubinghistory.com/",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "mjstraughan", // Usually your GitHub org/user name.
  projectName: "CubingHistory", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/",
          sidebarPath: "./sidebars.js",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl: "https://github.com/mjstraughan/CubingHistory/tree/main/",
        },
        //blog: false,
        //blog: {
        //showReadingTime: true,
        // Please change this to your repo.
        // Remove this to remove the "edit this page" links.
        //editUrl:
        //"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        //},
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  plugins: ["docusaurus-plugin-goatcounter", "docusaurus-plugin-zooming"],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/SocialCard.png",
      scrollAnchors: true,
      algolia: {
        appId: "GOICCKWUQG", // Replace with your App ID
        apiKey: "17763f481d68f01ab8b730c6913c74c3", // Replace with your Search API Key
        indexName: "cubinghistory", // Provided by Algolia
        contextualSearch: true, // Enables smart search within docs
        searchParameters: {}, // Optional additional search parameters
      },
      themes: ["@docusaurus/theme-search-algolia"],
      navbar: {
        title: "Cubing History",
        logo: {
          alt: "Cubing History",
          src: "img/CubingHistory.svg",
        },
        items: [
          /*{
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "left",
            label: "Tutorial",
          },*/
          //{ to: "/blog", label: "Blog", position: "left" },
          /*{
            href: "https://ko-fi.com/straughan",
            label: "Donate",
            position: "right",
          },*/
          {
            href: "https://discord.gg/GJB2ER2Q3M",
            label: "Discord",
            position: "right",
          },
          {
            href: "https://github.com/mjstraughan/CubingHistory",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        copyright: `Copyright © ${new Date().getFullYear()} Michael James Straughan`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      colorMode: {
        defaultMode: "dark",
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 5,
      },
      goatcounter: {
        code: "cubinghistory",
      },
      zoom: {
        selector: '.markdown img:not(.collage-image)', // Exclude your custom collage
        //
        background: {
          light: 'rgb(255, 255, 255)',
          dark: 'rgb(50, 50, 50)'
        },
        config: {
          margin: 24,
          scrollOffset: 0,
        },
      imageZoom: {
        selector: '.markdown img:not(.collage-image)',
      },
    },
    }),
};

export default config;
