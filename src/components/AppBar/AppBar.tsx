import React from 'react';
import ReturnButton from '../ReturnButton/ReturnButton';
import ContainerComponent from '../Container/Container';
import ImageStyled from '../Image/Image';
import { useNavigation } from '@react-navigation/native';


export const AppBar:React.FC = () => {
    const navigation = useNavigation()
    return (
        <ContainerComponent display='flex' alignItems='start' justifyContent='center' width="100%" height="30%">
            <ImageStyled sourceImage="Lines" position='absolute' width={410}/>
            <ReturnButton backgroundColor='transparent' borderRadius={10} color='black' height={60} width={60} isActive={true} fontSize={23} title='a'  onPress={()=>navigation.goBack()} />
        </ContainerComponent>

    )
}