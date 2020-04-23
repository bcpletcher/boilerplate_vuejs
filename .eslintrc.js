module.exports = {
	root: true,
	parserOptions: {
		parser: 'babel-eslint'
	},
	env: {
		browser: true,
		commonjs: true,
		es6: true,
		jquery: true,
	},
	extends: [
		'plugin:vue/essential',
		'standard'
	],
	plugins: [
		'vue'
	],
	rules: {
		'generator-star-spacing': 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'comma-dangle': 0,
		'indent': [0, 'tab'],
		'no-tabs': 0,
		'spaced-comment': 1,
		'no-undef': 1,
		'no-unused-vars': 1,
		'quotes': 0,
		'no-trailing-spaces': [2, {'skipBlankLines': true, 'ignoreComments': true}],
		'semi': [2, 'always'],
	}
}
