import { Image, Text } from "react-native";
import ContainerComponent from "../../components/Container/Container";
import React from "react";
import { TitleText } from "../../components/TitleText/TitleText";
import SubtitleText from "../../components/SubTitleText/SubTitleText";
import { Button } from "../../components/Button/Button";
import { navigateToPage } from "../../utils/navigateToPage";

const Login: React.FC = () => {
  return (
    <React.Fragment>
      
        
        <ContainerComponent
          display="flex"
          alignItems="center"
          justifyContent="space-around"
          height='45%'
          width="80%"

        >
        
        <Image source={require('@assets/initial-photo.png')} />

          <ContainerComponent alignItems="center" justifyContent="space-evenly" height="45%">
          <TitleText text="Pronto para começar?" align="center" bold={900} color="green" size={20.5} letterSpacing={1} />
          <SubtitleText align="center" color="green" lineHeight={21} letterSpacing={1.75} bold={300} size={12.5}>
            Este pequeno ‘tutorial’ é apenas uma curta demonstração do que nosso
            sistema tem a oferecer.
            Ainda há muito mais por vir!
          </SubtitleText>
          </ContainerComponent>
          
        </ContainerComponent>

        <ContainerComponent
          display="flex"
          height={110}
          width="100%"
          justifyContent="space-between"
          alignItems="center"
        >
         <Button backgroundColor="green" title="Cadastrar-se" borderRadius={10} color="white" height={41.5} onPress={navigateToPage('Register')} width={250.5} isActive={true}/>   
         <Button backgroundColor="white" border="1px green" title="Logar" borderRadius={10} color="green" height={41.5} width={250.5} isActive={true}/>   
        </ContainerComponent>

    </React.Fragment>
  );
};

export default Login;
