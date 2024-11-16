import React from 'react';
import ReturnButton from '../ReturnButton/ReturnButton';
import ContainerComponent from '../Container/Container';
import ImageStyled from '../Image/Image';
import { useNavigation } from '@react-navigation/native';


export const AppBar:React.FC = () => {
    const navigation = useNavigation()
    return (
        <ContainerComponent display='flex' alignItems='start' justifyContent='center' width="100%" backgroundColor='' height="20%">
            <ImageStyled sourceImage="C:\Users\asher.novelli\banap_mobile_native\assets\Lines.png" position='absolute' width={410}/>
            <ReturnButton backgroundColor='transparent' borderRadius={10} color='black' height={40} width={40} isActive={true} fontSize={23} title='a'  onPress={()=>navigation.goBack()} />
        </ContainerComponent>

    )
}