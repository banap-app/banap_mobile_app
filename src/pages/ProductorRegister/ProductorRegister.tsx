import React from "react";
import { Text } from "react-native";
import { AppBar } from "src/components/AppBar/AppBar";
import { Button } from "src/components/Button/Button";
import ContainerComponent from "src/components/Container/Container";
import FormInput from "src/components/FormInput/FormInput";
import SubtitleText from "src/components/SubTitleText/SubTitleText";
import { TitleText } from "src/components/TitleText/TitleText";

const ProductorRegister: React.FC = () => {
  return (
    <React.Fragment>
      <AppBar />
      <ContainerComponent display="flex" width="100%" height="90%">
        <ContainerComponent
          width="90%"
          padding={[0, 0, 0, 25]}
          display="flex"
          backgroundColor=""
          alignItems="start"
          justifyContent="start"
          gap={5}
        >
          <TitleText
            color="black"
            text="Olá, Produtor!
            Antes de tudo..."
            align="justify"
            bold={900}
            letterSpacing={1.2}
            size={32.3}
            margins={[0, 0, 10, 0]}
            lineBreak={true}
            breakAfter="Produtor!"
            highlightTexts={[{ text: "Produtor!", color: "green", bold: 900 }]}
          />

          <SubtitleText
            align="justify"
            color="black"
            bold={700}
            letterSpacing={1}
            lineHeight={20}
            size={16.5}
          >
            Um cadastro deve ser realizado!
          </SubtitleText>

          <SubtitleText
            align="justify"
            color="black"
            bold={300}
            letterSpacing={1}
            lineHeight={20}
            size={16.5}
          >
            Precisamos das suas informações, nos diga seu...
          </SubtitleText>
        </ContainerComponent>

        <ContainerComponent
          width="90%"
          height="40%"
          padding={[30, 0, 0, 25]}
          display="flex"
          backgroundColor=""
          alignItems="start"
          justifyContent="space-between"
          gap={25}
        >
          <FormInput
            placeholder="Exemplo"
            title="Nome"
            titleAlign="left"
            titleSize={25}
            inputHeight="auto"
          />
          <FormInput
            placeholder="exemplo@exemplo.com"
            title="Email"
            titleAlign="left"
            titleSize={25}
            inputHeight="auto"
          />
          <FormInput
            placeholder="aa"
            title="Senha"
            titleAlign="left"
            titleSize={25}
            inputHeight="auto"
          />
        </ContainerComponent>
        <ContainerComponent display="flex" alignItems="center" justifyContent="center" height="40%">
          <Button
            backgroundColor="green"
            width={270}
            borderRadius={12}
            fontSize={17}
            height={45}
            isActive={true}
            title="Cadastrar"
            color="white"
            bold={700}
          />
        </ContainerComponent>
      </ContainerComponent>
    </React.Fragment>
  );
};

export default ProductorRegister;
