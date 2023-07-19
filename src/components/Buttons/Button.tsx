import React, { ReactNode, MouseEventHandler } from 'react';

interface ButtonProps {
  children: ReactNode;
  onClick: MouseEventHandler<HTMLButtonElement>;
  className?: string;
  disabled: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  className,
  disabled = false,
  onClick,
}) => {
  return (
    <button
      className={`px-4 py-2  ${className}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
