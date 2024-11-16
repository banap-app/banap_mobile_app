import React from 'react';
import StyledImage from './index';

export type ImagePropsStyled = {
    position?: string;
    sourceImage: string;
    width?: number | string;
    heigth?: number | string;
}

const Images = {
    'Linhas': require('../../../assets/Lines.png')
}

const ImageStyled: React.FC<ImagePropsStyled> = ({ sourceImage, position, width, heigth }: ImagePropsStyled) => {
    const imageSource = Images['Linhas']
    return (
        <StyledImage source={imageSource} position={position} width={width} heigth={heigth} />
    );
}

export default ImageStyled;
