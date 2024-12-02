import React from 'react';
import { ButtonStyled, ButtonText } from "./index";
import { TouchableOpacityProps } from "react-native";

export type ButtonProps = {
  isActive: boolean;
  backgroundColor: string;
  title?: string;
  onPress?: () => any | void;
  width: number;
  height: number | string;
  fontSize?: number;
  borderRadius: number;
  color: string;
  border?: string;
 fontFamily?: MontserratFont
 align?: string
  icon?: React.ReactNode
  display?: 'flex' | 'inline'
  justify?: 'center' | 'flex-start' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly'
  alignItems?: 'center' | 'flex-start' | 'flex-end' | 'space-between' | 'space-evenly' | 'space-around'
  gap?: number

} & TouchableOpacityProps;

export const Button = ({
  borderRadius,
  backgroundColor,
  fontSize,
  height,
  width,
  isActive,
  onPress,
  align,
  title,
  color,
  border,
  fontFamily,
  icon,
  display,
  justify,
  alignItems,
  gap
}: ButtonProps) => {
  const handlePress = () => {
    if (onPress) {
      onPress();
    }
  };

  return (
    <ButtonStyled
      onPress={handlePress}
      backgroundColor={backgroundColor}
      width={width}
      display={display}
      justify={justify}
      gap={gap}
      alignItems={alignItems}
      height={height}
      borderRadius={borderRadius}
      isActive={isActive}
      border={border}
    
    >
      {icon}
      {title && <ButtonText color={color} align={align} fontSize={fontSize} fontFamily={fontFamily}>{title}</ButtonText>}
    </ButtonStyled>
  );
};
