import { ButtonProps } from "./Button";
import { Text, TouchableOpacity } from "react-native";
import styled from "styled-components/native";

const ButtonStyled = styled.TouchableOpacity<ButtonProps>`
  background-color: ${({backgroundColor}: ButtonProps) => backgroundColor};
  display: ${({display}: ButtonProps) => (display ? display : 'inline')}; 
  flex-direction: row; 
  align-items: ${({alignItems}: ButtonProps) => (alignItems ? alignItems : 'flex-start')}; 
  justify-content: ${({justify}: ButtonProps) => (justify ? justify : 'flex-start')}; 
  gap: ${({gap}: ButtonProps) => gap};
  color:  ${({color}: ButtonProps) => color};
  width: ${({width}: ButtonProps) => width}px;
  height: ${({ height }: ButtonProps) => 
    typeof height === 'number' ? `${height}px` : height};
  border-radius: ${({borderRadius}: ButtonProps) => borderRadius}px;
  cursor: ${({isActive}: ButtonProps) => (isActive ? "pointer" : "not-allowed")};
  opacity: ${({isActive}: ButtonProps) => (isActive ? 1 : 0.5)};
  align-items: center;
  justify-content:center;
  
  border: ${({border}: ButtonProps) => border ? border : 'none'}
`;

const ButtonText = styled(Text)<ButtonProps>`
  color: ${({ color }: ButtonProps) => color};
  font-family: ${({ fontFamily }: ButtonProps) => fontFamily ? fontFamily : 'Montserrat-Regular'};
  font-size: ${({ fontSize }: ButtonProps) => (fontSize ? `${fontSize}px` : "16px")};
  text-align: ${({ align }: ButtonProps) => align ? align : "center"};
`;

export  {ButtonStyled, ButtonText}