import React from "react";
import { Text } from "react-native";
import { AppBar } from "src/components/AppBar/AppBar";
import { Button } from "src/components/Button/Button";
import ContainerComponent from "src/components/Container/Container";
import FormInput from "src/components/FormInput/FormInput";
import SubtitleText from "src/components/SubTitleText/SubTitleText";
import { TitleText } from "src/components/TitleText/TitleText";
import { useNavigateToPage } from "src/utils/navigateToPage";

const ProductorRegister: React.FC = () => {
  const navigateToPage = useNavigateToPage();
  return (
    <React.Fragment>
      <ContainerComponent display="flex" alignItems="center" justifyContent="start"  width="100%" height="80%">
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
            text="Olá, Produtor!
            Antes de tudo..."
            fontFamily="Montserrat-Bold"
            align="justify"
            letterSpacing={1}
            size={28}
            margins={[0, 0, 8, 0]}
            lineBreak={true}
            breakAfter="Produtor!"
            highlightTexts={[{ text: "Produtor!", color: "green", fontFamily:"Montserrat-Bold"}]}
          />

          <SubtitleText
            align="left"
            color="black"
            fontFamily="Montserrat-SemiBold"
            letterSpacing={1}
            lineHeight={20}
            size={16.5}
          >
            Um cadastro deve ser realizado!
          </SubtitleText>

          <SubtitleText
            align="justify"
            color="black"
            
            letterSpacing={1}
            lineHeight={18}
            size={16.5}
          >
            Precisamos das suas informações, nos diga seu...
          </SubtitleText>
        </ContainerComponent>

        <ContainerComponent
          width="100%"
          height="60%"
          display="flex"
          flexDirection="column"
          padding={[30, 5, 0, 5]}
          alignItems="start"
          justifyContent="space-evenly"
          
        >
          <FormInput
            placeholder="Exemplo"
            title="Nome"
            titleAlign="left"
            titleSize={22}
            inputHeight="auto"
          />
          <FormInput
            placeholder="exemplo@exemplo.com"
            title="Email"
            titleAlign="left"
            titleSize={22}
            inputHeight="auto"
          />
          <FormInput
            placeholder="aa"
            title="Senha"
            titleAlign="left"
            titleSize={22}
            
            inputHeight="auto"
          />
        </ContainerComponent>

        <ContainerComponent display="flex" alignItems="center" justifyContent="center" height="32%">
          <Button
            backgroundColor="green"
            width={265}
            borderRadius={12}
            fontSize={17}
            height={45}
            isActive={true}
            title="Cadastrar"
            color="white"
            onPress={()=>navigateToPage("LoginPage")}
          />
        </ContainerComponent>
      </ContainerComponent>
    </React.Fragment>
  );
};

export default ProductorRegister;
