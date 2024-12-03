import React from "react";
import { TitleText } from "../TitleText/TitleText";
import ContainerComponent from "../Container/Container";
import { Button } from "../Button/Button";
import AddButton from "../AddButton";
import AddIcon from "../AddIcon";
import { PropertyList } from "./PropertyItem";
import { ScrollViewContainer } from "../Container/ScrollViewContainer";
import { useNavigateToPage } from "src/utils/navigateToPage";

type PropertyItem = {
  id: string;
  name: string;
  imageUrl: string;
};

type PropertiesProps = {
  properties: PropertyItem[] | null;
};


const Properties: React.FC<PropertiesProps> = ({ properties }: PropertiesProps) => {
  const navigateToPage = useNavigateToPage();
  return (
    <ContainerComponent
      alignItems="flex-start"
      justifyContent="space-between"
      gap={35}
      padding={[0, 0, 0, 6]}
      display="flex"
      width="90%"
      height="50%"
    >
      <TitleText
        text="Propriedade 1"
        align="left"
        color="green"
        letterSpacing={1}
        size={25}
      />

      <ScrollViewContainer
        display="flex"
        flexDirection="row"
        alignItems="start"
        width="100%"
        height="55%"
        justifyContent="space-around"
      >
        <PropertyList data={properties} onPressItem={navigateToPage} />
      </ScrollViewContainer>

      <ContainerComponent
        width="100%"
        display="flex"
        alignItems="flex-end"
        padding={[20, 10, 0, 0]}
      >
        <Button
          display="flex"
          alignItems="center"
          justify="space-between"
          gap={12}
          backgroundColor="green"
          borderRadius={14}
          color="white"
          height={50}
          width={200}
          isActive={true}
          title="Nova propriedade"
          fontFamily="Montserrat-Medium"
          icon={<AddIcon position="relative" color="white" size={18} />}
          fontSize={16}
        />
      </ContainerComponent>
    </ContainerComponent>
  );
};

export default Properties;
