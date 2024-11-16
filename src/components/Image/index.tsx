import { Image } from "react-native";
import styled from "styled-components/native";

export type ImagePropsStyled = {
    position?: string;
    source: any; 
    width?: number;
    height?: number;
}

const StyledImage = styled(Image)<ImagePropsStyled>`
    position: ${({ position }: ImagePropsStyled) => position || 'inherit'};
    width: ${({ width }:ImagePropsStyled) => (width ? (typeof width === 'number' ? `${width}px` : width) : "100%")};
     height: ${({ height }:ImagePropsStyled) => (height ? (typeof height === 'number' ? `${height}px` : height) : "100%")};
     object-fit:contain
`;

export default StyledImage;
