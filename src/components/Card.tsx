import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  padding?: 'none' | 'small' | 'medium' | 'large';
  shadow?: 'none' | 'small' | 'medium' | 'large';
  rounded?: 'none' | 'small' | 'medium' | 'large' | 'full';
  hover?: boolean;
}

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  padding = 'medium',
  shadow = 'medium',
  rounded = 'medium',
  hover = false,
}) => {
  // Padding classes
  const paddingClasses = {
    none: 'p-0',
    small: 'p-3',
    medium: 'p-6',
    large: 'p-8',
  };

  // Shadow classes
  const shadowClasses = {
    none: 'shadow-none',
    small: 'shadow-sm',
    medium: 'shadow',
    large: 'shadow-lg',
  };

  // Rounded corner classes
  const roundedClasses = {
    none: 'rounded-none',
    small: 'rounded',
    medium: 'rounded-lg',
    large: 'rounded-xl',
    full: 'rounded-full',
  };

  return (
    <div
      className={`
        bg-white
        ${paddingClasses[padding]}
        ${shadowClasses[shadow]}
        ${roundedClasses[rounded]}
        ${hover ? 'transform transition-transform duration-300 hover:scale-105' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default Card; 