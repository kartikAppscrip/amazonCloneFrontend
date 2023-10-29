import React from 'react';

const Input = (props) => {
  const { type = 'text', className, onChange, value, ...others } = props;
  return (
    <input type={type} className={className} value={value} onChange={(e) => onChange?.(e.target.value)} data-test="input-box" {...others} />
  );
};

export default Input;
