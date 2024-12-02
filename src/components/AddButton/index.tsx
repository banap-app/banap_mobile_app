import React from "react";
import { Button } from "../Button/Button";
import AddIcon from "../AddIcon";
import TouchableContainer from "../Container/TouchableContainer";

type AddButtonProps = {
  onPress: () => void;  // Function to be called when button is pressed
}

const AddButton: React.FC<AddButtonProps> = ({onPress}: AddButtonProps) => {
  return (
    <TouchableContainer justifyContent="center" display="flex" alignItems="center" width="auto">
      <Button
        backgroundColor="lightgray"
        borderRadius={12}
        isActive={true}
        onPress={onPress}
        height="100%"
        width={115}
        fontSize={12}
        color="white"
        icon={<AddIcon position="relative" size={37.5} color="darkgray" />}
      />
      
    </TouchableContainer>
  );
};

export default AddButton;
