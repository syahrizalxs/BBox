module.exports = {
	transpileDependencies: [
		'vuetify',
	],
	lintOnSave: true,
	chainWebpack: config => {
		config.module.rules.delete('eslint')
	}
}
