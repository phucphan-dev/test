import { Story, Meta } from "@storybook/react";
import base from "paths.macro";
import React from "react";

import Social from ".";

export default {
  title: `Components/${base.replace("/src/components/", "").replace(/\/$/, "")}`,
  component: Social,
} as Meta;

export const normal: Story = () => (
  <Social type="google" />
);
