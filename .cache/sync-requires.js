
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-404-js": preferDefault(require("/Users/druid/Desktop/GatsbyJs/example-react-i18next/src/pages/404.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/druid/Desktop/GatsbyJs/example-react-i18next/src/pages/index.js")),
  "component---src-pages-page-2-mdx": preferDefault(require("/Users/druid/Desktop/GatsbyJs/example-react-i18next/src/pages/page-2.mdx")),
  "component---src-pages-page-3-js": preferDefault(require("/Users/druid/Desktop/GatsbyJs/example-react-i18next/src/pages/page-3.js")),
  "component---src-templates-blog-template-js": preferDefault(require("/Users/druid/Desktop/GatsbyJs/example-react-i18next/src/templates/blog-template.js"))
}

