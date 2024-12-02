import React, { useState } from "react";
import { Modal, TouchableWithoutFeedback, Text } from "react-native";
import styled from "styled-components/native";
import ContainerComponent from "../Container/Container";
import TouchableContainer from "../Container/TouchableContainer";

const CustomPickerButton = styled.TouchableOpacity`
  border-radius: 10px;
  background-color: green;
  width: 100%;
  height: 52.5%;
  color: white;
  display: flex;
  align-items: flex-start;
  justify-content: center;
`;

const CustomPickerText = styled.Text`
  font-size: 15px;
  color: #ffffff;
  font-family: "Montserrat-Regular";
  padding-left: 14px;
`;

const OptionText = styled.Text`
  font-size: 14.5px;
  font-family: "Montserrat-Medium";
  color: green;
`;

export type CustomPickerProps = {
  options: string[];
  initialValue: string;
  onSelect: (value: string) => void;  // Nova prop para receber a função de callback
};

export default function CustomPicker({ options, initialValue, onSelect }: CustomPickerProps) {
  const [selectedValue, setSelectedValue] = useState(initialValue);
  const [modalVisible, setModalVisible] = useState(false);

  const handleSelect = (value: string) => {
    setSelectedValue(value);
    onSelect(value); // Chama a função de callback passada via prop
    setModalVisible(false);
  };

  return (
    <ContainerComponent display="flex" alignItems="center" justifyContent="center">
      <CustomPickerButton onPress={() => setModalVisible(true)}>
        <CustomPickerText>{selectedValue}</CustomPickerText>
      </CustomPickerButton>

      <Modal transparent={true} visible={modalVisible} animationType="fade">
        <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
          <ContainerComponent
            display="flex"
            height="82%"
            alignItems="center"
            justifyContent="flex-end"
          >
            <TouchableWithoutFeedback onPress={() => {}}>
              <ContainerComponent
                display="flex"
                width="90%"
                height="30%"
                alignItems="flex-start"
                justifyContent="space-evenly"
                padding={[0, 0, 0, 12]}
                borderRadius={6}
                borderColor="green"
                borderWidth={1}
              >
                {options.map((item, index) => (
                  <TouchableContainer
                    key={index}
                    display="flex"
                    onPress={() => handleSelect(item)} // Chama o método handleSelect
                  >
                    <OptionText>{item}</OptionText>
                  </TouchableContainer>
                ))}
              </ContainerComponent>
            </TouchableWithoutFeedback>
          </ContainerComponent>
        </TouchableWithoutFeedback>
      </Modal>
    </ContainerComponent>
  );
}
