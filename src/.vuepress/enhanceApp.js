/*
 * Use this file to augment vuepress with other vue-y things
 */

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default ({Vue, options, router, siteData}) => {
  Vue.use(BootstrapVue);
};
