import BgBreadCrumb from './src/components/BgBreadCrumb'
import Banner from './src/components/Banner'

const components = [
  BgBreadCrumb,
  Banner
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
  BgBreadCrumb,
  Banner
}
