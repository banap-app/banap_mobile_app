import React from 'react';
import { StatusBar, SafeAreaView, StyleSheet } from 'react-native';
import ContainerComponent from '../Container/Container';
import ImageStyled from '../Image/Image';
import ReturnButton from '../ReturnButton/ReturnButton';
import { useNavigation } from '@react-navigation/native';
import {AppBarTypes} from 'src/@types/appbar';
import { TitleText } from '../TitleText/TitleText';


export const AppBar:React.FC<{ typeOfAppBar: "userAppBar" | "DefaultAppBar" }> = ({typeOfAppBar}: AppBarTypes) => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" />
      {typeOfAppBar == "userAppBar" ? (
        <ContainerComponent
        display="flex"
        alignItems="start"
        justifyContent="start"
        width="100%"
        height="auto" // Altura da AppBar
      >
        <ImageStyled sourceImage="Lines" objectFit='fill' position="absolute" width={415} height={65} positionLocations={[0,0,-12,0]} />
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
      ): (
        <ContainerComponent
        display="flex"
        alignItems="start"
        justifyContent="start"
        width="100%"
        height="auto" // Altura da AppBar
      >
        <ImageStyled sourceImage="Lines" objectFit='fill' position="absolute" width={415} height={65} positionLocations={[0,0,-12,0]} />
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
        <TitleText text='aaaaaaa' />
      </ContainerComponent>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 0,
    width:"auto"
  },
});
