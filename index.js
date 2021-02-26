import EgBreadCrumb from './src/components/EgBreadCrumb'
import EgBanner from './src/components/EgBanner'
import EgPagination from './src/components/EgPagination'

const components = [
  EgBreadCrumb,
  EgBanner,
  EgPagination
];
const install = function(Vue, opts = {}) {
  locale.use(opts.locale);
  locale.i18n(opts.i18n);

  components.forEach(component => {
    Vue.component(component.name, component);
  });
};
/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export{
  EgBreadCrumb,
  EgBanner,
  EgPagination
}
