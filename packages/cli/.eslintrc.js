// Using .js to allow comments
module.exports = {
	parser: '@typescript-eslint/parser', // Specifies the ESLint parser
	extends: [
		'oclif',
		'oclif-typescript',
		'plugin:@typescript-eslint/recommended',
		'prettier/@typescript-eslint',
		'plugin:prettier/recommended',
	],
	plugins: ['@typescript-eslint', 'react'],
	rules: {
		'react/prop-types': 'off', // Disable prop-types as we use TypeScript for type checking
		'@typescript-eslint/explicit-function-return-type': 'off',
		'@typescript-eslint/camelcase': 'off',
	},
}
