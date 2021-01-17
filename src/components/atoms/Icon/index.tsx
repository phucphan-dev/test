import React from "react";

import mapModifiers from "utils/functions";

export const iconList = {
  google: "google",
  facebook: "facebook",
  twitter: "twitter",
  telegram: "telegram",
  phoneSocial: "phoneSocial",
  mail: "mail",
  loginHead: "loginHead",
  close: "close",
  password: "password",
};

export type IconName = keyof typeof iconList

interface IconProps {
  iconName: IconName;
}

const Icon: React.FC<IconProps> = ({ iconName }) => <div className={mapModifiers("a-icon", iconName)} />;

export default Icon;
