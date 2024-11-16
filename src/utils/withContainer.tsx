import React from 'react';
import ContainerComponent from '../components/Container/Container';
import { ContainerProps } from 'src/components/Container/Container';

const withContainer = (Component: React.FC) => {
  return (props: ContainerProps) => (
    <ContainerComponent
      display="flex"
      backgroundColor="white"
      alignItems="center"
      justifyContent="space-around"
      height="100%"
      width="100%"
    >
      <Component {...props} />
    </ContainerComponent>
  );
};

export default withContainer;
