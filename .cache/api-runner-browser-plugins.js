module.exports = [{
      plugin: require('../node_modules/gatsby-theme-i18n/gatsby-browser.js'),
      options: {"plugins":[],"defaultLang":"en","configPath":"/Users/druid/Desktop/GatsbyJs/example-react-i18next/i18n/config.json"},
    },{
      plugin: require('../node_modules/gatsby-theme-i18n-react-i18next/gatsby-browser.js'),
      options: {"plugins":[],"locales":"./i18n/react-i18next","i18nextOptions":{"ns":["translation","blog","404"]}},
    },{
      plugin: require('../node_modules/gatsby-plugin-mdx/gatsby-browser.js'),
      options: {"plugins":[],"defaultLayouts":{"default":"/Users/druid/Desktop/GatsbyJs/example-react-i18next/src/components/layout.js"},"extensions":[".mdx"],"gatsbyRemarkPlugins":[],"lessBabel":false,"remarkPlugins":[],"rehypePlugins":[],"mediaTypes":["text/markdown","text/x-markdown"],"root":"/Users/druid/Desktop/GatsbyJs/example-react-i18next","commonmark":false,"JSFrontmatterEngine":false,"engines":{}},
    },{
      plugin: require('../node_modules/gatsby/dist/internal-plugins/partytown/gatsby-browser.js'),
      options: {"plugins":[]},
    }]
