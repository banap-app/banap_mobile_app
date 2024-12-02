import React from 'react';
import { ScrollView, View } from 'react-native';
import styled from 'styled-components/native';

type ScrollViewContainerProps = {
  children: React.ReactNode;
  display?: string;
  flexAll?: number | string;
  justifyContent?: string;
  alignItems?: string;
  backgroundColor?: string;
  gap?: number;
  width?: number | string;
  height?: number | string;
  flexDirection?: string;
  marginTop?: number;
  marginRight?: number;
  marginBottom?: number;
  marginLeft?: number;
  paddingTop?: number;
  paddingRight?: number;
  paddingBottom?: number;
  paddingLeft?: number;
};

const StyledScrollView = styled(View)<ScrollViewContainerProps>`
  display: ${({ display }: ScrollViewContainerProps) => display || 'flex'};
  flex: ${({ flexAll }: ScrollViewContainerProps) => flexAll || 'none'};
  background-color: ${({ backgroundColor }: ScrollViewContainerProps) => backgroundColor || 'transparent'};
  width: ${({ width }: ScrollViewContainerProps) => (typeof width === 'number' ? `${width}px` : width || '100%')};
  height: ${({ height }: ScrollViewContainerProps) => (typeof height === 'number' ? `${height}px` : height || 'auto')};
  flex-direction: ${({ flexDirection }: ScrollViewContainerProps) => flexDirection || 'none'};
  margin-top: ${({ marginTop }: ScrollViewContainerProps) => (marginTop !== undefined ? `${marginTop}px` : '0px')};
  margin-right: ${({ marginRight }: ScrollViewContainerProps) => (marginRight !== undefined ? `${marginRight}px` : '0px')};
  margin-bottom: ${({ marginBottom }: ScrollViewContainerProps) => (marginBottom !== undefined ? `${marginBottom}px` : '0px')};
  margin-left: ${({ marginLeft }: ScrollViewContainerProps) => (marginLeft !== undefined ? `${marginLeft}px` : '0px')};
  padding-top: ${({ paddingTop }: ScrollViewContainerProps) => (paddingTop !== undefined ? `${paddingTop}px` : '0px')};
  padding-right: ${({ paddingRight }: ScrollViewContainerProps) => (paddingRight !== undefined ? `${paddingRight}px` : '0px')};
  padding-bottom: ${({ paddingBottom }: ScrollViewContainerProps) => (paddingBottom !== undefined ? `${paddingBottom}px` : '0px')};
  padding-left: ${({ paddingLeft }: ScrollViewContainerProps) => (paddingLeft !== undefined ? `${paddingLeft}px` : '0px')};

`;

export const ScrollViewContainer: React.FC<ScrollViewContainerProps> = ({ children, justifyContent, alignItems, ...props }) => {
  return (
    <StyledScrollView
      {...props}
      
      contentContainerStyle={{
        flexDirection: props.flexDirection || 'column', // Alinha os itens na direção correta
        justifyContent: justifyContent || 'flex-start', // Aplicando a justificativa
        alignItems: alignItems || 'flex-start', // Alinhando os itens
        flexWrap: 'wrap', // Permite que os itens quebrem para a próxima linha
        gap: props.gap || 10, // Aplica o espaçamento entre os itens
        flexGrow: 1,
        
      }}

      showsVerticalScrollIndicator={false} // Remove a barra de rolagem vertical
      showsHorizontalScrollIndicator={false}
    >
      {children}
    </StyledScrollView>
  );
};
