import React from 'react';
import { ButtonStyled, ButtonText } from "./index";
import { TouchableOpacityProps } from "react-native";

export type ButtonProps = {
  isActive: boolean;
  backgroundColor: string;
  title?: string;
  onPress?: () => any | void;
  width: number;
  height: number;
  fontSize?: number;
  borderRadius: number;
  color: string;
  border?: string;
  bold?: number;
} & TouchableOpacityProps;

export const Button = ({
  borderRadius,
  backgroundColor,
  fontSize,
  height,
  width,
  isActive,
  onPress,
  title,
  color,
  border,
  bold
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
    
      height={height}
      borderRadius={borderRadius}
      isActive={isActive}
      border={border}
    
    >
      <ButtonText color={color}  fontSize={fontSize} bold={bold}>{title}</ButtonText>
    </ButtonStyled>
  );
};
