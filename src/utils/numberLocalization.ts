// Number localization utility for converting numbers to native numerals

const numeralSystems: Record<string, string[]> = {
  en: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
  hi: ['०', '१', '२', '३', '४', '५', '६', '७', '८', '९'], // Devanagari (Hindi, Marathi)
  ta: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], // Tamil uses Western numerals
  te: ['౦', '౧', '౨', '౩', '౪', '౫', '౬', '౭', '౮', '౯'], // Telugu
  bn: ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'], // Bengali/Bangla
  mr: ['०', '१', '२', '३', '४', '५', '६', '७', '८', '९'], // Marathi (Devanagari)
  gu: ['૦', '૧', '૨', '૩', '૪', '૫', '૬', '૭', '૮', '૯'], // Gujarati
  kn: ['೦', '೧', '೨', '೩', '೪', '೫', '೬', '೭', '೮', '೯'], // Kannada
  ml: ['൦', '൧', '൨', '൩', '൪', '൫', '൬', '൭', '൮', '൯'], // Malayalam
  pa: ['੦', '੧', '੨', '੩', '੪', '੫', '੬', '੭', '੮', '੯'], // Punjabi (Gurmukhi)
  or: ['୦', '୧', '୨', '୩', '୪', '୫', '୬', '୭', '୮', '୯'], // Odia
  as: ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'], // Assamese (same as Bengali)
  ur: ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'], // Urdu (Eastern Arabic)
};

/**
 * Converts Western numerals to native numerals based on language
 * @param number - The number to convert (can be number or string)
 * @param language - The language code (e.g., 'hi', 'ta', 'te')
 * @returns The number in native numerals
 */
export const localizeNumber = (number: number | string, language: string): string => {
  const numStr = String(number);
  const numerals = numeralSystems[language] || numeralSystems.en;
  
  return numStr.split('').map(char => {
    if (char >= '0' && char <= '9') {
      return numerals[parseInt(char)];
    }
    return char; // Keep non-numeric characters (%, ., etc.)
  }).join('');
};

/**
 * Formats a percentage with localized numerals
 * @param value - The percentage value (0-1 or 0-100)
 * @param language - The language code
 * @param isDecimal - Whether the value is in decimal form (0-1) or percentage form (0-100)
 * @returns Formatted percentage string with native numerals
 */
export const localizePercentage = (
  value: number,
  language: string,
  isDecimal: boolean = true
): string => {
  const percentage = isDecimal ? Math.round(value * 100) : Math.round(value);
  return localizeNumber(percentage, language) + '%';
};

/**
 * Formats a number with localized numerals and optional decimal places
 * @param value - The number to format
 * @param language - The language code
 * @param decimals - Number of decimal places (default: 0)
 * @returns Formatted number string with native numerals
 */
export const localizeNumberWithDecimals = (
  value: number,
  language: string,
  decimals: number = 0
): string => {
  const formatted = value.toFixed(decimals);
  return localizeNumber(formatted, language);
};

/**
 * Gets the native numeral for a specific digit
 * @param digit - The digit (0-9)
 * @param language - The language code
 * @returns The native numeral character
 */
export const getNativeDigit = (digit: number, language: string): string => {
  if (digit < 0 || digit > 9) return String(digit);
  const numerals = numeralSystems[language] || numeralSystems.en;
  return numerals[digit];
};

/**
 * Checks if a language uses native numerals different from Western numerals
 * @param language - The language code
 * @returns True if the language uses different numerals
 */
export const usesNativeNumerals = (language: string): boolean => {
  return language !== 'en' && language !== 'ta' && numeralSystems[language] !== undefined;
};
