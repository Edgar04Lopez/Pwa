module.exports = {
	globDirectory: 'src/',
	globPatterns: [
		'**/*.png'
	],
	swDest: 'src/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};