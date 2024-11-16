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
  border
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
      fontSize={fontSize}
      height={height}
      borderRadius={borderRadius}
      isActive={isActive}
      border={border}
    >
      <ButtonText color={color}>{title}</ButtonText>
    </ButtonStyled>
  );
};
