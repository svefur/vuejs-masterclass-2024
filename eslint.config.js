import skipFormatting from '@vue/eslint-config-prettier/skip-formatting'
import vueTsEslintConfig from '@vue/eslint-config-typescript'
import pluginVue from 'eslint-plugin-vue'

export default [
	{
		name: 'app/files-to-lint',
		files: ['**/*.{ts,mts,tsx,vue}'],
	},

	{
		name: 'app/files-to-ignore',
		ignores: ['**/dist/**', '**/dist-ssr/**', '**/coverage/**'],
	},

	...pluginVue.configs[('vue/vue3-essential', 'flat/vue3-recommended')],
	{
		rules: {
			'vue/multi-word-component-names': 0,
		},
	},
	...vueTsEslintConfig(),
	skipFormatting,
]
