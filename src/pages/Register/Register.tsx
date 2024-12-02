import React from "react";
import { Image, Text, View } from "react-native";
import ContainerComponent from "../../components/Container/Container";
import { TitleText } from "../../components/TitleText/TitleText";
import SubtitleText from "../../components/SubTitleText/SubTitleText";
import { Button } from "../../components/Button/Button";
import { useNavigateToPage } from "../../utils/navigateToPage";
import ReturnButton from "src/components/ReturnButton/ReturnButton";
import { AppBar } from "src/components/AppBar/AppBar";
import ImageStyled from "src/components/Image/Image";

export const Register: React.FC = () => {

  const navigateToPage = useNavigateToPage();
  return (
    <React.Fragment>
      <ContainerComponent
        display="flex"
        alignItems="start"
        justifyContent="start"
        height="80%"
        width="100%"
      >
        <ContainerComponent
          width="100%"
          padding={[0, 0, 0, 5]}
          display="flex"
          height="auto"
          backgroundColor=""
          alignItems="start"
          justifyContent="start"
          gap={15}
        >
          <TitleText
            color="black"
            text="Antes de começar a utilizar o Banap..."
            align="justify"
            fontFamily="Montserrat-Bold"
            letterSpacing={1.2}
            size={28}
            margins={[20, 0, 0, 0]}
            lineBreak={true}
            breakAfter="começar"
            highlightTexts={[{ text: "Banap...", color: "green",  fontFamily: "Montserrat-Bold"  }]}
          />

          <SubtitleText
            align="justify"
            color="black"
           
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
            fontFamily="Montserrat-Light"
            size={20}
            letterSpacing={1.3}
            lineBreak={true}
            breakAfter="produtor"
            highlightTexts={[
              { text: "produtor", color: "green", fontFamily: "Montserrat-SemiBold" },
              { text: "engenheiro", color: "darkgreen",  fontFamily: "Montserrat-SemiBold" },
            ]}
          />
        </ContainerComponent>

        <ContainerComponent
          flexDirection="row"
          width="100%"
          display="flex"
          alignItems="center"
          justifyContent="space-evenly"
        
          height="70%"
        >
          <ContainerComponent
            display="flex"
            alignItems="center"
            justifyContent="center"
            width="auto"
          >
            <ImageStyled
              sourceImage="productor"
              positionLocations={[-120, undefined, 15, undefined]}
              pointerEvents="auto"
              position="absolute"
              objectFit="contain"
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
              onPress={()=>navigateToPage("ProductorRegister")}
            />
          </ContainerComponent>

          <SubtitleText
            align="center"
            color="black"
            lineHeight={30}
            size={22}
            fontFamily="Montserrat-Light"
          >
            ou
          </SubtitleText>

          <ContainerComponent
            display="flex"
            alignItems="center"
            justifyContent="center"
            width="auto"
            height="auto"
          >
            <ImageStyled
              sourceImage="Enginner"
              positionLocations={[-120, undefined, -70, undefined]}
              position="absolute"
              objectFit="contain"
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
              onPress={()=>navigateToPage("EnginnerRegister")}
            />
          </ContainerComponent>
        </ContainerComponent>
      </ContainerComponent>
    </React.Fragment>
  );
};
