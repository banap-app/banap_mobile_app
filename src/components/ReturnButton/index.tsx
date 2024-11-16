import { ReturnButtonProps } from "./ReturnButton";
import { Image, TouchableOpacity } from "react-native";
import styled from "styled-components/native";

const ReturnButtonStyled = styled(TouchableOpacity)<ReturnButtonProps>`
  background-color: ${({backgroundColor}: ReturnButtonProps) => backgroundColor};
  color:  ${({color}: ReturnButtonProps) => color};
  width: ${({width}: ReturnButtonProps) => width}px;
  height: ${({height}: ReturnButtonProps) => height}px;
  border-radius: ${({borderRadius}: ReturnButtonProps) => borderRadius}px;
  cursor: ${({isActive}: ReturnButtonProps) => (isActive ? "pointer" : "not-allowed")};
  opacity: ${({isActive}: ReturnButtonProps) => (isActive ? 1 : 0.5)};
  align-items: center;
  justify-content:center;
  border: ${({border}: ReturnButtonProps) => border ? border : 'none'};
`

const IconReturn = styled(Image)<ReturnButtonProps>`
  font-size: ${({ fontSize }: ReturnButtonProps) => (fontSize ? `${fontSize}px` : "16px")};
`;

export {ReturnButtonStyled, IconReturn}