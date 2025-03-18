import React from 'react';

const TailwindTest: React.FC = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold underline text-blue-600">
        This heading should be large, bold, underlined, and blue if Tailwind is working.
      </h1>
      <div className="mt-4 p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
        <div className="shrink-0">
          <div className="h-12 w-12 bg-primary rounded-full"></div>
        </div>
        <div>
          <div className="text-xl font-medium text-black">Tailwind Test</div>
          <p className="text-gray-500">This card should have styling if Tailwind is working.</p>
        </div>
      </div>
    </div>
  );
};

export default TailwindTest; 