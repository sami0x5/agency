import React from 'react';
import { ErrorType } from './ContactForm';

const InputField = ({
  label,
  required = false,
  input = 'text',
  placeholder,
  customInput = false,
  autoComplete,
  children,
  className,
  name,
  handleChange,
  value,
  error,
}: {
  label: string;
  required: boolean;
  input?: string;
  placeholder?: string;
  customInput?: boolean;
  autoComplete: string;
  className?: string;
  children?: React.ReactNode;
  name: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  error: string | undefined;
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
          name={name}
          value={value}
          onChange={e => handleChange(e)}
          placeholder={placeholder}
          autoComplete={autoComplete}
          id=""
        />
      ) : (
        children
      )}
      {error && <p className="text-xs text-red-600">{error} </p>}
    </div>
  );
};

export default InputField;
