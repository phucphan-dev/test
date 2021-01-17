import { Story, Meta } from "@storybook/react";
import base from "paths.macro";
import React from "react";

import Input from ".";

export default {
  title: `Components/${base.replace("/src/components/", "").replace(/\/$/, "")}`,
  component: Input,
} as Meta;

export const normal: Story = () => (
  <Input type="text" icon="mail" placeholder="EMAIL" />
);
