import navConfig from './nav.config'

const LOAD_MAP = {
  'zh-CN': name => {
    return r => require.ensure([], () =>
      r(require(`./pages/zh-CN/${name}.vue`)),
    'zh-CN')
  },
  'en-US': name => {
    return r => require.ensure([], () =>
      r(require(`./pages/en-US/${name}.vue`)),
    'en-US')
  }
}

const load = function (lang, path) {
  return LOAD_MAP[lang](path)
}

const LOAD_DOCS_MAP = {
  'zh-CN': path => {
    return r => require.ensure([], () =>
      r(require(`./docs/zh-CN${path}.md`)),
    'zh-CN')
  },
  'en-US': path => {
    return r => require.ensure([], () =>
      r(require(`./docs/en-US${path}.md`)),
    'en-US')
  }
}

const loadDocs = function (lang, path) {
  return LOAD_DOCS_MAP[lang](path)
}

const registerRoute = (navConfig) => {
  let route = []
  Object.keys(navConfig).forEach((lang, index) => {
    let navs = navConfig[lang]
    route.push({
      path: `/${lang}/component`,
      redirect: `/${lang}/component/OverviewInstru`,
      component: load(lang, 'component'),
      children: []
    })
    navs.forEach(nav => {
      if (nav.groups) {
        nav.groups.forEach(group => {
          group.list.forEach(nav => {
            addRoute(nav, lang, index)
          })
        })
      } else if (nav.children) {
        nav.children.forEach(nav => {
          addRoute(nav, lang, index)
        })
      } else {
        addRoute(nav, lang, index)
      }
    })
  })
  function addRoute (page, lang, index) {
    const component = loadDocs(lang, page.path)
    let child = {
      path: page.path.slice(1),
      meta: {
        title: page.title || page.name,
        description: page.description,
        lang
      },
      name: 'component-' + lang + (page.title || page.name),
      component: component.default || component
    }

    route[index].children.push(child)
  }

  return route
}

let route = registerRoute(navConfig)
let userLanguage = window.location.href
let defaultPath = '/en-US/component'
if (userLanguage.indexOf('zh-') !== -1) {
  defaultPath = '/zh-CN/component'
}
route = route.concat([{
  path: '/',
  redirect: defaultPath
}])

export default route
