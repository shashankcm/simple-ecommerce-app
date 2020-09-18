module.exports = {
  extends: [
    'eslint-config-airbnb-base',
    './eslintRules/react',
    './eslintRules/react-a11y',
    './eslintRules/react-hooks',
  ].map(require.resolve),
  rules: {},
};
