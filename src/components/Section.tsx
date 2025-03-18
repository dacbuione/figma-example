import React from 'react';
import Container from './Container';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  container?: boolean;
  id?: string;
  background?: 'white' | 'lightGray' | 'primary' | 'none';
}

const Section: React.FC<SectionProps> = ({
  children,
  className = '',
  container = true,
  id,
  background = 'none',
}) => {
  const bgClasses = {
    none: '',
    white: 'bg-white',
    lightGray: 'bg-lightGray',
    primary: 'bg-primary',
  };

  return (
    <section id={id} className={`py-16 ${bgClasses[background]} ${className}`}>
      {container ? <Container>{children}</Container> : children}
    </section>
  );
};

export default Section; 