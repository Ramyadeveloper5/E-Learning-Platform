import { Input } from "antd";
import React from "react";

const CustomInput = ({
  type="text",
  className = "",
  placeholder = "",
  status = "",
  prefix,
  title,
  name,
  value,
  variant,
  disabled,
  required,
  onChange,
  titleClassName,
  containerClassName,
  autoComplete,
}) => {
  const handleChange = (inputValue) => {
    onChange(inputValue);
  };

  return (
    <span className={containerClassName}>
      <p className={`text-base font-normal capitalize mb-4 text-gray-700 ${titleClassName}`}>
        {title}
        {required && (
            <span className="text-red-500 mx-1 text-xs bg-red-50 rounded-md p-1">required</span>
        )}
      </p>
      {type === "text" || type === "email"?
      <Input
        type={type}
        className={`${className}`}
        variant={variant}
        placeholder={placeholder}
        status={status}
        name={name}
        value={value}
        prefix={prefix}
        disabled={disabled}
        onChange={handleChange}
        autoComplete={autoComplete}
        allowClear
      />
      :type === "number" ?
      <Input
      type={type}
      className={`${className}`}
      variant={variant}
      placeholder={placeholder}
      status={status}
      name={name}
      value={value}
      prefix={prefix}
      disabled={disabled}
      onChange={handleChange}
      autoComplete={autoComplete}
      allowClear
    />:
      <Input.Password
      className={`${className}`}
      variant={variant}
      placeholder={placeholder}
      status={status}
      name={name}
      value={value}
      prefix={prefix}
      disabled={disabled}
      onChange={handleChange}
      autoComplete={autoComplete}
      allowClear
    />}
    </span>
  );
};

export default CustomInput;
