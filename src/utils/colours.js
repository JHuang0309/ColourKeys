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
  
  winter: {
    // Winter rainbow - cold, saturated colors with moody depth
    
    // Frozen Whites & Ice (A-B)
    a: { h: 200, s: 20, l: 88 },    // Snow White
    b: { h: 210, s: 25, l: 85 },    // Ice Blue
    
    // Deep Winter Reds (C-E)
    c: { h: 355, s: 75, l: 45 },    // Winter Berry
    d: { h: 0, s: 72, l: 42 },      // Deep Crimson
    e: { h: 5, s: 70, l: 40 },      // Frozen Cherry
    
    // Cool Magentas & Pinks (F-G)
    f: { h: 330, s: 68, l: 48 },    // Cold Magenta
    g: { h: 340, s: 65, l: 50 },    // Frost Pink
    
    // Rich Purples & Violets (H-J)
    h: { h: 280, s: 70, l: 45 },    // Aurora Violet
    i: { h: 270, s: 68, l: 42 },    // Deep Purple
    j: { h: 260, s: 65, l: 40 },    // Twilight Iris
    
    // Deep Indigos & Blues (K-N)
    k: { h: 245, s: 72, l: 42 },    // Winter Indigo
    l: { h: 235, s: 70, l: 40 },    // Deep Navy
    m: { h: 225, s: 68, l: 38 },    // Midnight Blue
    n: { h: 215, s: 65, l: 35 },    // Arctic Night
    
    // Bright Winter Blues (O-P)
    o: { h: 205, s: 75, l: 48 },    // Ice Blue
    p: { h: 195, s: 72, l: 50 },    // Glacial Blue
    
    // Cool Cyans & Teals (Q-R)
    q: { h: 185, s: 70, l: 45 },    // Winter Cyan
    r: { h: 175, s: 68, l: 42 },    // Frozen Teal
    
    // Deep Greens (S-T)
    s: { h: 160, s: 60, l: 38 },    // Aurora Green
    t: { h: 150, s: 58, l: 35 },    // Deep Evergreen
    
    // Cold Slate Grays (U-W)
    u: { h: 210, s: 25, l: 45 },    // Slate Blue
    v: { h: 200, s: 20, l: 42 },    // Storm Gray
    w: { h: 220, s: 18, l: 40 },    // Cold Charcoal
    
    // Deep Shadows (X-Z)
    x: { h: 210, s: 22, l: 35 },    // Winter Shadow
    y: { h: 200, s: 18, l: 30 },    // Frozen Stone
    z: { h: 215, s: 15, l: 25 },    // Deep Slate
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
    // Japanese autumn with cherry blossoms, maple leaves, and warm sunset tones
    // Soft Cherry Blossoms (A-C)
    a: { h: 350, s: 50, l: 72 },    // Sakura Pink
    b: { h: 345, s: 55, l: 68 },    // Deep Sakura
    c: { h: 340, s: 45, l: 75 },    // Light Blossom
    
    // Autumn Reds & Maples (D-H)
    d: { h: 0, s: 68, l: 58 },      // Momiji Red (maple leaf)
    e: { h: 5, s: 72, l: 55 },      // Scarlet Maple
    f: { h: 10, s: 70, l: 52 },     // Crimson Leaf
    g: { h: 15, s: 68, l: 50 },     // Beni (traditional red)
    h: { h: 20, s: 65, l: 48 },     // Deep Vermillion
    
    // Warm Oranges & Persimmons (I-M)
    i: { h: 25, s: 75, l: 55 },     // Kaki (persimmon)
    j: { h: 30, s: 72, l: 58 },     // Tangerine
    k: { h: 35, s: 70, l: 60 },     // Amber
    l: { h: 40, s: 65, l: 58 },     // Golden Orange
    m: { h: 45, s: 60, l: 56 },     // Sunset Orange
    
    // Warm Earth & Clay (N-P)
    n: { h: 28, s: 48, l: 52 },     // Tsuchi (earth)
    o: { h: 32, s: 45, l: 50 },     // Terracotta
    p: { h: 38, s: 42, l: 48 },     // Clay Pot
    
    // Nature Greens (Q-S)
    q: { h: 85, s: 32, l: 52 },     // Moegi (sprout green)
    r: { h: 120, s: 28, l: 48 },    // Matcha (tea green)
    s: { h: 140, s: 25, l: 45 },    // Tokiwa (evergreen)
    
    // Muted Blues & Purples (T-V)
    t: { h: 200, s: 30, l: 60 },    // Mizuiro (water blue)
    u: { h: 280, s: 35, l: 52 },    // Sumire (violet)
    v: { h: 290, s: 38, l: 55 },    // Fuji (wisteria)
    
    // Ink & Warm Neutrals (W-Z)
    w: { h: 0, s: 8, l: 38 },       // Sumi (ink)
    x: { h: 30, s: 12, l: 48 },     // Warm gray
    y: { h: 40, s: 28, l: 65 },     // Kaba (birch)
    z: { h: 35, s: 35, l: 68 },     // Torinoko (eggshell)
  }
};

// Palette metadata (names and descriptions)
export const PALETTE_INFO = {
  normal: {
    name: 'Spring',
    description: 'Vibrant, saturated colors'
  },
  winter: {
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
export const PALETTE_ORDER = ['normal', 'winter', 'summer', 'autumn'];

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