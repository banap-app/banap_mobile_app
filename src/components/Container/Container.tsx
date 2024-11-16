import { ViewProps } from "react-native";
import ContainerStyled from ".";

export type ContainerProps = {
  padding?: number;
  margin?: number;
  display?: string;
  justifyContent?: string;
  alignItems?: string;
  backgroundColor?: string;
  children?: React.ReactNode;
  width?: number | string;
  height?: number | string;
} & ViewProps;

const ContainerComponent: React.FC<ContainerProps> = ({
  children,
  ...props
}) => {
  return <ContainerStyled {...props}>{children}</ContainerStyled>;
};

export default ContainerComponent;
