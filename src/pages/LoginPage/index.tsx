import React, { useState } from "react";
import { Text } from "react-native";
import { Button } from "src/components/Button/Button";
import ContainerComponent from "src/components/Container/Container";
import FormInput from "src/components/FormInput/FormInput";
import ImageStyled from "src/components/Image/Image";
import SubtitleText from "src/components/SubTitleText/SubTitleText";
import { TitleText } from "src/components/TitleText/TitleText";
import createApi from "src/utils/api";
import { useNavigateToPage } from "src/utils/navigateToPage";

export const LoginPage: React.FC = () => {
  const navigateToPage = useNavigateToPage()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const handleLogin = async() =>{
    const api = createApi("")
    try {
      const response = await api({
        method: 'post',
        route: '/user/create',
        data: {
          name,
          email,
          password,
          active: true
        },
      });
    } catch(error) {
      console.error('Error ao tentar fazer login', error);
    }
  }
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
            size={19.5}
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
            onChange={(value) => setEmail(value)}
            lineHeight={0.55}
          />

          <FormInput
            placeholder="Senha@123"
            gap={5}
            onChange={(value)=> setPassword(value)}
            title="Senha"
            titleAlign="left"
            titleSize={20}
            inputHeight="auto"
            lineHeight={0.55}
          />
          <ContainerComponent alignItems="right">

          <SubtitleText align="right" fontFamily="Montserrat-Medium" color="green" size={12} letterSpacing={1} lineHeight={14}>Esqueceu a sua senha?</SubtitleText>
          </ContainerComponent>
          <Button title="Entrar" align="center" fontFamily="Montserrat-Medium" alignItems="center" display="flex" backgroundColor="green" onPress={()=>handleLogin} borderRadius={10} color="white" isActive={true} width={255} height={45}/>
          <TitleText align="center" color="black" fontFamily="Montserrat-Regular" size={12.65} letterSpacing={1} highlightTexts={[{ text: "Crie uma.", color: "green", fontFamily:"Montserrat-Medium" }]} text="Não possui uma conta? Crie uma." />
        </ContainerComponent>
      </ContainerComponent>
    </React.Fragment>
  );
};
