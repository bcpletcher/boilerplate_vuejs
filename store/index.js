import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default function createStore () {
	return new Vuex.Store({
		state: {
			previousPath: '/',
			windowWidth: 0,
		},
		actions: {},
		mutations: {
			setPreviousPath (state, path) {
				state.previousPath = path;
			},
			setWindowWidth (state, width) {
				state.windowWidth = width;
			},
		},
		getters: {
			getPreviousPath: state => {
				return state.previousPath;
			},
			getWindowWidth: state => {
				return state.windowWidth;
			},
		}
	});
}
