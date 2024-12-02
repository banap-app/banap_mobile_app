import React from 'react';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import styled from 'styled-components';

export type AddIconProps = {
    size: number;
    color: string;
    position: 'absolute' | 'relative';
}

const StyledAddIcon = styled(FontAwesome6)<AddIconProps>`
 position:  ${({position}: AddIconProps) => position};
 font-size: ${({size}: AddIconProps) => `${size}px`};
 font-family:"Montserrat-Regular";
 color: ${({color}: AddIconProps) => color};
`;

const AddIcon:React.FC<AddIconProps> = ({size, color, position}: AddIconProps)=>{
    return (
        <StyledAddIcon position={position} name="add" size={size} color={color} />
    )
}

export default AddIcon