import React from "react";
import { Image, Dimensions } from "react-native";
import styled from "styled-components/native";
import { ImagePropsStyled } from "./Image";

type ImageProps = Omit<ImagePropsStyled, 'positionLocations'> & {
  topPosition?: number;
  bottomPosition?: number;
  leftPosition?: number;
  rightPosition?: number;
  opacity?: number; // Adicionado para tornar invisível
  pointerEvents?: "none" | "auto"; // Controle da interação com toques
};

const screenWidth = Dimensions.get('window').width;

const StyledImage = styled(Image)<ImageProps>`
  position: ${({ position }) => position || "absolute"};
  width: ${({ width }) => (width ? (typeof width === "number" ? `${width}px` : width) : `${screenWidth}px`)};
  height: ${({ height }) => (height ? (typeof height === "number" ? `${height}px` : height) : "100%")};
  object-fit: ${({ objectFit }) => (objectFit ? objectFit : "0")};
  z-index: ${({ zIndex }) => (zIndex ? zIndex : "0")};
  bottom: ${({ bottomPosition }) => (bottomPosition !== undefined ? `${bottomPosition}px` : "auto")};
  left: ${({ leftPosition }) => (leftPosition !== undefined ? `${leftPosition}px` : "auto")};
  right: ${({ rightPosition }) => (rightPosition !== undefined ? `${rightPosition}px` : "auto")};
  top: ${({ topPosition }) => (topPosition !== undefined ? `${topPosition}px` : "auto")};
  opacity: ${({ opacity }) => (opacity !== undefined ? opacity : 1)};
  pointer-events: ${({ pointerEvents }) => pointerEvents || "auto"};
`;

export default StyledImage;