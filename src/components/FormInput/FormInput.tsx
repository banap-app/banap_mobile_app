import React from "react";
import ContainerComponent from "../Container/Container";
import { TitleText } from "../TitleText/TitleText";
import { TextInput } from "react-native";
import { Line } from "../Line/Line";
import { StyledTextInput } from ".";

export type FormInputProps = {
  title?: string;
  placeholder?: string;
  onChange?: (value: any) => any;
  width?: number;
  height?: number;
  inputWidth?: number | string;
  inputHeight?: number | string;
  lineWidth?: number | string;
  lineHeight?: number;
  titleAlign?: "left" | "center" | "right" | "justify" | undefined;
  titleSize?: number;
  gap?: number;
  fontFamily?:MontserratFont
};

const FormInput: React.FC<FormInputProps> = ({
  onChange,
  placeholder,
  title = "",
  inputHeight,
  inputWidth,
  lineWidth = '100%',
  lineHeight = 1,
  titleAlign,
  titleSize = 16,
  gap = 12,
  fontFamily
}: FormInputProps) => {
  return (
    <ContainerComponent
      display="flex"
      flexDirection="column"
      alignItems="start"
      justifyContent="start"
      gap={gap}
    >
      <TitleText text={title} align={titleAlign} size={titleSize} fontFamily={fontFamily}/>
      <StyledTextInput
        onChangeText={onChange}
        inputWidth={inputWidth}
        inputHeight={inputHeight}
        placeholder={placeholder}
      />
      <Line
        backgroundColor="black"
        height={lineHeight}
        width={inputWidth ? inputWidth : lineWidth}
        lineBorderRadius={10}
        lineStyle="solid"
      />
    </ContainerComponent>
  );
};

export default FormInput;
