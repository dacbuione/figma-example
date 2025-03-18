import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}

const Container: React.FC<ContainerProps> = ({
  children,
  className = '',
  as: Component = 'div'
}) => {
  return (
    <Component
      className={`mx-auto px-4 sm:px-6 md:px-8 lg:px-24 max-w-8xl ${className}`}
    >
      {children}
    </Component>
  );
};

export default Container; 