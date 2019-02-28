import Vue from 'vue';
import App from './App';
import { router } from './router';
import { Row, Col,Button,PullRefresh,Toast ,Tabbar, TabbarItem  } from 'vant';


Vue.use(Row).use(Col).use(Button).use(PullRefresh).use(Toast).use(Tabbar).use(TabbarItem);

import * as filters from './public/filter.js'

Object.keys(filters).forEach(key => {
    Vue.filter(key, filters[key])
})
new Vue({
  router,
  el: '#app',
  render: h => h(App)
});
