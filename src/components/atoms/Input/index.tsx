import React, { ChangeEvent } from "react";

import Icon, { IconName } from "../Icon";

import mapModifiers from "utils/functions";

interface InputProps {
  type: string;
  id?: string;
  name?: string;
  value?: string | number;
  placeholder?: string;
  disabled?: boolean;
  readonly?: boolean;
  error?: boolean;
  success?: boolean;
  defaultValue?: string;
  hidden?: boolean;
  icon?: IconName;
  handleChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  handleFocus?: (e: ChangeEvent<HTMLInputElement>) => void;
  handleBlur?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({
  type,
  id,
  name,
  value,
  placeholder,
  disabled,
  defaultValue,
  handleChange,
  handleFocus,
  readonly,
  handleBlur,
  error,
  icon,
  hidden,
}) => (
  <div className={mapModifiers("a-input", error && "error")}>
    {icon && <Icon iconName={icon} />}
    <input
      type={type}
      disabled={disabled}
      name={name}
      id={id}
      readOnly={readonly}
      hidden={hidden}
      defaultValue={defaultValue}
      value={value}
      placeholder={placeholder}
      onChange={(e): void => handleChange && handleChange(e)}
      onFocus={(e): void => handleFocus && handleFocus(e)}
      onBlur={(e): void => handleBlur && handleBlur(e)}
    />
  </div>
);

export default Input;
