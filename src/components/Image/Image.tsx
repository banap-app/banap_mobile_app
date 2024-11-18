import React from 'react';
import StyledImage from './index';
import { ImageKeys } from '@assets';
import Images from 'src/@types/imageMap';

export type ImagePropsStyled = {
    position?: string;
    zIndex?: number;
    sourceImage: ImageKeys;
    width?: number | string;
    height?: number | string;
    positionLocations?: [number?, number?, number?, number?]
}


const ImageStyled: React.FC<ImagePropsStyled> = ({ sourceImage, position , width, height, zIndex, positionLocations = []}: ImagePropsStyled) => {
    const imageSource = Images[sourceImage];
    const [top, bottom, left, right] = positionLocations

    if (!imageSource) {
        console.error(`Image with key "${sourceImage}" not found in imageMap.`);
        return null; // Ou você pode retornar um placeholder ou uma imagem padrão
    }

    return (
        <StyledImage source={imageSource} width={width} topPosition={top} leftPosition={left} rightPosition={right} bottomPosition={bottom} zIndex={zIndex} height={height} position={position} />
    );
}

export default ImageStyled;
