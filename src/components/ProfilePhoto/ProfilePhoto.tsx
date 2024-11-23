import React from 'react';
import { ProfilePhotoStyled, ProfilePhotoContainer } from './index'; // Importando o componente estilizado da imagem

export type ProfilePhotoProps = {
  sourceImageUrl: string;
  scheme: "rounded" | "square" | "triangle"; // Esquema para a borda
  borderColor: string;
  borderWidth: number;
  width?: number | string;
  height?: number | string;
};

export const ProfilePhoto: React.FC<ProfilePhotoProps> = ({
  borderColor,
  borderWidth,
  scheme,
  sourceImageUrl,
  height,
  width,
}: ProfilePhotoProps) => {
  return (
    <ProfilePhotoContainer
      borderColor={borderColor}
      borderWidth={borderWidth}
      scheme={scheme}
      height={height}
      width={width}
    >
      <ProfilePhotoStyled
        source={require('@assets/banap-logo.png')} // Caminho para a imagem local
        resizeMode="cover" // Ajusta a imagem para cobrir todo o espaço
      />
    </ProfilePhotoContainer>
  );
};
