import React from 'react';
import TitleTextStyled from './';
import { Text } from 'react-native';

export type TitleProps = {
    text: string;
    size?: number;
    color?: string;
    bold?: number
    letterSpacing?: number;
    align?: string;
} 


export const TitleText:React.FC<TitleProps> = ({color, letterSpacing,align, bold, text, size}: TitleProps) => {
    return (
        <TitleTextStyled color={color} letterSpacing={letterSpacing} align={align} bold={bold} size={size}>
            {text}
        </TitleTextStyled>
    )
}