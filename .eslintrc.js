module.exports = {
	'parser': 'babel-eslint',
	'extends': ['airbnb', 'airbnb/hooks'],
	'env': {
		'browser': true,
	},
	'rules': {
		'max-len': [
			'error', 90, 2, {
				'ignoreStrings': true,
			},
		],
		'no-tabs': 0,
		'quote-props': ['error', 'always'],
		'indent': ['error', 'tab', { 'SwitchCase': 1 }],
		'react/jsx-indent-props': ['error', 'tab'],
		'react/jsx-indent': ['error', 'tab'],
		'react/jsx-one-expression-per-line': 0,
	},
};
