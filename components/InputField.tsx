import React from 'react';

const InputField = ({
  label,
  required = false,
  input = 'text',
  placeholder,
  customInput = false,
  autoComplete,
  children,
  className,
}: {
  label: string;
  required: boolean;
  input?: string;
  placeholder?: string;
  customInput?: boolean;
  autoComplete: string;
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div className={`flex flex-col text-lg ${className}`}>
      <label className="text-sm font-medium" htmlFor={label}>
        {label}
        {required ? <span className="text-red-600">*</span> : ''}
      </label>
      {!customInput ? (
        <input
          className="border-2 border-black/30 rounded-md h-12 p-2 mt-1 "
          type={input}
          name={label}
          placeholder={placeholder}
          autoComplete={autoComplete}
          id=""
        />
      ) : (
        children
      )}
    </div>
  );
};

export default InputField;
