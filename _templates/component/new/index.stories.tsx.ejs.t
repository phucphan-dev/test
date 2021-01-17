---
to: src/components/<%= level %>/<%= name %>/index.stories.tsx
---
import { Story, Meta } from "@storybook/react";
import base from "paths.macro";
import React from "react";

import <%= name %> from ".";

export default {
  title: `Components/${base.replace("/src/components/", "").replace(/\/$/, "")}`,
  component: <%= name %>,
} as Meta;

export const normal: Story = () => (
  <<%= name %> />
);
