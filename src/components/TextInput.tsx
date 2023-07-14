import React, { InputHTMLAttributes } from 'react';

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const TextInput: React.FC<TextInputProps> = ({ label, ...rest }) => {
  return (
    <div className="mb-4">
      <label className="block mb-2 font-semibold">{label}</label>
      <input className="border rounded-md px-4 py-2 w-full" {...rest} />
    </div>
  );
};

export default TextInput;
