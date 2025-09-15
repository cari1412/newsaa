import React from 'react';

const LogoTicker = () => {
  // Placeholder logos
  const logos = [
    { name: 'Company 1', icon: '🚀' },
    { name: 'Company 2', icon: '💎' },
    { name: 'Company 3', icon: '🌟' },
    { name: 'Company 4', icon: '⚡' },
    { name: 'Company 5', icon: '🔥' },
    { name: 'Company 6', icon: '✨' },
  ];

  return (
    <section className="py-12 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-medium text-gray-500 dark:text-gray-400 mb-8 uppercase tracking-wider">
          Trusted by teams from around the world
        </p>
        
        <div className="relative overflow-hidden">
          <div className="flex space-x-16 animate-ticker">
            {/* First set of logos */}
            {logos.map((logo, index) => (
              <div
                key={`first-${index}`}
                className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 whitespace-nowrap"
              >
                <span className="text-3xl">{logo.icon}</span>
                <span className="text-lg font-semibold">{logo.name}</span>
              </div>
            ))}
            
            {/* Duplicate set for seamless loop */}
            {logos.map((logo, index) => (
              <div
                key={`second-${index}`}
                className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 whitespace-nowrap"
              >
                <span className="text-3xl">{logo.icon}</span>
                <span className="text-lg font-semibold">{logo.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoTicker;