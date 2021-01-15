module.exports = {
	extends: 'vi',
	root: true,
	env: {
		jest: true,
		node: true,
	},
	plugins: [
		'svelte3',
	],
	overrides: [
		{
			files: ['**/*.svelte'],
			processor: 'svelte3/svelte3',
			rules: {
				'no-use-before-define': 'off',
			},
		},
	],
	rules: {
		'max-len': ['warn', 120, 4, { ignoreComments: true, ignoreUrls: true, ignoreStrings: true, ignoreTemplateLiterals: true }],
	},
};
