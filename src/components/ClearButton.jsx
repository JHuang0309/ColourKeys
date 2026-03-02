const ClearButton = ({ onClick, disabled }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="fixed bottom-8 left-8 px-4 py-2 bg-white text-black text-sm rounded-lg 
                 hover:bg-gray-200 active:bg-gray-300 transition-colors duration-150
                 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
    >
      Clear
    </button>
  );
};

export default ClearButton;