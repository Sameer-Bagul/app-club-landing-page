import React, { useState } from 'react';

const Feedback = () => {
  const [feedbackType, setFeedbackType] = useState('general');

  return (
    <div className="pt-24 pb-16 bg-white text-black dark:bg-gray-900 dark:text-white transition-colors duration-300">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-xl p-8 border border-purple-500/20 transition-colors duration-300 
                        bg-gradient-to-r from-purple-100 to-gray-200 dark:from-purple-900/20 dark:to-black">
          <h1 className="text-3xl font-bold mb-8 text-center">Select Feedback Type</h1>
          
          <div className="flex justify-center space-x-4 mb-8">
            <button
              className={`px-6 py-2 rounded-lg transition-colors text-white 
                          ${feedbackType === 'general' ? 'bg-purple-600' : 'bg-purple-300 dark:bg-purple-900/30 hover:bg-purple-400 dark:hover:bg-purple-900/50'}`}
              onClick={() => setFeedbackType('general')}
            >
              General Feedback
            </button>
            <button
              className={`px-6 py-2 rounded-lg transition-colors text-white 
                          ${feedbackType === 'event' ? 'bg-purple-600' : 'bg-purple-300 dark:bg-purple-900/30 hover:bg-purple-400 dark:hover:bg-purple-900/50'}`}
              onClick={() => setFeedbackType('event')}
            >
              Event Feedback
            </button>
          </div>
          
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 bg-gray-100 dark:bg-purple-900/20 border border-purple-500/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-black dark:text-white transition-colors duration-300"
                placeholder="Your name"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Branch</label>
              <input
                type="text"
                className="w-full px-4 py-2 bg-gray-100 dark:bg-purple-900/20 border border-purple-500/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-black dark:text-white transition-colors duration-300"
                placeholder="Your branch"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Year</label>
              <select
                className="w-full px-4 py-2 bg-gray-100 dark:bg-purple-900/20 border border-purple-500/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-black dark:text-white transition-colors duration-300"
              >
                <option value="">Select Year</option>
                <option value="FE">FE</option>
                <option value="SE">SE</option>
                <option value="TE">TE</option>
                <option value="BE">BE</option>
              </select>
            </div>
            
            {feedbackType === 'event' && (
              <div>
                <label className="block text-sm font-medium mb-2">Event Name</label>
                <select
                  className="w-full px-4 py-2 bg-gray-100 dark:bg-purple-900/20 border border-purple-500/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-black dark:text-white transition-colors duration-300"
                >
                  <option value="">Select Event</option>
                  <option value="ui-ux">UI/UX Competition</option>
                  <option value="bootcamp">Gen AI BootCamp</option>
                  <option value="mentor">Mentor Session</option>
                </select>
              </div>
            )}
            
            <div>
              <label className="block text-sm font-medium mb-2">Your Feedback</label>
              <textarea
                className="w-full px-4 py-2 bg-gray-100 dark:bg-purple-900/20 border border-purple-500/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-black dark:text-white h-32 transition-colors duration-300"
                placeholder="Share your thoughts..."
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="w-full py-3 bg-purple-500 hover:bg-purple-600 text-white rounded-lg transition-colors duration-300"
            >
              SUBMIT FEEDBACK
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Feedback;