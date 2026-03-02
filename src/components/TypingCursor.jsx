const TypingCursor = ({ size = 60, isCentered = false }) => {
  return (
    <div
      className={`flex items-end ${isCentered ? 'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' : ''}`}
      style={{
        height: `${size}px`, // Match block height
      }}
    >
      <div
        className="animate-pulse"
        style={{
          width: `${size}px`,
          height: '3px',
          backgroundColor: '#D1D5DB',
          borderRadius: '2px',
        }}
      />
    </div>
  );
};

export default TypingCursor;