import React from 'react';

const InputField = ({
  label,
  required = false,
  input = 'text',
  placeholder,
}: {
  label: string;
  required: boolean;
  input: string;
  placeholder: string;
}) => {
  return (
    <div className="flex flex-col">
      <label className="text-sm font-medium" htmlFor={label}>
        {label}
        {required ? <span className="text-red-600">*</span> : ''}
      </label>
      <input
        className="border-2 border-black/30 rounded-md h-12 p-2 mt-1 "
        type={input}
        name={label}
        placeholder={placeholder}
        id=""
      />
    </div>
  );
};

export default InputField;
