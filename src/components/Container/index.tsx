import styled from "styled-components/native";
import { ContainerProps } from "./Container";
import { Omit } from "utility-types";

// Omitimos 'children' e qualquer outra prop não necessária para o estilo
type ContainerPropsStyled = Omit<ContainerProps, 'children' | "margin" | 'padding'> & {
  marginTop?: number;
  marginRight?: number;
  marginBottom?: number;
  marginLeft?: number;
  paddingTop?: number;
  paddingRight?: number;
  paddingBottom?: number;
  paddingLeft?: number;
};

const ContainerStyled = styled.View<ContainerPropsStyled>`
  display: ${({ display }: ContainerPropsStyled) => display || 'flex'};
  justify-content: ${({ justifyContent }: ContainerPropsStyled) => justifyContent || 'flex-start'};
  align-items: ${({ alignItems }: ContainerPropsStyled) => alignItems || 'flex-start'};
  background-color: ${({ backgroundColor }: ContainerPropsStyled) => backgroundColor || 'transparent'};
  gap: ${({ gap }: ContainerPropsStyled) => (gap !== undefined ? `${gap}px` : '0')};
  width: ${({ width }: ContainerPropsStyled) => (typeof width === 'number' ? `${width}px` : width || '100%')};
  height: ${({ height }: ContainerPropsStyled) => (typeof height === 'number' ? `${height}px` : height || 'auto')};
  flex-direction: ${({ flexDirection }: ContainerPropsStyled) => flexDirection || 'column'};
  /* Aplicando margens */
  margin-top: ${({ marginTop }: ContainerPropsStyled) => (marginTop !== undefined ? `${marginTop}px` : '0px')};
  margin-right: ${({ marginRight }: ContainerPropsStyled) => (marginRight !== undefined ? `${marginRight}px` : '0px')};
  margin-bottom: ${({ marginBottom }: ContainerPropsStyled) => (marginBottom !== undefined ? `${marginBottom}px` : '0px')};
  margin-left: ${({ marginLeft }: ContainerPropsStyled) => (marginLeft !== undefined ? `${marginLeft}px` : '0px')};

  /* Aplicando paddings */
  padding-top: ${({ paddingTop }: ContainerPropsStyled) => (paddingTop !== undefined ? `${paddingTop}px` : '0px')};
  padding-right: ${({ paddingRight }: ContainerPropsStyled) => (paddingRight !== undefined ? `${paddingRight}px` : '0px')};
  padding-bottom: ${({ paddingBottom }: ContainerPropsStyled) => (paddingBottom !== undefined ? `${paddingBottom}px` : '0px')};
  padding-left: ${({ paddingLeft }: ContainerPropsStyled) => (paddingLeft !== undefined ? `${paddingLeft}px` : '0px')};
`;

export default ContainerStyled;
