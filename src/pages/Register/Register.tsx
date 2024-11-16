import React from 'react';
import { Image, Text, View } from 'react-native';
import ContainerComponent from '../../components/Container/Container';
import { TitleText } from '../../components/TitleText/TitleText';
import SubtitleText from '../../components/SubTitleText/SubTitleText';
import { Button } from '../../components/Button/Button';
import { navigateToPage } from '../../utils/navigateToPage';
import ReturnButton from 'src/components/ReturnButton/ReturnButton';
import { AppBar } from 'src/components/AppBar/AppBar';

export const Register:React.FC = () =>{
    return (
        <React.Fragment>
      <ContainerComponent display="flex" alignItems="start" justifyContent="start" height="100%" width="100%">
        <AppBar/>
      </ContainerComponent>
    </React.Fragment>
        
    )
}