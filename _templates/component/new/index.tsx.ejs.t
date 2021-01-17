---
to: src/components/<%= level %>/<%= name %>/index.tsx
---
import React from "react";

interface <%= name %>Props {
}

const <%= name %>: React.FC<<%= name %>Props> = ({}) => {
  return (
    <div><%= name %></div>
  );
};

<%= name %>.defaultProps = {
};

export default <%= name %>;
