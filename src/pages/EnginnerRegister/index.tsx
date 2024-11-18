import React, { useState } from "react";
import { Text } from "react-native";
import { AppBar } from "src/components/AppBar/AppBar";
import { Button } from "src/components/Button/Button";
import ContainerComponent from "src/components/Container/Container";
import FormInput from "src/components/FormInput/FormInput";
import SubtitleText from "src/components/SubTitleText/SubTitleText";
import { TitleText } from "src/components/TitleText/TitleText";
import { navigateToPage } from "src/utils/navigateToPage";

const EnginnerRegister: React.FC = () => {

  const handleSubmit = () => {
    // Implement your form submission logic here
    // For example, you can use the `navigateToPage` function to navigate to the next page
    navigateToPage("LoginPage");
  };
  const handleContinue = () => {
    setTexts({
      title: {
        text: "Precisamos dos seus documentos...",
        wordBreak: "dos",
        highlightTexts: { text: "documentos...", color: "green", bold: 900 },
      },
      subtitle1: "Agora falta pouco!",
      subtitle2: "Só precisamos de uma confirmação de seus dados...",
      
    });
    setButton({
        button: {text: "Cadastrar", onPress: handleSubmit}
  
    })
    setShowInputs(false);
  };
  const [texts, setTexts] = useState({
    title: {
      text: "Olá, Engenheiro! Antes de tudo...",
      wordBreak: "Engenheiro!",
      highlightTexts: { text: "Engenheiro!", color: "green", bold: 900 },
    },
    subtitle1: "Um cadastro deve ser realizado!",
    subtitle2: "Precisamos das suas informações, nos diga seu...",
   
  });

  const [button, setButton] = useState({
    button: {text: "Continuar", onPress: handleContinue}
  })

  const [showInputs, setShowInputs] = useState(true);

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
            text={texts.title.text}
            align="justify"
            bold={900}
            letterSpacing={1.2}
            size={32.3}
            margins={[0, 0, 10, 0]}
            lineBreak={true}
            breakAfter={texts.title.wordBreak}
            highlightTexts={[texts.title.highlightTexts]}
          />

          <SubtitleText
            align="justify"
            color="black"
            bold={700}
            letterSpacing={1}
            lineHeight={20}
            size={16.5}
          >
            {texts.subtitle1}
          </SubtitleText>

          <SubtitleText
            align="justify"
            color="black"
            bold={300}
            letterSpacing={1}
            lineHeight={20}
            size={16.5}
          >
            {texts.subtitle2}
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
          {showInputs ? (
            <>
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
                placeholder="Senha@1"
                title="Senha"
                titleAlign="left"
                titleSize={25}
                inputHeight="auto"
              />
            </>
          ) : (
            <FormInput
              placeholder="123456789"
              title="CREA"
              titleAlign="left"
              titleSize={25}
              inputHeight="auto"
            />
          )}
        </ContainerComponent>
        <ContainerComponent
          display="flex"
          alignItems="center"
          justifyContent="center"
          height="40%"
        >
          <Button
            backgroundColor="green"
            width={270}
            borderRadius={12}
            fontSize={17}
            height={45}
            isActive={true}
            title={button.button.text}
            color="white"
            bold={700}
            onPress={button.button.onPress}
          />
        </ContainerComponent>
      </ContainerComponent>
    </React.Fragment>
  );
};

export default EnginnerRegister;
