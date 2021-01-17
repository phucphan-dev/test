import { Story, Meta } from "@storybook/react";
import base from "paths.macro";
import React from "react";

import ModalLogin from ".";

export default {
  title: `Components/${base.replace("/src/components/", "").replace(/\/$/, "")}`,
  component: ModalLogin,
} as Meta;

export const normal: Story = () => (
  <ModalLogin opened />
);
