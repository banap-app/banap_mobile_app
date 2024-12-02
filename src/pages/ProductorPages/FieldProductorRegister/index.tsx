import React, { useState } from "react"
import { Button } from "src/components/Button/Button"
import ContainerComponent from "src/components/Container/Container"
import FormInput from "src/components/FormInput/FormInput"
import SubtitleText from "src/components/SubTitleText/SubTitleText"
import { TitleText } from "src/components/TitleText/TitleText"
import { useNavigateToPage } from "src/utils/navigateToPage"
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps"
import { useSelector } from "react-redux"
import CustomPicker from "src/components/Picker/CustomPicker"

interface RootState {
  location: {
    latitude: number | null
    longitude: number | null
  }
}

const FieldProductorRegister: React.FC = () => {
  const [fieldName, setFieldName] = useState("")
  const [fieldDescription, setFieldDescription] = useState("")
  const [cultureOfField, setCultureOfField] = useState("")
  const [step, setStep] = useState(1) // Controle de qual parte do formulário deve ser exibida
  const [mapPoints, setMapPoints] = useState<{ lat: number; lng: number }[]>(
    []
  )
  const navigateToPage = useNavigateToPage()
  const { latitude, longitude } = useSelector(
    (state: RootState) => state.location
  )

  const handleContinue = () => {
    if (step === 1) {
      setStep(2)
    } else if (step === 2) {
      console.log("Formulário Completo!")
      console.log("Pontos selecionados:", mapPoints)
      setStep(3)
    } else if (step === 3) {
    }
  }

  // Função para capturar os pontos no mapa
  const handleMapPress = (e: any) => {
    const { coordinate } = e.nativeEvent

    // Verificar se as coordenadas são válidas
    if (
      coordinate &&
      typeof coordinate.latitude === "number" &&
      typeof coordinate.longitude === "number"
    ) {
      // Verifique se o ponto já foi adicionado
      const pointExists = mapPoints.some(
        (point) =>
          point.lat === coordinate.latitude &&
          point.lng === coordinate.longitude
      )
      if (!pointExists && mapPoints.length < 4) {
        setMapPoints((prevPoints) => [
          ...prevPoints,
          { lat: coordinate.latitude, lng: coordinate.longitude },
        ])
      } else {
        console.log("Maximo de poitns")
      }
    } else {
      console.error("Coordenadas inválidas", coordinate)
    }
  }

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
            text="Cadastrando seu Talhão..."
            align="left"
            fontFamily="Montserrat-Bold"
            letterSpacing={1}
            size={30}
            margins={[0, 0, 10, 0]}
            lineBreak={true}
            highlightTexts={[
              {
                text: "Talhão...",
                color: "green",
                fontFamily: "Montserrat-ExtraBold",
              },
            ]}
          />
        </ContainerComponent>

        {step === 1 && (
          <ContainerComponent
            width="100%"
            height="55%"
            display="flex"
            flexDirection="column"
            padding={[24, 5, 0, 5]}
            alignItems="start"
            justifyContent="flex-start"
          >
            <FormInput
              placeholder="Talhão 01"
              title="Identificação"
              titleAlign="left"
              titleSize={25}
              inputHeight="auto"
              lineWidth="97.5%"
              onChange={(value: string) => setFieldName(value)}
            />
          </ContainerComponent>
        )}

        {step === 2 && (
          <ContainerComponent
            width="100%"
            height="75%"
            display="flex"
            flexDirection="column"
            padding={[0, 5, 0, 5]}
            alignItems="start"
            justifyContent="space-around"
          >
            <ContainerComponent
              height="17.5%"
              display="flex"
              justifyContent="center"
            >
              <TitleText
                color="black"
                text="Localização"
                align="left"
                fontFamily="Montserrat-Bold"
                letterSpacing={1}
                size={22}
                margins={[0, 0, 8, 0]}
                lineBreak={true}
              />
              <SubtitleText
                align="left"
                color="black"
                letterSpacing={1}
                size={14}
                lineHeight={18}
              >
                Você deve clicar em pelo menos 3 pontos do mapa para que uma
                área seja delimitada, demonstrando assim, a localização do
                talhão.
              </SubtitleText>
            </ContainerComponent>

            <ContainerComponent
              flexWrap="wrap"
              overflow="hidden"
              display="flex"
              height="70%"
              width="100%"
              borderRadius={12}
              backgroundColor="green"
            >
              <MapView
                provider={PROVIDER_GOOGLE}
                style={{ width: "100%", height: "100%" }}
                initialRegion={{
                  latitude: latitude ? latitude : 0,
                  longitude: longitude ? longitude : 0,
                  latitudeDelta: 0.0922,
                  longitudeDelta: 0.0421,
                }}
                onPress={handleMapPress}
              >
                {mapPoints.map((point, index) => (
                  <Marker
                    pinColor="blue"
                    icon={require("../../../../assets/map-point.png")}
                    key={index}
                    coordinate={{
                      latitude: point.lat,
                      longitude: point.lng,
                    }}
                    title={`Ponto ${index + 1}`}
                    description={`Latitude: ${point.lat}, Longitude: ${point.lng}`}
                  />
                ))}
              </MapView>
            </ContainerComponent>
          </ContainerComponent>
        )}

        {step === 3 && (
          <ContainerComponent
            width="100%"
            height="60%"
            display="flex"
            flexDirection="column"
            padding={[2, 5, 0, 5]}
            alignItems="start"
            justifyContent="space-around"
          >
            <FormInput
              placeholder="Descreva seu talhão"
              title="Descrição"
              titleAlign="left"
              titleSize={26}
              fontFamily="Montserrat-Medium"
              inputHeight="auto"
              lineWidth="97.5%" // Vincula o estado do campo
              onChange={(value: string) => setFieldDescription(value)} // Atualiza o estado quando o valor mudar
            />
            <ContainerComponent
              padding={[20, 0, 0, 0]}
              borderRadius={20}
              width="100%"
              height="50%"
              display="flex"
              gap={1}
              justifyContent="flex-start"
            >
              <TitleText
                color="black"
                text="Cultura"
                align="left"
                fontFamily="Montserrat-Medium"
                letterSpacing={1}
                size={26}
                lineBreak={true}
              />
              <CustomPicker
                onSelect={setCultureOfField}
                initialValue="Escolha uma cultura"
                options={[
                  "Banana nanica",
                  "Banana prata",
                  "Banana da terra",
                  "Banana maça",
                  "Banana ouro",
                ]}
              />
            </ContainerComponent>
          </ContainerComponent>
        )}

        <ContainerComponent
          display="flex"
          alignItems="center"
          justifyContent={
            step === 1 ? "flex-end" : step === 2 ? "center" : "flex-end"
          }
          height="31.5%"
        >
          <Button
            backgroundColor="green"
            width={265}
            borderRadius={12}
            fontSize={17}
            height={45}
            isActive={true}
            title={
              step === 1 ? "Continuar" : step === 2 ? "Continuar" : "Cadastrar"
            }
            color="white"
            onPress={handleContinue}
          />
        </ContainerComponent>
      </ContainerComponent>
    </React.Fragment>
  )
}

export default FieldProductorRegister
