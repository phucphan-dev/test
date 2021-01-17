module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-actions",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
    "@whitespace/storybook-addon-html/register",
    "@storybook/addon-a11y",
    "@storybook/addon-viewport",
    "@storybook/addon-knobs",
  ],
};
