import React from 'react';
import theme, { ThemeTypographyVariants } from '@src/theme/theme';
import { StyleSheet } from '@src/theme/StyleSheet';
import { BaseComponent } from '@src/theme/BaseComponent';

interface TextProps {
  variant?: ThemeTypographyVariants;
  tag?: 'p' | 'li' | 'h1' | 'h2' | 'h3';
  children?: React.ReactNode;
  styleSheet?: StyleSheet;
}

export default function Text({
  styleSheet,
  variant,
  ...props
}: TextProps) {

  const textVariant = theme.typography.variants[variant];

  return (
    <BaseComponent 
      styleSheet={{ 
        fontFamily: theme.typography.fontFamily,
        ...textVariant,
        ...styleSheet,
      }} 
      {...props} />
  )
}

Text.defaultProps = {
  tag: 'p',
  variant: 'body2'
}
