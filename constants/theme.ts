export const Colors = {
  light: {
    // Primary colors
    primary: '#FFD700',      // Gold yellow
    primaryDark: '#FFC107',  // Darker yellow
    primaryLight: '#FFEB3B', // Lighter yellow
    
    // Background colors
    background: '#FFFFFF',    // White
    backgroundSecondary: '#F8F9FA', // Light gray
    surface: '#FFFFFF',       // White
    surfaceSecondary: '#F5F5F5', // Very light gray
    
    // Text colors
    text: '#000000',          // Black
    textSecondary: '#666666', // Dark gray
    textMuted: '#999999',     // Medium gray
    textInverse: '#FFFFFF',   // White (for dark backgrounds)
    
    // Accent colors
    accent: '#FFD700',        // Yellow
    accentSecondary: '#FFC107',
    
    // Status colors
    success: '#4CAF50',
    warning: '#FF9800',
    error: '#F44336',
    info: '#2196F3',
    
    // Border colors
    border: '#E0E0E0',
    borderLight: '#F0F0F0',
    borderDark: '#CCCCCC',
    
    // Shadow colors
    shadow: 'rgba(0, 0, 0, 0.1)',
    shadowDark: 'rgba(0, 0, 0, 0.2)',
  },
  
  dark: {
    // Primary colors
    primary: '#FFD700',      // Gold yellow
    primaryDark: '#FFC107',  // Darker yellow
    primaryLight: '#FFEB3B', // Lighter yellow
    
    // Background colors
    background: '#000000',    // Black
    backgroundSecondary: '#1A1A1A', // Dark gray
    surface: '#121212',       // Very dark gray
    surfaceSecondary: '#1E1E1E', // Dark gray
    
    // Text colors
    text: '#FFFFFF',          // White
    textSecondary: '#CCCCCC', // Light gray
    textMuted: '#888888',     // Medium gray
    textInverse: '#000000',   // Black (for light backgrounds)
    
    // Accent colors
    accent: '#FFD700',        // Yellow
    accentSecondary: '#FFC107',
    
    // Status colors
    success: '#4CAF50',
    warning: '#FF9800',
    error: '#F44336',
    info: '#2196F3',
    
    // Border colors
    border: '#333333',
    borderLight: '#444444',
    borderDark: '#222222',
    
    // Shadow colors
    shadow: 'rgba(255, 255, 255, 0.1)',
    shadowDark: 'rgba(255, 255, 255, 0.2)',
  }
} as const;

export const Typography = {
  fontSizes: {
    xs: 12,
    sm: 14,
    base: 16,
    lg: 18,
    xl: 20,
    '2xl': 24,
    '3xl': 30,
    '4xl': 36,
    '5xl': 48,
  },
  
  fontWeights: {
    thin: '100',
    extraLight: '200',
    light: '300',
    normal: '400',
    medium: '500',
    semiBold: '600',
    bold: '700',
    extraBold: '800',
    black: '900',
  },
  
  lineHeights: {
    tight: 1.2,
    normal: 1.5,
    relaxed: 1.6,
    loose: 2,
  },
  
  letterSpacing: {
    tight: -0.5,
    normal: 0,
    wide: 0.5,
    wider: 1,
    widest: 2,
  },
} as const;

export const Spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  '2xl': 48,
  '3xl': 64,
  '4xl': 96,
  '5xl': 128,
} as const;

export const BorderRadius = {
  none: 0,
  sm: 4,
  md: 8,
  lg: 12,
  xl: 16,
  '2xl': 24,
  full: 9999,
} as const;

export const Shadows = {
  sm: {
    shadowColor: Colors.light.shadow,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  md: {
    shadowColor: Colors.light.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  lg: {
    shadowColor: Colors.light.shadow,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 8,
  },
  xl: {
    shadowColor: Colors.light.shadow,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.2,
    shadowRadius: 16,
    elevation: 16,
  },
} as const;

export const ComponentStyles = {
  button: {
    primary: {
      backgroundColor: Colors.light.primary,
      color: Colors.light.text,
      paddingVertical: Spacing.md,
      paddingHorizontal: Spacing.lg,
      borderRadius: BorderRadius.md,
      fontWeight: Typography.fontWeights.semiBold,
    },
    secondary: {
      backgroundColor: Colors.light.surface,
      color: Colors.light.text,
      paddingVertical: Spacing.md,
      paddingHorizontal: Spacing.lg,
      borderRadius: BorderRadius.md,
      borderWidth: 1,
      borderColor: Colors.light.border,
      fontWeight: Typography.fontWeights.medium,
    },
    ghost: {
      backgroundColor: 'transparent',
      color: Colors.light.text,
      paddingVertical: Spacing.md,
      paddingHorizontal: Spacing.lg,
      borderRadius: BorderRadius.md,
      fontWeight: Typography.fontWeights.medium,
    },
  },
  
  card: {
    default: {
      backgroundColor: Colors.light.surface,
      borderRadius: BorderRadius.lg,
      padding: Spacing.lg,
      ...Shadows.sm,
      borderWidth: 1,
      borderColor: Colors.light.border,
    },
    elevated: {
      backgroundColor: Colors.light.surface,
      borderRadius: BorderRadius.lg,
      padding: Spacing.lg,
      ...Shadows.lg,
    },
  },
  
  input: {
    default: {
      backgroundColor: Colors.light.surface,
      borderWidth: 1,
      borderColor: Colors.light.border,
      borderRadius: BorderRadius.md,
      paddingVertical: Spacing.md,
      paddingHorizontal: Spacing.md,
      fontSize: Typography.fontSizes.base,
      color: Colors.light.text,
    },
    focused: {
      borderColor: Colors.light.primary,
      borderWidth: 2,
    },
  },
  
  messageCard: {
    sent: {
      backgroundColor: Colors.light.primary,
      color: Colors.light.text,
      borderRadius: BorderRadius.lg,
      padding: Spacing.md,
      marginLeft: Spacing.xl,
      alignSelf: 'flex-end',
    },
    received: {
      backgroundColor: Colors.light.surface,
      color: Colors.light.text,
      borderRadius: BorderRadius.lg,
      padding: Spacing.md,
      marginRight: Spacing.xl,
      alignSelf: 'flex-start',
      borderWidth: 1,
      borderColor: Colors.light.border,
    },
  },
} as const;

// Theme hook type for React Native
export type Theme = 'light' | 'dark';
export type ColorScheme = typeof Colors.light;

// Helper function to get current theme colors
export const getThemeColors = (theme: Theme) => {
  return Colors[theme];
};

// Common styles that can be reused
export const CommonStyles = {
  container: {
    flex: 1,
    backgroundColor: Colors.light.background,
  },
  
  centerContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  
  spaceBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  
  fullWidth: {
    width: '100%',
  },
  
  textCenter: {
    textAlign: 'center',
  },
  
  safeArea: {
    flex: 1,
    paddingTop: Spacing.md,
  },
  
  headerTitle: {
    fontSize: Typography.fontSizes['2xl'],
    fontWeight: Typography.fontWeights.bold,
    color: Colors.light.text,
  },
  
  subtitle: {
    fontSize: Typography.fontSizes.lg,
    fontWeight: Typography.fontWeights.medium,
    color: Colors.light.textSecondary,
  },
  
  body: {
    fontSize: Typography.fontSizes.base,
    fontWeight: Typography.fontWeights.normal,
    color: Colors.light.text,
    lineHeight: Typography.lineHeights.normal * Typography.fontSizes.base,
  },
  
  caption: {
    fontSize: Typography.fontSizes.sm,
    fontWeight: Typography.fontWeights.normal,
    color: Colors.light.textMuted,
  },
} as const;

export default {
  Colors,
  Typography,
  Spacing,
  BorderRadius,
  Shadows,
  ComponentStyles,
  CommonStyles,
  getThemeColors,
};
