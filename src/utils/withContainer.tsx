import React from "react";
import ContainerComponent from "../components/Container/Container";
import { ContainerProps } from "src/components/Container/Container";
import { AppBar } from "src/components/AppBar/AppBar";
import ResponsiveContainer from "src/components/Container/ResponsiveContainer";
import { AppBarProps } from "src/@types/appbar";

// Tipagem genérica para suportar componentes com diferentes props
const withContainer = <P extends Record<string, unknown>>(
  Component: React.ComponentType<P>,
  {typeOfAppBar, appBarShow}: AppBarProps,
  
) => {
  return (props: P & ContainerProps) => (
    
    <>
  
    <ResponsiveContainer
    
    >
      
     
      {appBarShow && (
        <AppBar typeOfAppBar={typeOfAppBar}/>
      )}
      <Component {...props} />
    </ResponsiveContainer>
    </>
  );
};

export default withContainer;
