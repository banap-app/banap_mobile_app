import styled from 'styled-components'
import {TitleProps}  from './TitleText';
import { Text } from 'react-native'
import { Omit } from 'utility-types';

type TitlePropsStyled = Omit<TitleProps, 'text'>

const TitleTextStyled = styled(Text)<TitlePropsStyled>`
  font-size: ${({size}) => size}px;
  color: ${({color}) => color};
  font-weight: ${({bold}) => bold};
  text-align: ${({align}) => align? align: 'center'};
  letter-spacing: ${({letterSpacing}) => letterSpacing? letterSpacing: '0px'};
  `

export default TitleTextStyled