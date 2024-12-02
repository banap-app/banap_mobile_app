import React from "react";
import { Button } from "src/components/Button/Button";
import ContainerComponent from "src/components/Container/Container";
import HomeCards from "src/components/HomeCards";
import Properties from "src/components/Properties/Properties";
import { TitleText } from "src/components/TitleText/TitleText";
import { useNavigateToPage } from "src/utils/navigateToPage";

export const InitialProductorPage: React.FC = () => {
  const navigateToPage = useNavigateToPage();
  const hasProperty = true;
  const data = [
    { id: "1", name: "Item 1", imageUrl: "https://via.placeholder.com/150" },
    { id: "2", name: "Item 2", imageUrl: "https://via.placeholder.com/150" },
    { id: "3", name: "Item 3", imageUrl: "https://via.placeholder.com/150" },
  ];

  return (
    <React.Fragment>
      <ContainerComponent
        display="flex"
        height="70.5%"
        alignItems="center"
        justifyContent="space-evenly"
      >
        {hasProperty ? (
          <React.Fragment>
          <HomeCards />
         <Properties properties={data}/>
         </React.Fragment>
        ) : (
          <ContainerComponent
            display="flex"
            alignItems="center"
            justifyContent="space-evenly"
            height="30%"
          >
            <TitleText
              size={14}
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
              onPress={()=>navigateToPage("RegisterProperty")}
            />
          </ContainerComponent>
        )}
      </ContainerComponent>
    </React.Fragment>
  );
};
