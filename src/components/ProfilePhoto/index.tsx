import styled from "styled-components/native";
import { View, ImageBackground } from "react-native";
import { ProfilePhotoProps } from './ProfilePhoto';

// O container vai aplicar a borda, o arredondamento e o layout correto para a imagem
export const ProfilePhotoContainer = styled(View)<ProfilePhotoProps>`
  border-color: ${({ borderColor }) => borderColor || "black"}; /* Define a cor da borda */
  border-width: ${({ borderWidth }) => (borderWidth || 1)}; /* Largura da borda, com valor padrão */
  border-radius: ${({ scheme }) =>
    scheme === "rounded" ? "50%" : scheme === "square" ? "0px" : "50%"}; /* Borda arredondada ou quadrada */
  overflow: hidden; /* Impede que partes da imagem saiam da borda arredondada */
  width: ${({ width }) => (typeof width === "number" ? width : width || "100%")}; /* Largura, pode ser número ou string */
  height: ${({ height }) => (typeof height === "number" ? height : height || "100%")}; /* Altura, pode ser número ou string */
  display: flex; /* Garante que o container use o flexbox */
  justify-content: center; /* Centraliza a imagem dentro do container */
  align-items: center; /* Centraliza a imagem dentro do container */
`;

export const ProfilePhotoStyled = styled(ImageBackground)<ProfilePhotoProps>`
  width: 100%; /* Garante que a imagem ocupe toda a largura disponível */
  height: 100%; /* Garante que a imagem ocupe toda a altura disponível */
  object-fit: cover;
`;