var plugins = [{
      name: 'gatsby-plugin-react-helmet',
      plugin: require('/Users/druid/Desktop/GatsbyJs/example-react-i18next/node_modules/gatsby-plugin-react-helmet/gatsby-ssr.js'),
      options: {"plugins":[]},
    },{
      name: 'gatsby-theme-i18n',
      plugin: require('/Users/druid/Desktop/GatsbyJs/example-react-i18next/node_modules/gatsby-theme-i18n/gatsby-ssr.js'),
      options: {"plugins":[],"defaultLang":"en","configPath":"/Users/druid/Desktop/GatsbyJs/example-react-i18next/i18n/config.json"},
    },{
      name: 'gatsby-theme-i18n-react-i18next',
      plugin: require('/Users/druid/Desktop/GatsbyJs/example-react-i18next/node_modules/gatsby-theme-i18n-react-i18next/gatsby-ssr.js'),
      options: {"plugins":[],"locales":"./i18n/react-i18next","i18nextOptions":{"ns":["translation","blog","404"]}},
    },{
      name: 'gatsby-plugin-mdx',
      plugin: require('/Users/druid/Desktop/GatsbyJs/example-react-i18next/node_modules/gatsby-plugin-mdx/gatsby-ssr.js'),
      options: {"plugins":[],"defaultLayouts":{"default":"/Users/druid/Desktop/GatsbyJs/example-react-i18next/src/components/layout.js"},"extensions":[".mdx"],"gatsbyRemarkPlugins":[],"lessBabel":false,"remarkPlugins":[],"rehypePlugins":[],"mediaTypes":["text/markdown","text/x-markdown"],"root":"/Users/druid/Desktop/GatsbyJs/example-react-i18next","commonmark":false,"JSFrontmatterEngine":false,"engines":{}},
    },{
      name: 'partytown',
      plugin: require('/Users/druid/Desktop/GatsbyJs/example-react-i18next/node_modules/gatsby/dist/internal-plugins/partytown/gatsby-ssr.js'),
      options: {"plugins":[]},
    }]
/* global plugins */
// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

const apis = require(`./api-ssr-docs`)

function augmentErrorWithPlugin(plugin, err) {
  if (plugin.name !== `default-site-plugin`) {
    // default-site-plugin is user code and will print proper stack trace,
    // so no point in annotating error message pointing out which plugin is root of the problem
    err.message += ` (from plugin: ${plugin.name})`
  }

  throw err
}

export function apiRunner(api, args, defaultReturn, argTransform) {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  const results = []
  plugins.forEach(plugin => {
    const apiFn = plugin.plugin[api]
    if (!apiFn) {
      return
    }

    try {
      const result = apiFn(args, plugin.options)

      if (result && argTransform) {
        args = argTransform({ args, result })
      }

      // This if case keeps behaviour as before, we should allow undefined here as the api is defined
      // TODO V4
      if (typeof result !== `undefined`) {
        results.push(result)
      }
    } catch (e) {
      augmentErrorWithPlugin(plugin, e)
    }
  })

  return results.length ? results : [defaultReturn]
}

export async function apiRunnerAsync(api, args, defaultReturn, argTransform) {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  const results = []
  for (const plugin of plugins) {
    const apiFn = plugin.plugin[api]
    if (!apiFn) {
      continue
    }

    try {
      const result = await apiFn(args, plugin.options)

      if (result && argTransform) {
        args = argTransform({ args, result })
      }

      // This if case keeps behaviour as before, we should allow undefined here as the api is defined
      // TODO V4
      if (typeof result !== `undefined`) {
        results.push(result)
      }
    } catch (e) {
      augmentErrorWithPlugin(plugin, e)
    }
  }

  return results.length ? results : [defaultReturn]
}
