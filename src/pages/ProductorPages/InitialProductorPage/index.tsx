import React from "react";
import { Button } from "src/components/Button/Button";
import ContainerComponent from "src/components/Container/Container";
import SubtitleText from "src/components/SubTitleText/SubTitleText";
import { TitleText } from "src/components/TitleText/TitleText";
import { navigateToPage } from "src/utils/navigateToPage";

export const InitialProductorPage: React.FC = () => {
  const hasProperty = false;

  return (
    <React.Fragment>
      <ContainerComponent
        display="flex"
        height="75.5%"
        alignItems="center"
        justifyContent="center"
      >
        {hasProperty ? (
          <SubtitleText
            size={10}
            bold={500}
            align="center"
            color="green"
            letterSpacing={1}
            lineHeight={15}
          >
            a
          </SubtitleText>
        ) : (
          <ContainerComponent
            display="flex"
            alignItems="center"
            justifyContent="space-evenly"
            height="30%"
          >
            <TitleText
              size={14}
              bold={600}
              letterSpacing={1}
              text="Ainda não há uma
propriedade cadastrada!"
              lineBreak={true}
              breakAfter="uma"
              align="center"
              color="black"
            />

            <Button
              backgroundColor="green"
              title="Nova Propriedade"
              borderRadius={12}
              color="white"
              isActive={true}
              height={50}
              width={200}
              onPress={navigateToPage("RegisterProperty")}
            />
          </ContainerComponent>
        )}
      </ContainerComponent>
    </React.Fragment>
  );
};
