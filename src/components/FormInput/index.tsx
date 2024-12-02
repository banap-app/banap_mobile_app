import { TextInput } from "react-native";
import styled from "styled-components";
import { FormInputProps } from './FormInput';


type FormInputPropsStyled = Omit<FormInputProps, 'fontFamily'>

export const StyledTextInput = styled(TextInput)<FormInputPropsStyled>`
width: ${({ inputWidth }) => (typeof inputWidth === 'number' ? `${inputWidth}px` : inputWidth || 'auto')};
height: ${({ inputHeight }) => (typeof inputHeight === 'number' ? `${inputHeight}px` : inputHeight || 'auto')};

`