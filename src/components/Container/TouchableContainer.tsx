import React from "react";
import ContainerStyled from ".";
import styled from "styled-components/native";
import { Omit } from "utility-types";
import { TouchableOpacity } from "react-native";


export type TouchableProps = {
    children?: React.ReactNode;
    padding?: [number?, number?, number?, number?];
    margin?: [number?, number?, number?, number?];
    display?: string;
    onPress?: () => any | void;
    justifyContent?: string;
    alignItems?: string;
    backgroundColor?: string;
    gap?: number;
    flexAll?: number;
    width?: number | string;
    height?: number | string;
    borderRadius?: number;
    flexDirection?: string;
    flexWrap?: string;
    borderColor?: string;
    borderWidth?: number;
    borderStyle?: string;
  };
  
  
  type TouchablePropsStyled = Omit<TouchableProps, 'children' | "margin" | 'padding'> & {
      marginTop?: number;
      marginRight?: number;
      marginBottom?: number;
      marginLeft?: number;
      paddingTop?: number;
      paddingRight?: number;
      paddingBottom?: number;
      paddingLeft?: number;
      borderRadius?: number;
    };


const TouchableStyled = styled(TouchableOpacity)<TouchablePropsStyled>`
  display: ${({ display }: TouchablePropsStyled) => display || 'flex'};
  flex:${({ flexAll }: TouchablePropsStyled) => flexAll || 'none'};
  justify-content: ${({ justifyContent }: TouchablePropsStyled) => justifyContent || 'flex-start'};
  align-items: ${({ alignItems }: TouchablePropsStyled) => alignItems || 'flex-start'};
  background-color: ${({ backgroundColor }: TouchablePropsStyled) => backgroundColor || 'transparent'};
  gap: ${({ gap }: TouchablePropsStyled) => (gap !== undefined ? `${gap}px` : '0')};
  width: ${({ width }: TouchablePropsStyled) => (typeof width === 'number' ? `${width}px` : width || '100%')};
  height: ${({ height }: TouchablePropsStyled) => (typeof height === 'number' ? `${height}px` : height || 'auto')};
  flex-direction: ${({ flexDirection }: TouchablePropsStyled) => flexDirection || 'column'};
  flex-wrap: ${({ flexWrap }: TouchablePropsStyled) => flexWrap || 'nowrap'};
  border-radius: ${({ borderRadius }: TouchablePropsStyled) => `${borderRadius}px` || '0px'};
  /* Aplicando margens */
  margin-top: ${({ marginTop }: TouchablePropsStyled) => (marginTop !== undefined ? `${marginTop}px` : '0px')};
  margin-right: ${({ marginRight }: TouchablePropsStyled) => (marginRight !== undefined ? `${marginRight}px` : '0px')};
  margin-bottom: ${({ marginBottom }: TouchablePropsStyled) => (marginBottom !== undefined ? `${marginBottom}px` : '0px')};
  margin-left: ${({ marginLeft }: TouchablePropsStyled) => (marginLeft !== undefined ? `${marginLeft}px` : '0px')};
  position:relative;
  /* Aplicando paddings */
  padding-top: ${({ paddingTop }: TouchablePropsStyled) => (paddingTop !== undefined ? `${paddingTop}px` : '0px')};
  padding-right: ${({ paddingRight }: TouchablePropsStyled) => (paddingRight !== undefined ? `${paddingRight}px` : '0px')};
  padding-bottom: ${({ paddingBottom }: TouchablePropsStyled) => (paddingBottom !== undefined ? `${paddingBottom}px` : '0px')};
  padding-left: ${({ paddingLeft }: TouchablePropsStyled) => (paddingLeft !== undefined ? `${paddingLeft}px` : '0px')};
 border-color:  ${({ borderColor }: TouchablePropsStyled) => borderColor || 'none'};
 border-width:  ${({ borderWidth }: TouchablePropsStyled) => borderWidth || '0'};
 border-style:  ${({ borderStyle }: TouchablePropsStyled) => borderStyle || 'none'};
`;




const TouchableContainer: React.FC<TouchableProps> = ({
  children,
  padding = [0, 0, 0, 0],
  onPress,
  borderRadius = 0,
  margin = [0, 0, 0, 0],
  ...props
}) => {
  const handlePress = () => {
    if (onPress) {
      onPress();
    }
  };
  const [paddingTop, paddingRight, paddingBottom, paddingLeft] = padding;
  const [marginTop, marginRight, marginBottom, marginLeft] = margin;

  return (
    <TouchableStyled
      onPress={handlePress}
      paddingTop={paddingTop}
      paddingRight={paddingRight}
      paddingBottom={paddingBottom}
      paddingLeft={paddingLeft}
      marginTop={marginTop}
      marginRight={marginRight}
      marginBottom={marginBottom}
      borderRadius={borderRadius}
      marginLeft={marginLeft}
      {...props}
    >
      {children}
    </TouchableStyled>
  );
};

export default TouchableContainer;
