import React, { ReactNode, MouseEventHandler } from 'react';

interface SectionProps {
  children: ReactNode;
  src: string;
  alt: string;
  className: string;
}

const Section: React.FC<SectionProps> = ({ children, className }) => {
  return <div className={className}>{children}</div>;
};

export default Section;
