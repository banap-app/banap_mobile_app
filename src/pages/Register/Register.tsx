import React from "react";
import { Image, Text, View } from "react-native";
import ContainerComponent from "../../components/Container/Container";
import { TitleText } from "../../components/TitleText/TitleText";
import SubtitleText from "../../components/SubTitleText/SubTitleText";
import { Button } from "../../components/Button/Button";
import { navigateToPage } from "../../utils/navigateToPage";
import ReturnButton from "src/components/ReturnButton/ReturnButton";
import { AppBar } from "src/components/AppBar/AppBar";
import ImageStyled from "src/components/Image/Image";

export const Register: React.FC = () => {
  return (
    <React.Fragment>
      <AppBar />
      <ContainerComponent
        display="flex"
        alignItems="start"
        justifyContent="start"
        height="90%"
        width="100%"
      >
        <ContainerComponent
          width="90%"
          padding={[0, 0, 0, 25]}
          display="flex"
          backgroundColor=""
          alignItems="start"
          justifyContent="start"
          gap={15}
        >
          <TitleText
            color="black"
            text="Antes de começar a utilizar o Banap..."
            align="justify"
            bold={900}
            letterSpacing={1.2}
            size={32.3}
            margins={[0, 0, 0, 0]}
            lineBreak={true}
            breakAfter="começar"
            highlightTexts={[{ text: "Banap...", color: "green", bold: 900 }]}
          />

          <SubtitleText
            align="justify"
            color="black"
            bold={300}
            letterSpacing={1}
            lineHeight={20}
            size={16}
          >
            Precisamos saber para qual finalidade nosso sistema será usado.
          </SubtitleText>
        </ContainerComponent>
        <ContainerComponent
          width="100%"
          display="flex"
          alignItems="center"
          justifyContent="center"
          height="20%"
        >
          <TitleText
            text="Você é um produtor ou engenheiro?"
            size={20}
            letterSpacing={1.3}
            lineBreak={true}
            breakAfter="produtor"
            highlightTexts={[
              { text: "produtor", color: "green", bold: 900 },
              { text: "engenheiro", color: "darkgreen", bold: 900 },
            ]}
          />
        </ContainerComponent>

        <ContainerComponent
          flexDirection="row"
          width="100%"
          display="flex"
          alignItems="center"
          justifyContent="space-evenly"
          backgroundColor=""
          height="55%"
        >
          <ContainerComponent
            display="flex"
            alignItems="center"
            justifyContent="center"
            width="auto"
          >
            <ImageStyled
              sourceImage="productor"
          
              positionLocations={[-120, undefined, undefined, undefined]}
              position="absolute"
              width={100}
              height={200}
              zIndex={1}
            />
            <Button
              backgroundColor="green"
              borderRadius={25}
              color="white"
              height={120}
              width={120}
              isActive={true}
              onPress={navigateToPage('ProductorRegister')}
            />
          </ContainerComponent>

          <SubtitleText
            align="center"
            color="black"
            lineHeight={30}
            size={22}
            bold={100}
          >
            ou
          </SubtitleText>

          <ContainerComponent 
          display="flex"
          alignItems="center"
          justifyContent="center"
          width="auto"
          >
          <ImageStyled
              sourceImage="Enginner"
              positionLocations={[-120, undefined, -70, undefined]}
              position="absolute"
              width={200}
              height={200}
              zIndex={1}
            />
            <Button
              backgroundColor="darkgreen"
              borderRadius={25}
              color="white"
              height={120}
              width={120}
              isActive={true}
              onPress={navigateToPage('EnginnerRegister')}
            />
          </ContainerComponent>
        </ContainerComponent>
      </ContainerComponent>
    </React.Fragment>
  );
};
