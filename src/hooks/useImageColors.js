import { useState, useEffect } from 'react';
import {
  extractDominantColors,
  generateGradientFromColors,
  generateTextColorsFromBackground,
} from '@/utils/colorExtractor';

/**
 * Hook for extracting colors from banner images and generating dynamic styles
 */
export function useImageColors(bannerImage) {
  const [colors, setColors] = useState([]);
  const [gradientStyle, setGradientStyle] = useState(null);
  const [textColors, setTextColors] = useState({
    primary: 'text-white',
    secondary: 'text-blue-100',
    accent: 'text-purple-100',
    titleGradient: 'from-white via-blue-100 to-purple-100',
  });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!bannerImage) return;

    setIsLoading(true);

    extractDominantColors(bannerImage, 5)
      .then((extractedColors) => {
        setColors(extractedColors);

        // Generar gradiente dinámico con opacidad muy suave
        const gradient = generateGradientFromColors(extractedColors, 0.45);
        setGradientStyle(gradient);

        // Generar colores de texto complementarios
        const textCols = generateTextColorsFromBackground(extractedColors);
        setTextColors(textCols);

        setIsLoading(false);
      })
      .catch((error) => {
        console.warn('Error extracting colors from image:', error);
        // Fallback a colores por defecto
        setGradientStyle(null);
        setTextColors({
          primary: 'text-white',
          secondary: 'text-blue-100',
          accent: 'text-purple-100',
          titleGradient: 'from-white via-blue-100 to-purple-100',
        });
        setIsLoading(false);
      });
  }, [bannerImage]);

  return {
    colors,
    gradientStyle,
    textColors,
    isLoading,
  };
}
