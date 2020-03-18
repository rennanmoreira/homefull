module.exports = {
	preset: '@vue/cli-plugin-unit-jest',
	verbose: true,
	collectCoverage: true,
	coverageDirectory: 'tests/reports',
	coverageThreshold: {
		global: {
			lines: 50,
			branches: 50,
			functions: 50,
			statements: 50
		}
	},
	collectCoverageFrom: [
		'!**/node_modules/**',
		'!**/vendor/**'
	]
}
