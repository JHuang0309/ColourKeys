import { useState } from 'react';

const SaveButton = ({ onClick, isLoading }) => {
  return (
    <button
      onClick={onClick}
      disabled={isLoading}
      className="fixed bottom-8 right-8 px-4 py-2 bg-gray-800 text-white text-sm rounded-lg 
                 hover:bg-gray-700 active:bg-gray-900 transition-colors duration-150
                 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
    >
      {isLoading ? 'Saving...' : 'Save PNG'}
    </button>
  );
};

export default SaveButton;