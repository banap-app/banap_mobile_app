import React, { useState } from "react"
import { Button } from "src/components/Button/Button"
import ContainerComponent from "src/components/Container/Container"
import FormInput from "src/components/FormInput/FormInput"
import SubtitleText from "src/components/SubTitleText/SubTitleText"
import { TitleText } from "src/components/TitleText/TitleText"
import { useNavigateToPage } from "src/utils/navigateToPage"
import ImageStyled from "src/components/Image/Image"

const StepTwo: React.FC = () => {
    const navigateToPage = useNavigateToPage();

    const handleContinue = () => {
        navigateToPage("StepThree");
    }

    const [button, setButton] = useState({
        button: {text: "Registrar cálculo", onPress: handleContinue}
    });

    const [texts, setTexts] = useState({
        title: {
          text: "Calculo de Calagem do Solo...",
          wordBreak: "Calagem",
          highlightTexts: { text: "Solo...", color: "green", fontFamily: "Montserrat-Bold" },
        },
        subtitle: "Esse é o resultado do cálculo de calagem que foi feito baseado nas informações disponibilzadas por você:",
    });

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
                justifyContent="space-around"
                >
                    <TitleText
                    color="black"
                    text={texts.title.text}
                    breakAfter={texts.title.wordBreak}
                    highlightTexts={[texts.title.highlightTexts]}
                    align="left"
                    fontFamily="Montserrat-Bold"
                    letterSpacing={1}
                    size={30}
                    margins={[0, 0, 10, 0]}
                    lineBreak={true}
                    />

                    <SubtitleText
                    align="justify"
                    color="black"
                    letterSpacing={1}
                    lineHeight={20}
                    size={16.5}
                    >
                        {texts.subtitle}
                    </SubtitleText>
                </ContainerComponent>

                <ContainerComponent
                width="100%"
                height="30%"
                padding={[0, 0, 0, 0]}
                display="flex"
                alignItems="center"
                justifyContent="center"
                gap={25}
                >
                    <ContainerComponent
                    width="50%"
                    height="auto"
                    display="flex"
                    alignItems="center"
                    backgroundColor="#1EA81E"
                    justifyContent="center"
                    gap={25}
                    >
                        <TitleText
                        color="white"
                        text="Quantidade de calcário necessária, para que se obtenha a saturação de bases desejada, é de:"
                        align="left"
                        fontFamily="Montserrat-Bold"
                        letterSpacing={1}
                        size={12}
                        margins={[13, 13, 13, 13]}
                        lineBreak={true}
                        />

                        <ImageStyled
                        sourceImage="Analyst"
                        positionLocations={[20, undefined, -45, undefined]}
                        pointerEvents="auto"
                        position="absolute"
                        objectFit="contain"
                        width={250}
                        height={250}
                        zIndex={0}
                        />
                    </ContainerComponent>
                </ContainerComponent>

                <ContainerComponent
                width="100%"
                height="auto"
                margin={[140, 0, 0, 0]}
                display="flex"
                alignItems="center"
                justifyContent="center"
                >
                    <ContainerComponent
                    width="148px"
                    height="38px"
                    display="flex"
                    alignItems="center"
                    backgroundColor="#1EA81E"
                    justifyContent="center"
                    gap={25}
                    >
                        <TitleText
                        color="white"
                        text="Calcário"
                        align="left"
                        fontFamily="Montserrat-Bold"
                        letterSpacing={1}
                        size={20}
                        lineBreak={true}
                        />
                    </ContainerComponent>

                    <ContainerComponent
                    width="148px"
                    height="38px"
                    display="flex"
                    alignItems="center"
                    backgroundColor="white"
                    justifyContent="center"
                    borderColor="#1EA81E"
                    gap={25}
                    >
                        <TitleText
                        color="#1EA81E"
                        text="6.550kg/h"
                        align="left"
                        fontFamily="Montserrat-Bold"
                        letterSpacing={1}
                        size={24}
                        lineBreak={true}
                        />
                    </ContainerComponent>
                </ContainerComponent>
                
                <ContainerComponent
                display="flex"
                alignItems="center"
                justifyContent="center"
                padding={[0, 0, 0, 0]}
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
                    onPress={button.button.onPress}
                    />
                </ContainerComponent>
            </ContainerComponent>
        </React.Fragment>
    );
};

export default StepTwo;