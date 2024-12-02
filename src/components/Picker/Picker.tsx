import React, { useState } from "react";
import { Picker } from "@react-native-picker/picker";
import styled from "styled-components/native";
import StyledPicker from ".";

export type PickerProps = {
  width: number | string;
  height: number | string;
  backgroundColor: string;
  fontFamily?: MontserratFont;
  itens: Array<{ label: string; value: string }>;
};

export default function PickerSelector({
  width,
  height,
  backgroundColor,
  fontFamily,
  itens,
}: PickerProps) {
  const [selectedValue, setSelectedValue] = useState<string>("");

  return (
    <StyledPicker
      selectedValue={selectedValue}
      onValueChange={(itemValue) => setSelectedValue(itemValue as string)}
    >
      <Picker.Item label="Selecione uma opção..." value="" enabled={false} />
      {itens.map((item) => (
        <Picker.Item key={item.value} label={item.label} value={item.value} />
      ))}
    </StyledPicker>
  );
}
