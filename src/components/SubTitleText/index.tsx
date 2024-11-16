import styled from 'styled-components'
import {SubtitleProps}  from './SubTitleText';
import { Text } from 'react-native'
import { Omit } from 'utility-types';

type SubTitlePropsStyled = Omit<SubtitleProps, 'text'>

const SubTitleTextStyled = styled(Text)<SubTitlePropsStyled>`
  font-size: ${({size}) => size}px;
  color: ${({color}) => color};
  font-weight: ${({bold}) => bold};
  text-align: ${({align}) => align? align: 'center'};
  letter-spacing: ${({letterSpacing}) => letterSpacing? letterSpacing: '0px'};
  line-height: ${({lineHeight}) => lineHeight? lineHeight : 'auto'};
  `

export default SubTitleTextStyled