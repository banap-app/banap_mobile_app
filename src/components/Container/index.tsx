import styled from "styled-components/native";
import { View } from "react-native";
import { ContainerProps } from "./Container";

const ContainerStyled = styled.View<ContainerProps>`
  padding: ${({ padding }: ContainerProps) => (padding ? `${padding}px` : "0px")};
  margin: ${({ margin }:ContainerProps) => (margin ? `${margin}px` : "0px")};
  display: ${({ display }:ContainerProps) => (display ? display : "flex")};
  justify-content: ${({ justifyContent }:ContainerProps) => (justifyContent ? justifyContent : "flex-start")};
  align-items: ${({ alignItems }:ContainerProps) => (alignItems ? alignItems : "flex-start")};
  background-color: ${({ backgroundColor }:ContainerProps) => (backgroundColor ? backgroundColor : "transparent")};
  width: ${({ width }:ContainerProps) => (width ? (typeof width === 'number' ? `${width}px` : width) : "100%")};
  height: ${({ height }:ContainerProps) => (height ? (typeof height === 'number' ? `${height}px` : height) : "100%")};
`;

export default ContainerStyled;
