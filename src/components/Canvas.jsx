import { useState, useEffect, useRef, useCallback } from 'react';
import html2canvas from 'html2canvas';
import Block from './Block';
import SaveButton from './SaveButton';
import ClearButton from './ClearButton';
import SettingsButton from './SettingsButton';
import SettingsModal from './SettingsModal';
import TypingCursor from './TypingCursor';
import { getColorForKey, getColorInfo, getNextPalette, PALETTE_INFO } from '../utils/colours';
import { getCurrentBlockSize } from '../utils/sizing';

const Canvas = () => {
  const [blocks, setBlocks] = useState([]);
  const [currentPalette, setCurrentPalette] = useState('normal');
  const [showPaletteName, setShowPaletteName] = useState(false);
  const [blockSize, setBlockSize] = useState(80);
  const [isSaving, setIsSaving] = useState(false);
  const [removingBlockId, setRemovingBlockId] = useState(null);
  const [hasEnteredOnce, setHasEnteredOnce] = useState(false);
  const [canvasSize, setCanvasSize] = useState(14); // Default canvas size
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  
  const canvasRef = useRef(null);
  const captureRef = useRef(null);
  
  const DEBUG = false;

  // Calculate how many rows of blocks we have
  const calculateRowCount = useCallback(() => {
    if (blocks.length === 0) return 0;
    
    const visibleBlocks = blocks.filter(block => block.type !== 'linebreak');
    if (visibleBlocks.length === 0) return 0;
    
    // Calculate blocks per row based on canvas size
    const blocksPerRow = canvasSize;
    
    // Calculate total rows
    const rows = Math.ceil(visibleBlocks.length / blocksPerRow);
    
    return rows;
  }, [blocks, canvasSize]);

  const currentRows = calculateRowCount();
  
  // Update block size whenever blocks or canvas size changes
  useEffect(() => {
    if (!canvasRef.current) return;
    
    const containerWidth = canvasRef.current.offsetWidth;
    const newSize = getCurrentBlockSize(blocks, containerWidth, canvasSize);
    
    setBlockSize(newSize);
    
    if (DEBUG) {
      console.log('📏 Block size updated:', newSize, 'px', 'Canvas size:', canvasSize);
    }
  }, [blocks, canvasSize, DEBUG]);
  
  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      if (!canvasRef.current) return;
      
      const containerWidth = canvasRef.current.offsetWidth;
      const newSize = getCurrentBlockSize(blocks, containerWidth, canvasSize);
      setBlockSize(newSize);
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [blocks, canvasSize]);
  
  // Save canvas as PNG
  const handleSave = useCallback(async () => {
    if (!captureRef.current || blocks.length === 0) {
      alert('Create some blocks first!');
      return;
    }
    
    setIsSaving(true);
    
    try {
      const canvas = await html2canvas(captureRef.current, {
        backgroundColor: '#FFFFFF',
        scale: 2,
        logging: false,
        useCORS: true,
      });
      
      canvas.toBlob((blob) => {
        if (!blob) {
          alert('Failed to create image');
          setIsSaving(false);
          return;
        }
        
        const defaultName = `colours.png`;
        const filename = prompt('Save as:', defaultName);
        
        if (!filename) {
          setIsSaving(false);
          return;
        }
        
        const finalFilename = filename.endsWith('.png') ? filename : `${filename}.png`;
        
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = finalFilename;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
        
        setIsSaving(false);
      }, 'image/png');
      
    } catch (error) {
      console.error('Error saving canvas:', error);
      alert('Failed to save image. Please try again.');
      setIsSaving(false);
    }
  }, [blocks.length]);
  
  // Clear canvas
  const handleClear = useCallback(() => {
    if (blocks.length === 0) return;
    
    setBlocks([]);
    setHasEnteredOnce(false);
    
    if (DEBUG) {
      console.log('🗑️ Canvas cleared');
    }
  }, [blocks.length, DEBUG]);
  
  // Handle block removal with animation
  const handleRemoveLastBlock = useCallback(() => {
    if (blocks.length === 0) return;
    
    const lastBlock = blocks[blocks.length - 1];
    setRemovingBlockId(lastBlock.id);
  }, [blocks]);
  
  // Remove block after animation completes
  const onBlockRemoveComplete = useCallback((blockId) => {
    setBlocks(prevBlocks => prevBlocks.filter(block => block.id !== blockId));
    setRemovingBlockId(null);
  }, []);
  
  // Handle keyboard input
  useEffect(() => {
    const handleKeyDown = (event) => {
      // Don't handle keyboard when settings modal is open
      if (isSettingsOpen) return;
      
      const key = event.key.toLowerCase();
      
      // LETTER KEYS (A-Z)
      if (key.length === 1 && key >= 'a' && key <= 'z') {
        event.preventDefault();
        
        const modifiers = {
          shift: event.shiftKey,
          cmd: event.metaKey || event.ctrlKey,
        };
        
        const color = getColorForKey(key, currentPalette, modifiers);
        
        if (DEBUG && color) {
          const info = getColorInfo(key, currentPalette, modifiers);
          console.log('🎨 Color Info:', info);
        }
        
        if (color) {
          const newBlock = {
            id: Date.now() + Math.random(),
            color: color,
            key: key,
            modifiers: { ...modifiers },
            type: 'color',
          };
          
          setBlocks(prevBlocks => [...prevBlocks, newBlock]);
        }
      }
      
      // SPACEBAR
      else if (event.code === 'Space') {
        event.preventDefault();
        
        const whiteBlock = {
          id: Date.now() + Math.random(),
          color: '#FFFFFF',
          key: 'space',
          type: 'space',
        };
        
        setBlocks(prevBlocks => [...prevBlocks, whiteBlock]);
        
        if (DEBUG) {
          console.log('⬜ Added white space block');
        }
      }
      
      // BACKSPACE
      else if (event.key === 'Backspace') {
        event.preventDefault();
        handleRemoveLastBlock();
        
        if (DEBUG) {
          console.log('⬅️ Removing last block with animation');
        }
      }
      
      // ENTER
      else if (event.key === 'Enter') {
        event.preventDefault();
        
        if (!hasEnteredOnce) {
          setHasEnteredOnce(true);
        }
        
        const lineBreak = {
          id: Date.now() + Math.random(),
          color: 'transparent',
          key: 'enter',
          type: 'linebreak',
        };
        
        setBlocks(prevBlocks => [...prevBlocks, lineBreak]);
        
        if (DEBUG) {
          console.log('↵ Added line break');
        }
      }
      
      // TAB
      else if (event.key === 'Tab') {
        event.preventDefault();
        
        const nextPalette = getNextPalette(currentPalette);
        setCurrentPalette(nextPalette);
        
        setShowPaletteName(true);
        setTimeout(() => {
          setShowPaletteName(false);
        }, 2000);
        
        if (DEBUG) {
          console.log('⭾ Switched to palette:', PALETTE_INFO[nextPalette].name);
        }
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentPalette, hasEnteredOnce, DEBUG, handleRemoveLastBlock, isSettingsOpen]);

  // After your other useEffects, add this:

// Auto-scroll to keep typing area visible when adding blocks
  useEffect(() => {
    if (blocks.length === 0) return; // Don't scroll on empty canvas
    
    // Small delay to ensure blocks are rendered
    const timer = setTimeout(() => {
      if (!canvasRef.current) return;
      
      const canvas = canvasRef.current;
      const canvasRect = canvas.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const bottomUISpace = 240; // Space reserved for bottom UI + buffer
      
      // Calculate if content extends below visible area
      const contentBottom = canvasRect.bottom;
      const visibleBottom = windowHeight - bottomUISpace;
      
      if (contentBottom > visibleBottom) {
        // Calculate how much to scroll
        const scrollNeeded = contentBottom - visibleBottom + 20; // 20px extra buffer
        
        window.scrollBy({
          top: scrollNeeded,
          behavior: 'smooth'
        });
      }
    }, 100); // 100ms delay for block animation to start
    
    return () => clearTimeout(timer);
  }, [blocks.length]); // Run when blocks are added/removed

  const shouldCenter = !hasEnteredOnce && blocks.length > 0;
  const showCursor = blocks.length > 0;


  return (
    <div className="min-h-screen w-full bg-white relative flex flex-col">
      {/* Settings button with standard cog icon */}
      <SettingsButton onClick={() => setIsSettingsOpen(true)} />
      
      {/* Settings modal */}
      <SettingsModal
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
        canvasSize={canvasSize}
        onCanvasSizeChange={setCanvasSize}
      />
      
      {/* Main content area - moves up based on ROW count */}
      <div 
        className="flex-1 flex justify-center p-8"
        style={{
          // Move up based on ROWS, not blocks
          paddingTop: currentRows === 0
            ? 'calc(45vh - 100px)'
            : currentRows === 1
              ? 'calc(45vh - 100px)' // First row stays centered
              : `max(2rem, calc(45vh - 100px - ${(currentRows - 1) * 8}vh))`,
          paddingBottom: '140px',
          alignItems: 'flex-start',
          transition: 'padding-top 0.5s ease-out'
        }}
      >
        {/* Wrapper to prevent left drift */}
        <div className="flex justify-center w-full">
          <div 
            ref={captureRef}
            className="inline-block"
          >
            <div 
              ref={canvasRef} 
              className={`flex flex-wrap gap-2 ${shouldCenter ? 'justify-center' : ''}`}
              style={{
                maxWidth: `${(blockSize + 8) * canvasSize}px`,
                transition: 'max-width 0.3s ease-out',
                margin: '0 auto'
              }}
            >
              {blocks.map(block => {
                if (block.type === 'linebreak') {
                  return (
                    <div 
                      key={block.id} 
                      className="w-full h-0"
                    />
                  );
                }
                
                const isBeingRemoved = block.id === removingBlockId;
                
                return (
                  <Block 
                    key={block.id} 
                    color={block.color} 
                    size={blockSize}
                    isRemoving={isBeingRemoved}
                    onRemoveComplete={() => onBlockRemoveComplete(block.id)}
                  />
                );
              })}
              
              {showCursor && (
                <TypingCursor size={blockSize} isCentered={false} />
              )}
            </div>
            
            {blocks.length === 0 && (
              <div className="flex justify-center">
                <TypingCursor size={blockSize} isCentered={false} />
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Bottom UI Bar */}
      <div className="fixed bottom-0 left-0 right-0 pointer-events-none">
        <div className="relative h-20 flex items-center justify-center pointer-events-auto">
          <ClearButton onClick={handleClear} disabled={blocks.length === 0} />
          
          {/* Centered palette name */}
          <div 
            className="absolute left-1/2 -translate-x-1/2 px-4 py-2 rounded-lg transition-all duration-300"
            style={{ 
              opacity: showPaletteName ? 1 : 0.6,
              backgroundColor: showPaletteName ? 'rgba(0, 0, 0, 0.05)' : 'transparent'
            }}
          >
            <span className="text-gray-600 text-base font-medium">
              {PALETTE_INFO[currentPalette].name}
            </span>
          </div>
          
          <SaveButton onClick={handleSave} isLoading={isSaving} />
        </div>
      </div>
    </div>
  );
};

export default Canvas;