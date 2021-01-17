import {
  withKnobs,
  text,
  boolean,
  select,
} from "@storybook/addon-knobs";
import { Story, Meta } from "@storybook/react";
import base from "paths.macro";
import React from "react";

import Button from ".";

export default {
  title: `Components/${base.replace("/src/components/", "").replace(/\/$/, "")}`,
  component: Button,
  decorators: [withKnobs],
} as Meta;

export const normal: Story = () => {
  const disabled = boolean("Disabled", false);
  const type = select("Type Button", ["button", "submit"], "button");
  const btnText = text("Text Button", "Connect Dapp Wallet");
  const theme = select("Theme", ["primary", "secondary", "gradient", "text"], "primary");
  const transform = select("Transform", ["uppercase", "capitalize", "lowercase"], "uppercase");

  return (
    <Button
      disabled={disabled}
      type={type}
      theme={theme}
      transform={transform}
    >
      {btnText}
    </Button>
  );
};
