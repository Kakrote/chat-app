import React from 'react';
import { Text as RNText, TextProps } from 'react-native';

interface CustomTextProps extends TextProps {
  fontFamily?: 'Pacifico' | 'default';
  children: React.ReactNode;
}

const Text: React.FC<CustomTextProps> = ({ 
  fontFamily = 'default', 
  style, 
  children, 
  ...props 
}) => {
  const fontStyle = fontFamily === 'Pacifico' ? { fontFamily: 'Pacifico' } : {};
  
  return (
    <RNText 
      style={[fontStyle, style]} 
      {...props}
    >
      {children}
    </RNText>
  );
};

export default Text;