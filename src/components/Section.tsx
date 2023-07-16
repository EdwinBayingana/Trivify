import React, { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  className: string;
}

const Section: React.FC<SectionProps> = ({ children, className }) => {
  return <div className={className}>{children}</div>;
};

export default Section;
