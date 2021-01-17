import { action } from "@storybook/addon-actions";
import { text, withKnobs } from "@storybook/addon-knobs";
import { Story, Meta } from "@storybook/react";
import base from "paths.macro";
import React from "react";

import RoundedButton from ".";

export default {
  title: `Components/${base.replace("/src/components/", "").replace(/\/$/, "")}`,
  component: RoundedButton,
  decorators: [withKnobs],
} as Meta;

export const withText: Story = () => {
  const textButton = text("Text", "Hello Button");
  return (
    <RoundedButton color="hotpink" onClick={action("clicked")}>{textButton}</RoundedButton>
  );
};

export const withSomeEmoji: Story = () => (
  <RoundedButton color="papayawhip" onClick={action("clicked")}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </RoundedButton>
);
