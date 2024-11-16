import React from 'react';
import {TouchableOpacityProps } from 'react-native'
import { ReturnButtonStyled, IconReturn } from '.';
import AntDesign from '@expo/vector-icons/AntDesign';

export type ReturnButtonProps = {
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
} & TouchableOpacityProps
const ReturnButton:React.FC<ReturnButtonProps> = ({backgroundColor, borderRadius, color, height, isActive, width, border, fontSize, onPress, title}:ReturnButtonProps) => {
    const handlePress = () => {
        if (onPress) {
          onPress();
        }
      };
    return (
        <ReturnButtonStyled onPress={handlePress} backgroundColor={backgroundColor} color={color} width={width} height={height} borderRadius={borderRadius} isActive={isActive} border={border}>
          <AntDesign name="arrowleft" size={fontSize} color="black" />
        </ReturnButtonStyled>
    );
}

export default ReturnButton;