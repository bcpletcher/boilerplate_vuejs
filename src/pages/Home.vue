<template>
	<div id="pageHomepage">
		<p>Vuefire Boilerplate</p>
		<img src="../../static/img/vue.png"/>
	</div>
</template>

<script>
	export default {
		name: 'Home',
		data: function () {
			return {

			};
		}
	};
</script>

<style scoped lang="less">
	#pageHomepage {
		height: 100%;
		display: flex;
		justify-content: center;
		flex-direction: column;
	}
	p {
		text-align: center;
		font-size: 32px;
	}
	img {
		display: block;
		margin: 0 auto;
		height: 200px;
		max-width: 320px;
	}
</style>
