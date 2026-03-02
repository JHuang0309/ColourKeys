// Complete color palettes with all 26 letters × 4 palettes
export const PALETTES = {
  normal: {
    // Reds and Oranges (A-E)
    a: { h: 0, s: 75, l: 60 },      // Red
    b: { h: 15, s: 80, l: 65 },     // Red-Orange
    c: { h: 30, s: 85, l: 60 },     // Orange
    d: { h: 40, s: 80, l: 58 },     // Golden Orange
    e: { h: 50, s: 85, l: 60 },     // Yellow-Orange
    
    // Yellows and Yellow-Greens (F-J)
    f: { h: 60, s: 85, l: 55 },     // Yellow
    g: { h: 75, s: 70, l: 55 },     // Yellow-Green
    h: { h: 90, s: 65, l: 50 },     // Lime
    i: { h: 105, s: 60, l: 50 },    // Light Green
    j: { h: 120, s: 65, l: 45 },    // Green
    
    // Greens and Teals (K-N)
    k: { h: 140, s: 60, l: 45 },    // Forest Green
    l: { h: 160, s: 65, l: 50 },    // Teal Green
    m: { h: 175, s: 60, l: 50 },    // Turquoise
    n: { h: 185, s: 65, l: 55 },    // Cyan
    
    // Blues (O-R)
    o: { h: 195, s: 70, l: 55 },    // Sky Blue
    p: { h: 210, s: 75, l: 60 },    // Light Blue
    q: { h: 225, s: 70, l: 58 },    // Blue
    r: { h: 240, s: 75, l: 60 },    // Royal Blue
    
    // Purples and Magentas (S-V)
    s: { h: 260, s: 70, l: 60 },    // Purple
    t: { h: 280, s: 75, l: 58 },    // Violet
    u: { h: 300, s: 70, l: 60 },    // Magenta
    v: { h: 320, s: 75, l: 62 },    // Pink-Magenta
    
    // Pinks and Roses (W-Z)
    w: { h: 330, s: 70, l: 65 },    // Hot Pink
    x: { h: 340, s: 75, l: 68 },    // Pink
    y: { h: 350, s: 80, l: 70 },    // Rose
    z: { h: 355, s: 75, l: 65 },    // Light Red
  },
  
  pastel: {
    // Soft, light, desaturated colors
    a: { h: 0, s: 45, l: 75 },      // Pastel Red/Pink
    b: { h: 15, s: 50, l: 78 },     // Pastel Coral
    c: { h: 30, s: 55, l: 75 },     // Pastel Orange
    d: { h: 40, s: 50, l: 73 },     // Pastel Peach
    e: { h: 50, s: 55, l: 75 },     // Pastel Gold
    
    f: { h: 60, s: 50, l: 78 },     // Pastel Yellow
    g: { h: 75, s: 45, l: 75 },     // Pastel Lime
    h: { h: 90, s: 40, l: 73 },     // Pastel Green-Yellow
    i: { h: 105, s: 42, l: 75 },    // Pastel Mint
    j: { h: 120, s: 40, l: 70 },    // Pastel Green
    
    k: { h: 140, s: 38, l: 68 },    // Pastel Sage
    l: { h: 160, s: 40, l: 70 },    // Pastel Teal
    m: { h: 175, s: 42, l: 72 },    // Pastel Turquoise
    n: { h: 185, s: 45, l: 75 },    // Pastel Cyan
    
    o: { h: 195, s: 48, l: 75 },    // Pastel Sky
    p: { h: 210, s: 50, l: 78 },    // Pastel Blue
    q: { h: 225, s: 48, l: 75 },    // Pastel Periwinkle
    r: { h: 240, s: 50, l: 75 },    // Pastel Royal Blue
    
    s: { h: 260, s: 48, l: 75 },    // Pastel Purple
    t: { h: 280, s: 50, l: 78 },    // Pastel Lavender
    u: { h: 300, s: 48, l: 75 },    // Pastel Magenta
    v: { h: 320, s: 50, l: 78 },    // Pastel Pink
    
    w: { h: 330, s: 52, l: 80 },    // Pastel Rose
    x: { h: 340, s: 55, l: 82 },    // Pastel Light Pink
    y: { h: 350, s: 50, l: 80 },    // Pastel Blush
    z: { h: 355, s: 48, l: 78 },    // Pastel Salmon
  },
  
  summer: {
    // Coral, warm tones, beach-inspired
    a: { h: 0, s: 80, l: 62 },      // Coral Red
    b: { h: 10, s: 75, l: 65 },     // Sunset Red
    c: { h: 20, s: 85, l: 63 },     // Coral
    d: { h: 28, s: 82, l: 60 },     // Tangerine
    e: { h: 35, s: 88, l: 62 },     // Bright Coral
    
    f: { h: 42, s: 90, l: 60 },     // Sandy Orange
    g: { h: 48, s: 85, l: 58 },     // Golden Sand
    h: { h: 55, s: 78, l: 65 },     // Warm Yellow
    i: { h: 65, s: 70, l: 68 },     // Soft Yellow
    j: { h: 75, s: 55, l: 65 },     // Lime Spritz
    
    k: { h: 85, s: 50, l: 60 },     // Tropical Green
    l: { h: 95, s: 48, l: 58 },     // Palm Green
    m: { h: 165, s: 60, l: 55 },    // Ocean Teal
    n: { h: 175, s: 65, l: 58 },    // Turquoise Sea
    
    o: { h: 185, s: 70, l: 60 },    // Aqua
    p: { h: 190, s: 72, l: 62 },    // Bright Aqua
    q: { h: 195, s: 68, l: 65 },    // Sky Blue
    r: { h: 200, s: 65, l: 68 },    // Beach Blue
    
    s: { h: 280, s: 60, l: 68 },    // Sunset Purple
    t: { h: 290, s: 55, l: 65 },    // Twilight
    u: { h: 310, s: 65, l: 65 },    // Fuchsia
    v: { h: 325, s: 70, l: 68 },    // Hot Pink
    
    w: { h: 335, s: 75, l: 70 },    // Flamingo Pink
    x: { h: 345, s: 78, l: 72 },    // Shell Pink
    y: { h: 352, s: 80, l: 68 },    // Watermelon
    z: { h: 358, s: 82, l: 65 },    // Hibiscus
  },
  
  autumn: {
    // Orange, brown, rust, earthy fall tones
    a: { h: 0, s: 60, l: 45 },      // Deep Red
    b: { h: 10, s: 65, l: 48 },     // Brick Red
    c: { h: 18, s: 70, l: 50 },     // Rust
    d: { h: 25, s: 68, l: 48 },     // Clay
    e: { h: 32, s: 72, l: 50 },     // Burnt Orange
    
    f: { h: 38, s: 70, l: 48 },     // Pumpkin
    g: { h: 42, s: 65, l: 45 },     // Amber
    h: { h: 45, s: 60, l: 42 },     // Bronze
    i: { h: 48, s: 55, l: 40 },     // Ochre
    j: { h: 52, s: 50, l: 38 },     // Mustard
    
    k: { h: 80, s: 35, l: 42 },     // Olive
    l: { h: 90, s: 30, l: 40 },     // Moss
    m: { h: 100, s: 28, l: 38 },    // Forest
    n: { h: 110, s: 25, l: 35 },    // Pine
    
    o: { h: 25, s: 45, l: 35 },     // Brown
    p: { h: 28, s: 48, l: 38 },     // Chestnut
    q: { h: 30, s: 42, l: 40 },     // Walnut
    r: { h: 32, s: 40, l: 42 },     // Hazel
    
    s: { h: 15, s: 50, l: 35 },     // Mahogany
    t: { h: 20, s: 48, l: 38 },     // Auburn
    u: { h: 35, s: 45, l: 40 },     // Terracotta
    v: { h: 40, s: 42, l: 42 },     // Copper
    
    w: { h: 45, s: 38, l: 45 },     // Sand
    x: { h: 50, s: 35, l: 48 },     // Wheat
    y: { h: 55, s: 32, l: 50 },     // Straw
    z: { h: 60, s: 30, l: 52 },     // Hay
  }
};

// Palette metadata (names and descriptions)
export const PALETTE_INFO = {
  normal: {
    name: 'Spring',
    description: 'Vibrant, saturated colors'
  },
  pastel: {
    name: 'Winter',
    description: 'Soft, light, gentle colors'
  },
  summer: {
    name: 'Summer',
    description: 'Coral, warm, beach tones'
  },
  autumn: {
    name: 'Autumn',
    description: 'Earthy, rust, fall colors'
  }
};

// Get array of palette keys in order
export const PALETTE_ORDER = ['normal', 'pastel', 'summer', 'autumn'];

// Modifier adjustment values
const MODIFIERS = {
  brightness: {
    increase: 25,
    max: 88,
  },
  saturation: {
    decrease: 45,
    min: 15,
  }
};

// Convert HSL to CSS string
export const hslToString = (h, s, l) => {
  return `hsl(${h}, ${s}%, ${l}%)`;
};

// Get color for a letter key with modifiers
export const getColorForKey = (key, palette = 'normal', modifier = {}) => {
  const letter = key.toLowerCase();
  const colorData = PALETTES[palette]?.[letter];
  
  if (!colorData) return null;
  
  let { h, s, l } = { ...colorData };
  
  // Apply brightness modifier (Shift key)
  if (modifier.shift) {
    l = Math.min(MODIFIERS.brightness.max, l + MODIFIERS.brightness.increase);
  }
  
  // Apply saturation modifier (Cmd/Ctrl key)
  if (modifier.cmd) {
    s = Math.max(MODIFIERS.saturation.min, s - MODIFIERS.saturation.decrease);
  }
  
  return hslToString(h, s, l);
};

// Helper function to get readable color info (for debugging)
export const getColorInfo = (key, palette = 'normal', modifier = {}) => {
  const letter = key.toLowerCase();
  const colorData = PALETTES[palette]?.[letter];
  
  if (!colorData) return null;
  
  let { h, s, l } = { ...colorData };
  const original = { h, s, l };
  
  if (modifier.shift) {
    l = Math.min(MODIFIERS.brightness.max, l + MODIFIERS.brightness.increase);
  }
  if (modifier.cmd) {
    s = Math.max(MODIFIERS.saturation.min, s - MODIFIERS.saturation.decrease);
  }
  
  return {
    key: letter.toUpperCase(),
    palette: PALETTE_INFO[palette].name,
    original: `hsl(${original.h}, ${original.s}%, ${original.l}%)`,
    modified: `hsl(${h}, ${s}%, ${l}%)`,
    shift: modifier.shift,
    cmd: modifier.cmd,
  };
};

// Get next palette in cycle
export const getNextPalette = (currentPalette) => {
  const currentIndex = PALETTE_ORDER.indexOf(currentPalette);
  const nextIndex = (currentIndex + 1) % PALETTE_ORDER.length;
  return PALETTE_ORDER[nextIndex];
};