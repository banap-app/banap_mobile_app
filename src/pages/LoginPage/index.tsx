import React from "react";
import { Text } from "react-native";
import { Button } from "src/components/Button/Button";
import ContainerComponent from "src/components/Container/Container";
import FormInput from "src/components/FormInput/FormInput";
import ImageStyled from "src/components/Image/Image";
import SubtitleText from "src/components/SubTitleText/SubTitleText";
import { TitleText } from "src/components/TitleText/TitleText";
import { navigateToPage } from "src/utils/navigateToPage";

export const LoginPage: React.FC = () => {
  return (
    <React.Fragment>
      <ContainerComponent
        display="flex"
        alignItems="center"
        justifyContent="start"
        height="100%"
      >
        <ContainerComponent
          display="flex"
          alignItems="center"
          height="35%"

          justifyContent="center"
        >
            <ImageStyled sourceImage="Banap" objectFit="contain" height="37.5%" position="none" width="30%" />
          <TitleText
            text="Entre com a sua conta!"
            breakAfter="sua"
            size={20}
            lineBreak={true}
          />
        </ContainerComponent>

        <ContainerComponent
          display="flex"
          alignItems="center"
          justifyContent="center"
          gap={20}
          width="67.5%"
        >
          <FormInput
            placeholder="exemplo@exemplo.com"
            title="Email"
            titleAlign="left"
            titleSize={20}
            inputHeight="auto"
            gap={5}
            lineHeight={0.55}
          />

          <FormInput
            placeholder="Senha@123"
            gap={5}
            title="Senha"
            titleAlign="left"
            titleSize={20}
            inputHeight="auto"
            lineHeight={0.55}
          />
          <ContainerComponent alignItems="right">

          <SubtitleText align="right" bold={500} color="green" size={14} letterSpacing={1} lineHeight={14}>Esqueceu a sua senha?</SubtitleText>
          </ContainerComponent>
          <Button title="Entrar" bold={800} backgroundColor="green" onPress={navigateToPage("InitialProductorPage")} borderRadius={10} color="white" isActive={true} width={255} height={45}/>
          <TitleText align="center" bold={500} color="black" size={14} letterSpacing={1} highlightTexts={[{ text: "Crie uma.", color: "green", bold: 600 }]} text="Não possui uma conta? Crie uma." />
        </ContainerComponent>
      </ContainerComponent>
    </React.Fragment>
  );
};
