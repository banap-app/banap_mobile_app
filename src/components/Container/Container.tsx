import React from "react";
import ContainerStyled from ".";

export type ContainerProps = {
  children?: React.ReactNode;
  padding?: [number?, number?, number?, number?];
  margin?: [number?, number?, number?, number?];
  display?: string;
  onPress?: () => any | void;
  justifyContent?: string;
  alignItems?: string;
  backgroundColor?: string;
  gap?: number;
  flexAll?: number;
  width?: number | string;
  height?: number | string;
  flexDirection?: string;
};

const ContainerComponent: React.FC<ContainerProps> = ({
  children,
  padding = [0, 0, 0, 0],
  onPress,
  margin = [0, 0, 0, 0],
  ...props
}) => {
  const handlePress = () => {
    if (onPress) {
      onPress();
    }
  };
  const [paddingTop, paddingRight, paddingBottom, paddingLeft] = padding;
  const [marginTop, marginRight, marginBottom, marginLeft] = margin;

  return (
    <ContainerStyled
      onPress={handlePress}
      paddingTop={paddingTop}
      paddingRight={paddingRight}
      paddingBottom={paddingBottom}
      paddingLeft={paddingLeft}
      marginTop={marginTop}
      marginRight={marginRight}
      marginBottom={marginBottom}
      marginLeft={marginLeft}
      {...props}
    >
      {children}
    </ContainerStyled>
  );
};

export default ContainerComponent;
