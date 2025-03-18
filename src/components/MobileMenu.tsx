import React from 'react';
import Button from './Button';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 md:hidden">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/20 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Menu panel */}
      <div className="fixed top-0 right-0 bottom-0 w-64 bg-white shadow-xl">
        <div className="flex flex-col h-full">
          {/* Close button */}
          <div className="flex justify-end p-4">
            <button 
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-lg"
            >
              <svg 
                className="w-6 h-6 text-secondary" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M6 18L18 6M6 6l12 12" 
                />
              </svg>
            </button>
          </div>

          {/* Navigation links */}
          <nav className="flex flex-col px-4 py-2">
            <a 
              href="#" 
              className="px-4 py-3 text-secondary hover:text-primary hover:bg-gray-50 rounded-lg transition-colors"
            >
              Home
            </a>
            <a 
              href="#" 
              className="px-4 py-3 text-secondary hover:text-primary hover:bg-gray-50 rounded-lg transition-colors"
            >
              Features
            </a>
            <a 
              href="#" 
              className="px-4 py-3 text-secondary hover:text-primary hover:bg-gray-50 rounded-lg transition-colors"
            >
              Community
            </a>
            <a 
              href="#" 
              className="px-4 py-3 text-secondary hover:text-primary hover:bg-gray-50 rounded-lg transition-colors"
            >
              Blog
            </a>
          </nav>

          {/* Action button */}
          <div className="mt-auto p-4">
            <Button variant="primary" size="large" className="w-full">
              Register Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu; 