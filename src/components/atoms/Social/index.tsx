import React from "react";

import Icon, { IconName } from "../Icon";

interface SocialProps {
  type: IconName;
}

const Social: React.FC<SocialProps> = ({ type }) => (
  <div className="a-social"><Icon iconName={type} /></div>
);

export default Social;
