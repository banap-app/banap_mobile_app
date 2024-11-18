import { ViewProps } from "react-native";
import ContainerStyled from ".";

export type ContainerProps = {
  padding?: [number?, number?, number?, number?]; // Array de 4 valores para o padding
  margin?: [number?, number?, number?, number?]; // Array de 4 valores para a margin
  display?: string;
  justifyContent?: string;
  alignItems?: string;
  backgroundColor?: string;
  gap?: number;
  children?: React.ReactNode;
  width?: number | string;
  height?: number | string;
  flexDirection?: string;
} & ViewProps;

const ContainerComponent: React.FC<ContainerProps> = ({
  children,
  padding = [0, 0, 0, 0], // Valor padrão de padding: [top, right, bottom, left]
  margin = [0, 0, 0, 0],   // Valor padrão de margin: [top, right, bottom, left]
  ...props
}) => {
  const [paddingTop, paddingRight, paddingBottom, paddingLeft] = padding;
  const [marginTop, marginRight, marginBottom, marginLeft] = margin;

  return (
    <ContainerStyled
      paddingTop={paddingTop}
      paddingRight={paddingRight}
      paddingBottom={paddingBottom}
      paddingLeft={paddingLeft}
      marginTop={marginTop}
      marginRight={marginRight}
      marginBottom={marginBottom}
      marginLeft={marginLeft}
      {...props} // Aplica as demais props passadas
    >
      {children}
    </ContainerStyled>
  );
};

export default ContainerComponent;