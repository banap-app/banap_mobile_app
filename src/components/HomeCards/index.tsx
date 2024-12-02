import React, { useEffect, useState } from "react";
import ContainerComponent from "../Container/Container";
import { TitleText } from "../TitleText/TitleText";
import SubtitleText from "../SubTitleText/SubTitleText";
import * as Location from "expo-location";
import { useDispatch } from "react-redux";
import { updateLocation } from "../../redux/store/location/locationActions"; 
import { saveLocationToStorage } from "src/redux/store/location/locationStorage";

const API_KEY = "6490c96934ca4f0eca95a5c2adb621cb";

const getFormattedDateTime = () => {
  const now = new Date();

  const daysOfWeek = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
  ];

  const dayName = daysOfWeek[now.getDay()];
  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");

  return `${dayName}, ${hours}:${minutes}`;
};

const HomeCards: React.FC = () => {
  const dispatch = useDispatch();
  const [currentTime, setCurrentTime] = useState(getFormattedDateTime());
  const [temperature, setTemperature] = useState<string>("Carregando...");
  const [condition, setCondition] = useState<string>("Sol"); // Novo estado para condição climática
  const [icon, setIcon] = useState<string>("☀️"); // Ícone para o clima
  const [location, setLocation] = useState<{ lat: number; lon: number } | null>(
    null
  );

  useEffect(() => {
    // Solicitar permissão e obter a localização do usuário
    const getUserLocation = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status === "granted") {
        const userLocation = await Location.getCurrentPositionAsync({});
        const { latitude, longitude } = userLocation.coords;

        dispatch(updateLocation(latitude, longitude));
        saveLocationToStorage(latitude, longitude);
        setLocation({ lat: latitude, lon: longitude });
      } else {
        console.error("Permissão de localização não concedida.");
      }
    };

    getUserLocation();

    const intervalId = setInterval(() => {
      setCurrentTime(getFormattedDateTime());
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (location) {
      const { lat, lon } = location;
      const fetchTemperature = async () => {
        try {
          // Realizar requisição para OpenWeather API
          const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
          );
          const data = await response.json();
          const temp = `${data.main.temp}°C`; // A temperatura em Celsius
          const weatherCondition = data.weather[0].main; // Condição climática
          let newCondition = "Sol";
          let newIcon = "☀️";

          // Determina o texto e ícone com base na condição climática
          if (weatherCondition === "Rain") {
            newCondition = "Chuva";
            newIcon = "🌧️";
          } else if (weatherCondition === "Clouds") {
            newCondition = "Nuvens";
            newIcon = "☁️";
          } else if (weatherCondition === "Snow") {
            newCondition = "Neve";
            newIcon = "❄️";
          } else if (weatherCondition === "Thunderstorm") {
            newCondition = "Tempestade";
            newIcon = "⚡";
          } else if (weatherCondition === "Clear") {
            newCondition = "Sol";
            newIcon = "☀️";
          }

          setTemperature(temp);
          setCondition(newCondition);
          setIcon(newIcon); // Atualiza o ícone
        } catch (error) {
          console.error("Erro ao consultar a API de clima: ", error);
        }
      };

      fetchTemperature();
    }
  }, [location]); // Requisita o clima sempre que a localização mudar

  return (
    <ContainerComponent
      borderRadius={21}
      borderColor="lightgray"
      borderStyle="solid"
      borderWidth={0.7}
      width="90%"
      display="flex"
      alignItems="center"
      justifyContent="center"
      height="22.5%"
      padding={[0, 0, 0, 8]}
    >
      <ContainerComponent
        width="85%"
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        padding={[0, 30, 0, 0]}
      >
        <ContainerComponent display="flex" width="auto">
          <TitleText
            color="green"
            fontFamily="Montserrat-Black"
            letterSpacing={1}
            size={12}
            text={temperature}
            align="left"
          />
          <SubtitleText
            align="left"
            color="green"
            letterSpacing={1}
            size={11}
            lineHeight={22}
            fontFamily="Montserrat-Regular"
          >
            {currentTime}
          </SubtitleText>

          <SubtitleText
            align="left"
            color="green"
            letterSpacing={1}
            size={11}
            lineHeight={22}
            fontFamily="Montserrat-Regular"
          >
            {condition}
          </SubtitleText>
        </ContainerComponent>
        <TitleText
          color="green"
          fontFamily="Montserrat-Black"
          letterSpacing={1}
          size={42}
          text={`${icon}`}
          align="center"
        />
      </ContainerComponent>
    </ContainerComponent>
  );
};

export default HomeCards;
