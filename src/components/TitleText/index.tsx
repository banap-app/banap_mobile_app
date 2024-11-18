import styled from "styled-components";
import { TitleProps } from "./TitleText";
import { Text } from "react-native";
import { Omit } from "utility-types";

// Omitimos 'text' e 'margins', já que processamos margens individualmente
type TitlePropsStyled = Omit<TitleProps, "text" | "margins"> & {
  marginTop?: number;
  marginRight?: number;
  marginBottom?: number;
  marginLeft?: number;
};

const TitleTextStyled = styled(Text)<TitlePropsStyled>`
  font-size: ${({ size }) => (size ? `${size}px` : "16px")};
  color: ${({ color }) => color || "#000"};
  font-weight: ${({ bold }) => bold || 400};
  text-align: ${({ align }) => align || "center"};
  letter-spacing: ${({ letterSpacing }) =>
    letterSpacing !== undefined ? `${letterSpacing}px` : "0px"};
  word-break: ${({ wordBreakMode }) => wordBreakMode || "normal"};
  margin-top: ${({ marginTop }) => `${marginTop}px`};
  margin-right: ${({ marginRight }) => `${marginRight}px`};
  margin-bottom: ${({ marginBottom }) => `${marginBottom}px`};
  
  margin-left: ${({ marginLeft }) => `${marginLeft}px`};
  white-space: pre-line; /* Garante que o \n seja interpretado */
`;

const TitleSpanStyled = styled(Text)<{ bold?: number; color?: string }>`
  font-weight: ${({ bold }) => (bold ? bold : 700)};
  color: ${({ color }) => color || 'black'};
`;


export {TitleTextStyled, TitleSpanStyled};
