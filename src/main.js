import Vue from 'vue'
import App from './App.vue'
import {BootstrapVue, IconsPlugin} from 'bootstrap-vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {library} from '@fortawesome/fontawesome-svg-core';
import {fas} from '@fortawesome/free-solid-svg-icons';

Vue.config.productionTip = false;

// Bootstrap
Vue.use(IconsPlugin);
Vue.use(BootstrapVue);
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

library.add(fas);
// Font awesome
Vue.component('font-awesome-icon', FontAwesomeIcon);

new Vue({
    render: h => h(App),
}).$mount('#app');
