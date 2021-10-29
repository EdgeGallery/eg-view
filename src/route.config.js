import navConfig from './nav.config'

const LOAD_MAP = {
  'en-US': name => {
    return r => require.ensure([], () =>
      r(require(`./pages/en-US/${name}.vue`)),
    'en-US')
  },
  'zh-CN': name => {
    return r => require.ensure([], () =>
      r(require(`./pages/zh-CN/${name}.vue`)),
    'zh-CN')
  }
}

const LOAD_DOCS_MAP = {
  'en-US': path => {
    return r => require.ensure([], () =>
      r(require(`./docs/en-US${path}.md`)),
    'en-US')
  },
  'zh-CN': path => {
    return r => require.ensure([], () =>
      r(require(`./docs/zh-CN${path}.md`)),
    'zh-CN')
  }
}

const load = function (lang, path) {
  return LOAD_MAP[lang](path)
}

const loadDocs = function (lang, path) {
  return LOAD_DOCS_MAP[lang](path)
}

const registerRoute = (navData) => {
  let navRoute = []
  Object.keys(navData).forEach((lang, index) => {
    navRoute.push({
      component: load(lang, 'component'),
      path: `/${lang}/component`,
      redirect: `/${lang}/component/OverviewInstru`,
      children: []
    })
    let navs = navData[lang]
    navs.forEach(nav => {
      if (nav.children) {
        nav.children.forEach(navChild => {
          addRoute(navChild, lang, index)
        })
      } else if (nav.groups) {
        nav.groups.forEach(group => {
          group.list.forEach(navInGroup => {
            addRoute(navInGroup, lang, index)
          })
        })
      } else {
        addRoute(nav, lang, index)
      }
    })
  })
  function addRoute (page, lang, index) {
    const component = loadDocs(lang, page.path)
    let child = {
      name: 'component-' + lang + (page.title || page.name),
      component: component.default || component,
      path: page.path.slice(1),
      meta: {
        description: page.description,
        title: page.title || page.name,
        lang
      }
    }

    navRoute[index].children.push(child)
  }

  return navRoute
}

let route = registerRoute(navConfig)
let userLanguage = window.location.href
let defaultComponentPath = '/zh-CN/component'
if (userLanguage.indexOf('en-') !== -1) {
  defaultComponentPath = '/en-US/component'
}
route = route.concat([{
  path: '/',
  redirect: defaultComponentPath
}])

export default route
