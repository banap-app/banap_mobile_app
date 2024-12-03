import React, { useState } from "react";
import { Button } from "src/components/Button/Button";
import ContainerComponent from "src/components/Container/Container";
import { useNavigateToPage } from "src/utils/navigateToPage";
import { useRoute, RouteProp } from "@react-navigation/native";
import { TitleText } from "src/components/TitleText/TitleText";

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
          alignItems="start"
          justifyContent="space-around"
        >
          <TitleText
            color="black"
            text={`Detalhes do Talhão: ${fieldId}`} // Exibindo o fieldId
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
            backgroundColor="green"
            width={265}
            borderRadius={12}
            fontSize={17}
            height={45}
            isActive={true}
            title="Continuar"
            color="white"
            onPress={() => navigateToPage("FieldProductorDetails")}
          />
        </ContainerComponent>
      </ContainerComponent>
    </React.Fragment>
  );
};

export default FieldProductorDetails;
