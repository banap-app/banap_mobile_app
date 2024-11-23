import React from "react";
import { StatusBar, SafeAreaView, StyleSheet } from "react-native";
import ContainerComponent from "../Container/Container";
import ImageStyled from "../Image/Image";
import ReturnButton from "../ReturnButton/ReturnButton";
import { useNavigation } from "@react-navigation/native";
import { AppBarTypes } from "src/@types/appbar";
import { TitleText } from "../TitleText/TitleText";
import { ProfilePhoto } from "../ProfilePhoto/ProfilePhoto";

export const AppBar: React.FC<{
  typeOfAppBar: "userAppBar" | "defaultAppBar";
}> = ({ typeOfAppBar }: AppBarTypes) => {
  const navigation = useNavigation();

  const nameProductor = `Asher!`;
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" />
      {typeOfAppBar == "defaultAppBar" ? (
        <ContainerComponent
          display="flex"
          alignItems="start"
          justifyContent="start"
          width="100%"
          height="auto" // Altura da AppBar
        >
          <ImageStyled
            sourceImage="Lines"
            objectFit="fill"
            position="absolute"
            width={415}
            height={65}
            positionLocations={[0, 0, -12, 0]}
          />
          <ReturnButton
            backgroundColor="transparent"
            borderRadius={10}
            color="black"
            height={60}
            width={30}
            isActive={true}
            fontSize={23}
            title="a"
            onPress={() => navigation.goBack()}
          />
        </ContainerComponent>
      ) : (
        <ContainerComponent
          display="flex"
          alignItems="center"
          justifyContent="space-around"
          gap={20}
          padding={[16, 0, 0, 0]}
          width="100%"
          height="auto" // Altura da AppBar
        >
          <ContainerComponent display="flex" alignItems="center" justifyContent="space-between" width="90%" flexDirection="row">
            <TitleText
              text={`Olá ${nameProductor}`}
              align="left"
              highlightTexts={[
                { text: nameProductor, color: "green", bold: 500 },
              ]}
              
            />

            <ContainerComponent display="flex" width="auto"  alignItems="center" justifyContent="space-around" gap={10} flexDirection="row">
            <TitleText
              text={`Olá ${nameProductor}`}
              align="left"
              highlightTexts={[
                { text: nameProductor, color: "green", bold: 500 },
              ]}
            />

              <ProfilePhoto borderColor="red" borderWidth={0.9} scheme="rounded" height={42.5} width={42.5} sourceImageUrl="@assets\banap-logo.png"/>
            </ContainerComponent>
          </ContainerComponent>
          <ImageStyled
            sourceImage="LinesAppBar"
            objectFit="fill"
            position="relative"
            width={400}
            height={35}
          />
        </ContainerComponent>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 0,
    width: "auto",
  },
});
