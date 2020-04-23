module.exports = {
	computed: {
		windowWidth () {
			return this.$store.getters.getWindowWidth;
		},
		previousPath () {
			return this.$store.getters.getPreviousPath;
		},
	}
};
