import React from "react";
import StyledImage from "./index";
import { ImageKeys } from "@assets";
import Images from "src/@types/imageMap";

export type ImagePropsStyled = {
  position?: string;
  zIndex?: number;
  sourceImage: ImageKeys;
  width?: number | string;
  height?: number | string;
  positionLocations?: [number?, number?, number?, number?];
  opacity?: number; // Adicionado para controle de visibilidade
  pointerEvents?: "none" | "auto"; // Adicionado para controlar interação
  objectFit?: "contain" | "cover" | "fill" | "none" | "scale-down";
};

const ImageStyled: React.FC<ImagePropsStyled> = ({
  sourceImage,
  position,
  width,
  height,
  zIndex,
  objectFit,
  positionLocations = [],
  opacity = 1, // Valor padrão: visível
  pointerEvents = "none", // Valor padrão: interativo
}: ImagePropsStyled) => {
  const imageSource = Images[sourceImage];
  const [top, bottom, left, right] = positionLocations;

  if (!imageSource) {
    console.error(
      `Image with key "${sourceImage}" not found in imageMap.`
    );
    return null; // Retorna um placeholder ou uma imagem padrão, se necessário
  }

  return (
    <StyledImage
      source={imageSource}
      width={width}
      topPosition={top}
      leftPosition={left}
      rightPosition={right}
      bottomPosition={bottom}
      zIndex={zIndex}
      height={height}
      objectFit={objectFit}
      position={position}
      opacity={opacity} // Define opacidade
      pointerEvents={pointerEvents} // Controle de interação
    />
  );
};

export default ImageStyled;
