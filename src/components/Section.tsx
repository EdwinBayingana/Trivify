'use client';
import React, { ReactNode } from 'react';

interface SectionProps {
  className: string;
  children: ReactNode;
}

const Section: React.FC<SectionProps> = ({ children, className }) => {
  return <div className={className}>{children}</div>;
};

export default Section;
