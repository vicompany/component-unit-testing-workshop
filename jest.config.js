module.exports = {
	verbose: true,
	transform: {
		'^.+\\.js$': 'babel-jest',
		'^.+\\.svelte$': 'svelte-jester',
	},
	moduleFileExtensions: ['js', 'svelte'],
	setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
	collectCoverage: true,
};
