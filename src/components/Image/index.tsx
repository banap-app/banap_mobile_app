import { Image } from "react-native";
import styled from "styled-components/native";
import { ImagePropsStyled } from "./Image";


type ImageProps = Omit<ImagePropsStyled, "positionLocations"> & {
    topPosition?: number;
    bottomPosition?: number;
    leftPosition?: number;
    rightPosition?: number;
  };


const StyledImage = styled(Image)<ImageProps>`

    position: ${({ position }: ImageProps) => position || 'inherit'};
    width: ${({ width }:ImageProps) => (width ? (typeof width === 'number' ? `${width}px` : width) : "100%")};
     height: ${({ height }:ImageProps) => (height ? (typeof height === 'number' ? `${height}px` : height) : "100%")};
     object-fit:contain;
     z-index: ${({ zIndex }:ImageProps) => (zIndex ? zIndex : '0')};
     bottom:${({ bottomPosition }: ImageProps) => bottomPosition || 'auto'};
     left:${({ leftPosition }: ImageProps) => leftPosition || 'auto'};
     right:${({ rightPosition }: ImageProps) => rightPosition || 'auto'};
     top:${({ topPosition }: ImageProps) => topPosition || 'auto'};
`;

export default StyledImage;
