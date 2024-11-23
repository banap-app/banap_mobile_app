import React from "react";
import { Button } from "src/components/Button/Button";
import ContainerComponent from "src/components/Container/Container";
import FormInput from "src/components/FormInput/FormInput";
import SubtitleText from "src/components/SubTitleText/SubTitleText";
import { TitleText } from "src/components/TitleText/TitleText";
import { navigateToPage } from "src/utils/navigateToPage";

export const RegisterProperty: React.FC = () => {
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
          justifyContent=""
          gap={5.5}
        >
          <TitleText
            color="black"
            text="Cadastrando sua
propriedade..."
            align="justify"
            bold={900}
            letterSpacing={1.2}
            size={32.5}
            margins={[0, 0, 10, 0]}
            lineBreak={true}
            breakAfter="Produtor!"
            highlightTexts={[{ text: "propriedade...", color: "green", bold: 900 }]}
          />

        

          <SubtitleText
            align="justify"
            color="black"
            bold={300}
            letterSpacing={1}
            lineHeight={18}
            size={16}
          >
            O primeiro passo a ser feito é cadastrar sua propriedade... 
          </SubtitleText>
        </ContainerComponent>

        <ContainerComponent
          width="100%"
          height="55%"
          display="flex"
          flexDirection="column"
          padding={[40, 5, 0, 5]}
          alignItems="start"
          justifyContent="flex-start"
        >
          <FormInput
            placeholder="Propriedade 01"
            title="Nome da Propriedade"
            titleAlign="left"
            titleSize={25}
            inputHeight="auto"
            lineWidth="97.5%"
          />
        </ContainerComponent>

        <ContainerComponent
          display="flex"
          alignItems="center"
          justifyContent="center"
          height="37.5%"
        >
          <Button
            backgroundColor="green"
            width={265}
            borderRadius={12}
            fontSize={17}
            height={45}
            isActive={true}
            title="Cadastrar"
            color="white"
            bold={700}
            onPress={navigateToPage("InitialProductorPage")}
          />
        </ContainerComponent>
      </ContainerComponent>
    </React.Fragment>
  );
};
