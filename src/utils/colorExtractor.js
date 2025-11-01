/**
 * Utility functions for extracting colors from images using ColorThief
 */

/**
 * Extracts dominant colors from an image using ColorThief library
 * @param {string} imageSrc - Image source URL
 * @param {number} colorCount - Number of colors to extract (default: 5)
 * @returns {Promise<Array>} Array of dominant colors in hex format
 */
export async function extractDominantColors(imageSrc, colorCount = 5) {
  return new Promise((resolve, reject) => {
    // Importar ColorThief dinámicamente para evitar problemas de SSR
    import('colorthief').then(({ default: ColorThief }) => {
      const colorThief = new ColorThief();
      const img = new Image();
      img.crossOrigin = 'anonymous';
      
      img.onload = () => {
        try {
          // Extraer color dominante y paleta
          const dominantColor = colorThief.getColor(img);
          const palette = colorThief.getPalette(img, colorCount);
          
          // Convertir RGB arrays a hex
          const colors = palette.map(rgb => rgbToHex(rgb[0], rgb[1], rgb[2]));
          
          resolve(colors);
        } catch (error) {
          console.warn('ColorThief failed, falling back to canvas method');
          // Fallback al método canvas si ColorThief falla
          fallbackExtractColors(img, colorCount).then(resolve).catch(reject);
        }
      };
      
      img.onerror = reject;
      img.src = imageSrc;
    }).catch(error => {
      console.warn('Failed to load ColorThief, using fallback');
      fallbackExtractColors(imageSrc, colorCount).then(resolve).catch(reject);
    });
  });
}

/**
 * Fallback method using Canvas API when ColorThief is not available
 */
async function fallbackExtractColors(imageSrc, colorCount = 5) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    
    img.onload = () => {
      try {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        
        // Reducir el tamaño para mejor performance
        const maxSize = 200;
        const ratio = Math.min(maxSize / img.width, maxSize / img.height);
        
        canvas.width = img.width * ratio;
        canvas.height = img.height * ratio;
        
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const colors = extractColorsFromImageData(imageData, colorCount);
        
        resolve(colors);
      } catch (error) {
        reject(error);
      }
    };
    
    img.onerror = reject;
    img.src = imageSrc;
  });
}

/**
 * Extracts colors from ImageData using color quantization
 */
function extractColorsFromImageData(imageData, colorCount) {
  const data = imageData.data;
  const pixelCount = data.length / 4;
  const colorMap = new Map();
  
  // Muestrear cada N píxeles para mejor performance
  const sampleRate = Math.max(1, Math.floor(pixelCount / 10000));
  
  for (let i = 0; i < data.length; i += 4 * sampleRate) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    const a = data[i + 3];
    
    // Ignorar píxeles transparentes
    if (a < 128) continue;
    
    // Reducir la precisión de color para agrupar similares
    const quantizedR = Math.floor(r / 32) * 32;
    const quantizedG = Math.floor(g / 32) * 32;
    const quantizedB = Math.floor(b / 32) * 32;
    
    const colorKey = `${quantizedR},${quantizedG},${quantizedB}`;
    colorMap.set(colorKey, (colorMap.get(colorKey) || 0) + 1);
  }
  
  // Ordenar por frecuencia y tomar los más dominantes
  const sortedColors = Array.from(colorMap.entries())
    .sort((a, b) => b[1] - a[1])
    .slice(0, colorCount)
    .map(([color]) => {
      const [r, g, b] = color.split(',').map(Number);
      return rgbToHex(r, g, b);
    });
  
  return sortedColors;
}

/**
 * Convert RGB to hex
 */
function rgbToHex(r, g, b) {
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

/**
 * Convert hex to RGB
 */
export function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

/**
 * Calculate luminance of a color (for determining if it's light or dark)
 */
export function getLuminance(hex) {
  const rgb = hexToRgb(hex);
  if (!rgb) return 0;
  
  const { r, g, b } = rgb;
  const [rs, gs, bs] = [r, g, b].map(c => {
    c = c / 255;
    return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
  });
  
  return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
}

/**
 * Generate a sophisticated gradient CSS style based on extracted colors
 */
export function generateGradientFromColors(colors, opacity = 0.5) {
  if (!colors || colors.length === 0) {
    return {
      background: 'linear-gradient(135deg, rgba(30, 58, 138, 0.45), rgba(91, 33, 182, 0.35), rgba(17, 24, 39, 0.55))'
    };
  }
  
  // Seleccionar y procesar colores con tonos más suaves
  const processedColors = processColorsForGradient(colors, opacity);
  
  // Crear múltiples gradientes superpuestos más sutiles
  const gradients = [
    `linear-gradient(135deg, ${processedColors.slice(0, 3).join(', ')})`,
    `radial-gradient(ellipse at top left, ${processedColors[0]}, transparent 70%)`,
    `radial-gradient(ellipse at bottom right, ${processedColors[1] || processedColors[0]}, transparent 70%)`
  ];
  
  return {
    background: gradients.join(', ')
  };
}

/**
 * Process colors for gradient creation with intelligent color selection
 */
function processColorsForGradient(colors, opacity) {
  const processedColors = [];
  
  colors.forEach((color, index) => {
    const rgb = hexToRgb(color);
    if (!rgb) return;
    
    // Ajustar la saturación y brillo para colores aún más suaves
    const hsl = rgbToHsl(rgb.r, rgb.g, rgb.b);
    
    // Saturación muy reducida para efecto whisper
    hsl.s = Math.min(0.6, hsl.s * 0.65);
    
    // Luminosidad más alta para tonos pasteles
    if (index === 0) {
      // Primer color: oscuro pero suave
      hsl.l = Math.max(0.2, Math.min(0.45, hsl.l * 0.9));
    } else if (index === colors.length - 1) {
      // Último color: profundidad sutil
      hsl.l = Math.max(0.15, Math.min(0.4, hsl.l * 0.8));
    } else {
      // Colores intermedios: muy suaves
      hsl.l = Math.max(0.25, Math.min(0.5, hsl.l * 0.95));
    }
    
    const adjustedRgb = hslToRgb(hsl.h, hsl.s, hsl.l);
    // Opacidad muy reducida para efecto fantasmal elegante
    const adjustedOpacity = opacity * (0.7 - index * 0.06);
    
    processedColors.push(`rgba(${adjustedRgb.r}, ${adjustedRgb.g}, ${adjustedRgb.b}, ${adjustedOpacity})`);
  });
  
  return processedColors;
}

/**
 * Convert RGB to HSL
 */
function rgbToHsl(r, g, b) {
  r /= 255;
  g /= 255;
  b /= 255;
  
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h, s, l = (max + min) / 2;
  
  if (max === min) {
    h = s = 0; // achromatic
  } else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break;
      case g: h = (b - r) / d + 2; break;
      case b: h = (r - g) / d + 4; break;
    }
    h /= 6;
  }
  
  return { h, s, l };
}

/**
 * Convert HSL to RGB
 */
function hslToRgb(h, s, l) {
  let r, g, b;
  
  if (s === 0) {
    r = g = b = l; // achromatic
  } else {
    const hue2rgb = (p, q, t) => {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1/6) return p + (q - p) * 6 * t;
      if (t < 1/2) return q;
      if (t < 2/3) return p + (q - p) * (2/3 - t) * 6;
      return p;
    };
    
    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;
    r = hue2rgb(p, q, h + 1/3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1/3);
  }
  
  return {
    r: Math.round(r * 255),
    g: Math.round(g * 255),
    b: Math.round(b * 255)
  };
}

/**
 * Generate intelligent text colors and styles based on background colors
 */
export function generateTextColorsFromBackground(colors) {
  if (!colors || colors.length === 0) {
    return {
      primary: 'text-white',
      secondary: 'text-blue-100',
      accent: 'text-purple-100',
      titleGradient: 'from-white via-blue-100 to-purple-100'
    };
  }
  
  const primaryColor = colors[0];
  const luminance = getLuminance(primaryColor);
  
  // Analizar la paleta completa para generar colores complementarios
  const complementaryColors = generateComplementaryColors(colors);
  
  // Si el color de fondo es muy oscuro
  if (luminance < 0.3) {
    return {
      primary: 'text-white',
      secondary: 'text-gray-100',
      accent: `text-${complementaryColors.accent}`,
      titleGradient: `from-white via-${complementaryColors.light} to-${complementaryColors.medium}`
    };
  } 
  // Si es moderadamente oscuro
  else if (luminance < 0.6) {
    return {
      primary: 'text-gray-100',
      secondary: 'text-gray-200',
      accent: `text-${complementaryColors.accent}`,
      titleGradient: `from-gray-100 via-${complementaryColors.light} to-white`
    };
  } 
  // Si es claro
  else {
    return {
      primary: 'text-gray-900',
      secondary: 'text-gray-700',
      accent: `text-${complementaryColors.accentDark}`,
      titleGradient: `from-gray-900 via-${complementaryColors.dark} to-gray-800`
    };
  }
}

/**
 * Generate complementary colors based on the extracted palette
 */
function generateComplementaryColors(colors) {
  // Analizar el tono dominante de la paleta
  const hues = colors.map(color => {
    const rgb = hexToRgb(color);
    if (!rgb) return 0;
    const hsl = rgbToHsl(rgb.r, rgb.g, rgb.b);
    return hsl.h * 360; // Convertir a grados
  });
  
  const averageHue = hues.reduce((sum, hue) => sum + hue, 0) / hues.length;
  
  // Determinar la familia de colores basada en el tono promedio
  if (averageHue >= 0 && averageHue < 60) {
    // Rojos/Naranjas
    return {
      light: 'orange-200',
      medium: 'red-300',
      accent: 'orange-300',
      accentDark: 'red-700',
      dark: 'red-800'
    };
  } else if (averageHue >= 60 && averageHue < 180) {
    // Amarillos/Verdes
    return {
      light: 'green-200',
      medium: 'lime-300',
      accent: 'green-300',
      accentDark: 'green-700',
      dark: 'green-800'
    };
  } else if (averageHue >= 180 && averageHue < 240) {
    // Cianes/Azules
    return {
      light: 'blue-200',
      medium: 'cyan-300',
      accent: 'blue-300',
      accentDark: 'blue-700',
      dark: 'blue-800'
    };
  } else {
    // Azules/Púrpuras/Magentas
    return {
      light: 'purple-200',
      medium: 'blue-300',
      accent: 'purple-300',
      accentDark: 'purple-700',
      dark: 'purple-800'
    };
  }
}