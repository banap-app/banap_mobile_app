import React from 'react';
import SubTitleTextStyled from '.';


export type SubtitleProps = {
    children: string;
    size?: number;
    color?: string;
    bold?: number
    letterSpacing?: number;
    align?: string;
    lineHeight?: number;
}

const SubtitleText:React.FC<SubtitleProps> = ({color, letterSpacing,align, bold, children, size, lineHeight}: SubtitleProps) => {
    return (
        <SubTitleTextStyled color={color} letterSpacing={letterSpacing} align={align} bold={bold} size={size} lineHeight={lineHeight}>
            {children}
        </SubTitleTextStyled>
    )
}

export default SubtitleText;