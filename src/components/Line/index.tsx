import { View } from "react-native";
import styled from "styled-components";
import { LineProps } from "./Line";

export const LineStyled = styled(View)<LineProps>`
  width: ${({ width }) => (typeof width === 'number' ? `${width}px` : width || '100%')};
  height: ${({ height }) => (height ? height : "0px")};
  background-color: ${({backgroundColor}) => backgroundColor || '#000'};
  border-style: ${({lineStyle}) => lineStyle || 'solid'};
  border-radius: ${({lineBorderRadius}) => `${lineBorderRadius}px` || '0px'};
`;
