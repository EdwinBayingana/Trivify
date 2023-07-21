'use client';
import React, { InputHTMLAttributes } from 'react';

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const TextInput: React.FC<TextInputProps> = ({ ...rest }) => {
  return <input className="border rounded-md" {...rest} />;
};

export default TextInput;
