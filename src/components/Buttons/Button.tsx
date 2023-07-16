import React, { ReactNode, MouseEventHandler } from 'react';

interface ButtonProps {
  children: ReactNode;
  onClick: MouseEventHandler<HTMLButtonElement>;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, className }) => {
  return <button className={`px-4 py-2  ${className}`}>{children}</button>;
};

export default Button;
