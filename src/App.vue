<template>
	<div id="app">
		<router-view class="viewer"/>
		<a class="footer" href="https://www.pletcher.dev" target="_blank">
			<div>
				<img src="../static/img/portfolio.png"/>
				<p>Visit Portfolio</p>
			</div>
		</a>
	</div>
</template>

<script>
	import $ from 'jquery';
	export default {
		name: 'App',
		components: {
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
	#app {
		height: 100%;
		width: 100%;
		position: relative;
	}
	.footer {
		position: absolute;
		bottom: 10px;
		left: 0;
		right: 0;
		div {
			width: 130px;
			margin: 0 auto;
		}
		img, p {
			display: inline-block;
		}
		p {
			margin: 0 0 0 10px;
			line-height: 20px;
			text-align: right;
		}
		img {
			float: left;
			height: 20px;
		}
	}
</style>
