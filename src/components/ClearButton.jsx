import { useState, useEffect, useRef } from 'react';
import html2canvas from 'html2canvas';
import Block from './Block';
import SaveButton from './SaveButton';
import ClearButton from './ClearButton';
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
  
  const canvasRef = useRef(null);
  const captureRef = useRef(null);
  
  const DEBUG = false;
  
  // Update block size whenever blocks change
  useEffect(() => {
    if (!canvasRef.current) return;
    
    const containerWidth = canvasRef.current.offsetWidth;
    const newSize = getCurrentBlockSize(blocks, containerWidth);
    
    setBlockSize(newSize);
    
    if (DEBUG) {
      console.log('📏 Block size updated:', newSize, 'px');
    }
  }, [blocks, DEBUG]);
  
  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      if (!canvasRef.current) return;
      
      const containerWidth = canvasRef.current.offsetWidth;
      const newSize = getCurrentBlockSize(blocks, containerWidth);
      setBlockSize(newSize);
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [blocks]);
  
  // Save canvas as PNG
  const handleSave = async () => {
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
  };
  
  // Clear canvas
  const handleClear = () => {
    if (blocks.length === 0) return;
    
    const confirm = window.confirm('Clear all blocks?');
    if (!confirm) return;
    
    setBlocks([]);
    setHasEnteredOnce(false);
    
    if (DEBUG) {
      console.log('🗑️ Canvas cleared');
    }
  };
  
  // Handle block removal with animation
  const handleRemoveLastBlock = () => {
    if (blocks.length === 0) return;
    
    const lastBlock = blocks[blocks.length - 1];
    setRemovingBlockId(lastBlock.id);
  };
  
  const onBlockRemoveComplete = (blockId) => {
    setBlocks(prevBlocks => prevBlocks.filter(block => block.id !== blockId));
    setRemovingBlockId(null);
  };
  
  // Handle keyboard input
  useEffect(() => {
    const handleKeyDown = (event) => {
      const key = event.key.toLowerCase();
      
      // CMD/CTRL + S - Save
      if ((event.metaKey || event.ctrlKey) && key === 's') {
        event.preventDefault();
        handleSave();
        return;
      }
      
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
  }, [currentPalette, blocks.length, hasEnteredOnce, DEBUG]);

  const shouldCenter = !hasEnteredOnce && blocks.length > 0;
  const showCursor = blocks.length > 0;

  return (
    <div className="min-h-screen w-full bg-white p-8 relative">
      {/* Canvas */}
      <div 
        ref={captureRef}
        className="relative min-h-[400px]"
      >
        <div 
          ref={canvasRef} 
          className={`flex flex-wrap gap-2 ${shouldCenter ? 'justify-center' : ''}`}
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
        
        {blocks.length === 0 && <TypingCursor size={blockSize} isCentered={true} />}
      </div>
      
      {/* Bottom UI Bar */}
      <ClearButton onClick={handleClear} disabled={blocks.length === 0} />
      
      {/* Centered palette name */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 text-gray-300 text-sm font-light transition-opacity duration-300"
           style={{ opacity: showPaletteName ? 1 : 0.3 }}>
        {PALETTE_INFO[currentPalette].name}
      </div>
      
      <SaveButton onClick={handleSave} isLoading={isSaving} />
    </div>
  );
};

export default Canvas;