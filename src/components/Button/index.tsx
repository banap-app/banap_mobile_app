import { ButtonProps } from "./Button";
import { Text, TouchableOpacity } from "react-native";
import styled from "styled-components/native";

const ButtonStyled = styled.TouchableOpacity<ButtonProps>`
  background-color: ${({backgroundColor}: ButtonProps) => backgroundColor};
  color:  ${({color}: ButtonProps) => color};
  width: ${({width}: ButtonProps) => width}px;
  height: ${({height}: ButtonProps) => height}px;
  border-radius: ${({borderRadius}: ButtonProps) => borderRadius}px;
  cursor: ${({isActive}: ButtonProps) => (isActive ? "pointer" : "not-allowed")};
  opacity: ${({isActive}: ButtonProps) => (isActive ? 1 : 0.5)};
  align-items: center;
  justify-content:center;
  
  border: ${({border}: ButtonProps) => border ? border : 'none'}
`;

const ButtonText = styled(Text)<ButtonProps>`
  color: ${({ color }: ButtonProps) => color};
  font-weight: ${({bold}: ButtonProps) => bold? bold : "auto"};
  font-size: ${({ fontSize }: ButtonProps) => (fontSize ? `${fontSize}px` : "16px")};
`;

export  {ButtonStyled, ButtonText}