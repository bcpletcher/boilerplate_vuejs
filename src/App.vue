<template>
	<div id="app">
		<div class="navigation" v-if="path !== '/resume'">
			<navigation/>
		</div>
		<transition mode="out-in">
			<router-view class="viewer"/>
		</transition>
	</div>
</template>
<script>
	import $ from 'jquery';
	import navigation from "./components/navigation";
	export default {
		name: 'App',
		components: {
			navigation,
		},
		data () {
			return {
				mounted: false,
			};
		},
		computed: {
			path () {
				return this.$route.path;
			}
		},
		watch: {
			$route (to, from) {
				this.$store.commit('setPreviousPath', from.path);
			},
		},
		methods: {
			setWindowWidth (e) {
				this.$store.commit('setWindowWidth', window.innerWidth);
			},
		},
		created () {
		},
		mounted () {
			console.log($('#app'));
			this.setWindowWidth();
			window.addEventListener("resize", this.setWindowWidth);
			this.mounted = true;
		},
		beforeDestroy () {
			window.removeEventListener('resize', this.setWindowWidth);
		}
	};
</script>
<style lang="less">

	/*------------- ANIMATION -------------*/
	.fade-enter-active, .fade-leave-active {
		transition: opacity .5s;
	}
	.fade-enter, .fade-leave-to {
		opacity: 0;
	}
</style>
