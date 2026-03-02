// Block sizing configuration
const SIZING_CONFIG = {
  baseSize: 80,
  minSize: 24,
  maxSize: 80,
  shrinkRate: 3,
  gapSize: 8,
};

// Calculate how many blocks fit in one row based on canvas size setting
export const getBlocksPerRow = (containerWidth, blockSize, canvasSize = 14) => {
  // If canvasSize is set, use that as max blocks per row
  if (canvasSize) {
    const gap = SIZING_CONFIG.gapSize;
    const maxBlocksFromWidth = Math.floor((containerWidth + gap) / (blockSize + gap));
    // Return the smaller of: canvas size setting or what fits in width
    return Math.min(canvasSize, Math.max(1, maxBlocksFromWidth));
  }
  
  // Original behavior if no canvasSize specified
  const gap = SIZING_CONFIG.gapSize;
  const availableWidth = containerWidth;
  const blocksPerRow = Math.floor((availableWidth + gap) / (blockSize + gap));
  return Math.max(1, blocksPerRow);
};

// Calculate how many rows the blocks would create
export const calculateRowCount = (blockCount, containerWidth, blockSize, canvasSize) => {
  const blocksPerRow = getBlocksPerRow(containerWidth, blockSize, canvasSize);
  return Math.ceil(blockCount / blocksPerRow);
};

// Calculate block size based on row count
export const calculateBlockSize = (rowCount) => {
  const { baseSize, minSize, shrinkRate } = SIZING_CONFIG;
  
  const calculatedSize = baseSize - ((rowCount - 1) * shrinkRate);
  
  return Math.max(minSize, Math.min(baseSize, calculatedSize));
};

// Main function: Get current block size based on all blocks
export const getCurrentBlockSize = (blocks, containerWidth, canvasSize) => {
  const visibleBlocks = blocks.filter(block => block.type !== 'linebreak');
  
  if (visibleBlocks.length === 0) {
    return SIZING_CONFIG.baseSize;
  }
  
  let currentSize = SIZING_CONFIG.baseSize;
  let rowCount = 1;
  
  for (let iteration = 0; iteration < 5; iteration++) {
    rowCount = calculateRowCount(visibleBlocks.length, containerWidth, currentSize, canvasSize);
    const newSize = calculateBlockSize(rowCount);
    
    if (newSize === currentSize) break;
    
    currentSize = newSize;
  }
  
  return currentSize;
};

export const getSizingConfig = () => SIZING_CONFIG;