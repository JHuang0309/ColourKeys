const SettingsModal = ({ isOpen, onClose, canvasSize, onCanvasSizeChange }) => {
  if (!isOpen) return null;

  const handleSizeChange = (e) => {
    const value = parseInt(e.target.value);
    if (value >= 8 && value <= 30) {
      onCanvasSizeChange(value);
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-light text-gray-800">Settings</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        <div className="space-y-6">
          {/* Canvas Size Setting */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Canvas Size
            </label>
            <div className="flex items-center gap-4">
              <input
                type="range"
                min="8"
                max="30"
                value={canvasSize}
                onChange={handleSizeChange}
                className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                style={{
                  background: `linear-gradient(to right, #4B5563 0%, #4B5563 ${((canvasSize - 8) / 22) * 100}%, #E5E7EB ${((canvasSize - 8) / 22) * 100}%, #E5E7EB 100%)`
                }}
              />
              <span className="text-2xl font-light text-gray-800 w-12 text-right">
                {canvasSize}
              </span>
            </div>
            <div className="flex justify-between text-xs text-gray-500 mt-2">
              <span>Small (8)</span>
              <span>Large (30)</span>
            </div>
          </div>

          {/* Info text */}
          <p className="text-sm text-gray-500">
            Canvas size determines the maximum number of blocks per row. Smaller values create tighter compositions.
          </p>
        </div>

        {/* Close button */}
        <button
          onClick={onClose}
          className="mt-8 w-full py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors duration-150"
        >
          Done
        </button>
      </div>
    </div>
  );
};

export default SettingsModal;