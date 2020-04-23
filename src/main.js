// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import $ from 'jquery';
import Vue from 'vue';
import App from './App';
import router from './router';
import createStore from './../store/index';
import globalStoreGetters from './mixins/globalStoreGetters';

Vue.config.productionTip = false;
Vue.mixin(globalStoreGetters);

let store = createStore();
/* eslint-disable no-new */
new Vue({
	el: '#app',
	$,
	router,
	store,
	components: {App},
	template: '<App/>'
});
