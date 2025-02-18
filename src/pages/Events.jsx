import React from 'react';

const Events = () => {
  return (
    <div className="flex items-center justify-center min-h-[80vh] bg-white text-black dark:bg-gray-900 dark:text-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          className="flex flex-col items-center justify-center text-center rounded-xl border border-purple-500/20 
                    transition-colors duration-300 bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-800 dark:to-gray-900 
                    p-10 shadow-md"
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">More Events Coming Soon!</h2>
          <p className="text-gray-700 dark:text-gray-400 mt-2">
            Stay tuned for upcoming events and exciting announcements.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Events;