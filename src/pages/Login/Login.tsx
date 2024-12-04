import { Image, Text } from "react-native";
import ContainerComponent from "../../components/Container/Container";
import React from "react";
import { TitleText } from "../../components/TitleText/TitleText";
import SubtitleText from "../../components/SubTitleText/SubTitleText";
import { Button } from "../../components/Button/Button";
import { useNavigateToPage } from "../../utils/navigateToPage";

const Login: React.FC = () => {
  const navigateToPage = useNavigateToPage();
  return (
    <React.Fragment>
      
        
        <ContainerComponent
          display="flex"
          alignItems="center"
          justifyContent="center"
          backgroundColor=""
          flexAll={0}
          height='70%'
          width="100%"

        >
        
        <Image source={require('@assets/initial-photo.png')} />

          <ContainerComponent alignItems="center" justifyContent="space-evenly" height="40%">
         <ContainerComponent display="flex" alignItems="center" gap={18} width="90%">
         <TitleText text="Pronto para começar?" fontFamily="Montserrat-ExtraBold" align="center" color="green" size={20.5} letterSpacing={1} />
          <SubtitleText fontFamily="Montserrat-Medium" align="center" color="green" lineHeight={21} letterSpacing={1.75} size={12.5} lineBreak={true} breakAfter="oferecer.">
            Este pequeno ‘tutorial’ é apenas uma curta demonstração do que nosso
            sistema tem a oferecer.
            Ainda há muito mais por vir!
          </SubtitleText>
         </ContainerComponent>
          </ContainerComponent>
          
        </ContainerComponent>

        <ContainerComponent
          display="flex"
          height="20%"
          width="100%"
          justifyContent="space-evenly"
          alignItems="center"
        >
         <Button backgroundColor="green" title="Cadastrar-se" borderRadius={10} color="white" height={41.5} onPress={()=>navigateToPage('Register')} width={250.5} isActive={true}/>   
         <Button backgroundColor="white" border="1px green" title="Logar" onPress={()=>navigateToPage('Register')} borderRadius={10} color="green" height={41.5} width={250.5} isActive={true}/>   
        </ContainerComponent>

    </React.Fragment>
  );
};

export default Login;
