import React, { useState } from "react"
import { Button } from "src/components/Button/Button"
import ContainerComponent from "src/components/Container/Container"
import FormInput from "src/components/FormInput/FormInput"
import SubtitleText from "src/components/SubTitleText/SubTitleText"
import { TitleText } from "src/components/TitleText/TitleText"
import { useNavigateToPage } from "src/utils/navigateToPage"
import CustomPicker from "src/components/Picker/CustomPicker"

const StepThree: React.FC = () => {
    const navigateToPage = useNavigateToPage();

    const [expectedProductivity, setExpectedProductivity] = useState("")

    const handleContinue = () => {
        navigateToPage("StepFour");
    }

    const [button, setButton] = useState({
        button: {text: "Calcular", onPress: handleContinue}
    });

    const [texts, setTexts] = useState({
        title: {
          text: "Cálculo de Recomendação de Adubação de Solo...",
          highlightTexts: { text: "Solo...", color: "green", fontFamily: "Montserrat-Bold" },
        },
        subtitle: "Precisamos que você nos informe o nível de nutrientes do seu solo! Depois, nos diga a produtividade que deseja obter...",
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
                height="40%"
                padding={[30, 0, 0, 0]}
                display="flex"
                backgroundColor=""
                alignItems="start"
                justifyContent="space-between"
                gap={25}
                >
                    <FormInput
                    title="Fósforo (P)"
                    placeholder="Exemplo mg dm⁻³"
                    titleAlign="left"
                    titleSize={25}
                    inputHeight="auto"
                    />

                    <FormInput
                    title="Potássio (K)"
                    placeholder="Exemplo mmol dm⁻³"
                    titleAlign="left"
                    titleSize={25}
                    inputHeight="auto"
                    />

                    <CustomPicker
                    onSelect={setExpectedProductivity}
                    initialValue="Qual é a produtividade esperada?"
                    options={[
                        "Menor que 20%",
                        "Entre 20 e 30%",
                        "Entre 30 e 40%",
                        "Entre 40 e 50%",
                        "Maior que 50%",
                    ]}
                    />
                </ContainerComponent>  

                <ContainerComponent
                display="flex"
                alignItems="center"
                justifyContent="center"
                padding={[200, 0, 0, 0]}
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

export default StepThree