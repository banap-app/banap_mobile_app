import { ReactNode } from 'react';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 12px;
  background-color: white;
`;

const ResponsiveContainer = ({children}: any) => {
  return (
    <Container>
      {children}
    </Container>
  );
};

export default ResponsiveContainer;