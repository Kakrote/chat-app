/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FFD700',  // Gold yellow
          dark: '#FFC107',     // Darker yellow
          light: '#FFEB3B',    // Lighter yellow
        },
        background: {
          DEFAULT: '#FFFFFF',     // White
          secondary: '#F8F9FA',   // Light gray
          dark: '#000000',        // Black (for dark mode)
          'dark-secondary': '#1A1A1A', // Dark gray (for dark mode)
        },
        surface: {
          DEFAULT: '#FFFFFF',     // White
          secondary: '#F5F5F5',   // Very light gray
          dark: '#121212',        // Very dark gray (for dark mode)
          'dark-secondary': '#1E1E1E', // Dark gray (for dark mode)
        },
        text: {
          DEFAULT: '#000000',     // Black
          secondary: '#666666',   // Dark gray
          muted: '#999999',       // Medium gray
          inverse: '#FFFFFF',     // White (for dark backgrounds)
          'dark-primary': '#FFFFFF',    // White (for dark mode)
          'dark-secondary': '#CCCCCC',  // Light gray (for dark mode)
          'dark-muted': '#888888',      // Medium gray (for dark mode)
        },
        accent: {
          DEFAULT: '#FFD700',     // Yellow
          secondary: '#FFC107',   // Darker yellow
        },
        status: {
          success: '#4CAF50',
          warning: '#FF9800',
          error: '#F44336',
          info: '#2196F3',
        },
        border: {
          DEFAULT: '#E0E0E0',     // Light border
          light: '#F0F0F0',       // Very light border
          dark: '#CCCCCC',        // Darker border
          'dark-default': '#333333',    // Dark mode border
          'dark-light': '#444444',      // Dark mode light border
          'dark-dark': '#222222',       // Dark mode darker border
        },
      },
      spacing: {
        'xs': '4px',
        'sm': '8px',
        'md': '16px',
        'lg': '24px',
        'xl': '32px',
        '2xl': '48px',
        '3xl': '64px',
        '4xl': '96px',
        '5xl': '128px',
      },
      borderRadius: {
        'sm': '4px',
        'md': '8px',
        'lg': '12px',
        'xl': '16px',
        '2xl': '24px',
      },
      fontSize: {
        'xs': '12px',
        'sm': '14px',
        'base': '16px',
        'lg': '18px',
        'xl': '20px',
        '2xl': '24px',
        '3xl': '30px',
        '4xl': '36px',
        '5xl': '48px',
      },
      fontWeight: {
        'thin': '100',
        'extralight': '200',
        'light': '300',
        'normal': '400',
        'medium': '500',
        'semibold': '600',
        'bold': '700',
        'extrabold': '800',
        'black': '900',
      },
    },
  },
  plugins: [],
}