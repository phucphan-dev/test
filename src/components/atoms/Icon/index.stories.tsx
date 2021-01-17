import { Story, Meta } from "@storybook/react";
import base from "paths.macro";
import React from "react";

import Icon, { iconList, IconName } from ".";

const listIcon = Object.keys(iconList).map((item) => item as IconName);

export default {
  title: `Components/${base.replace("/src/components/", "").replace(/\/$/, "")}`,
  component: Icon,
  argTypes: {
    iconName: {
      control: {
        type: "select",
        options: listIcon,
      },
    },

  },
} as Meta;

export const normal: Story = ({ iconName }) => (
  <div style={{ backgroundColor: "whitesmoke" }}>
    <Icon iconName={iconName} />
  </div>
);
