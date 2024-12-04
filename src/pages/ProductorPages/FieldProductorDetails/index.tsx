import React, { useState } from "react";
import { Button } from "src/components/Button/Button";
import ContainerComponent from "src/components/Container/Container";
import { useNavigateToPage } from "src/utils/navigateToPage";
import { useRoute, RouteProp } from "@react-navigation/native";
import { TitleText } from "src/components/TitleText/TitleText";
import AddIcon from "../../../components/AddIcon";

type RootStackParamList = {
  FieldProductorDetails: { fieldId: string }; // Define o tipo esperado
};

const FieldProductorDetails: React.FC = () => {
  const navigateToPage = useNavigateToPage();

  // Hook para acessar os parâmetros da rota
  const route = useRoute<RouteProp<RootStackParamList, 'FieldProductorDetails'>>();
  const { fieldId } = route.params;
  console.log(fieldId)

  return (
    <React.Fragment>
      <ContainerComponent
        display="flex"
        alignItems="center"
        justifyContent="start"
        width="100%"
        height="80%"
      >
        <ContainerComponent
          width="100%"
          height="auto"
          padding={[0, 0, 0, 5]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <TitleText
            color="black"
            text={`Talhão ${fieldId}`} // Exibindo o fieldId
            align="left"
            fontFamily="Montserrat-Bold"
            letterSpacing={1}
            size={30}
            margins={[0, 0, 10, 0]}
            lineBreak={true}
            highlightTexts={[
              {
                text: "Talhão...",
                color: "green",
                fontFamily: "Montserrat-ExtraBold",
              },
            ]}
          />
        </ContainerComponent>

        <ContainerComponent
          display="flex"
          alignItems="center"
          justifyContent="center"
          height="31.5%"
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
          title="Nova análise"
          fontFamily="Montserrat-Medium"
          icon={<AddIcon position="relative" color="white" size={18} />}
          fontSize={16}
          onPress={()=>navigateToPage("StepOne")}
        />
        </ContainerComponent>
      </ContainerComponent>
    </React.Fragment>
  );
};

export default FieldProductorDetails;
