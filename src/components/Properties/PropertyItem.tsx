import React from "react";
import { FlatList, Image, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import AddButton from "../AddButton"; // Seu componente AddButton
import SubtitleText from "../SubTitleText/SubTitleText";
import { useNavigateToPage } from 'src/utils/navigateToPage';

type PropertyItem = {
  id: string;
  name: string;
  imageUrl: string;
};

type PropertyListProps = {
  data: PropertyItem[] | null; // Pode ser null
  onPressItem?: (id: string) => void;
};

export const PropertyList: React.FC<PropertyListProps> = ({
  data,
  onPressItem,
}) => {
  const navigateToPage = useNavigateToPage()

  if (!data || data.length === 0) {
    return <AddButton onPress={()=>navigateToPage("LoginPage")}/>;
  }

  // Adiciona o AddButton como o último item da lista
  const listData = [...data, { id: 'add-button', name: 'Add', imageUrl: '' }];

  const renderItem = ({ item }: { item: PropertyItem }) => {
    if (item.id === 'add-button') {
      return (
        <AddButton onPress={()=> navigateToPage("FieldProductorRegister")}/>
      );
    }

    return (
      <ItemContainer onPress={() => onPressItem && onPressItem(item.id)}>
        <ItemImage source={{ uri: item.imageUrl }} resizeMode="cover" />
        <SubtitleText align="center" color="white" backgroundColor="green" size={14} letterSpacing={1} lineHeight={26}>
          {item.name}
        </SubtitleText>
      </ItemContainer>
    );
  };

  return (
    <FlatList
      contentContainerStyle={{
        flexDirection: 'row', // Scroll horizontal
        justifyContent: 'space-around',
        width: "auto",
        gap: 24,
      }}
      data={listData} // Passa o listData com o AddButton
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      horizontal={true}
    />
  );
};

const ItemContainer = styled(TouchableOpacity)`
  border-radius: 12px;
  overflow: hidden;
  width: 120px;
  height: auto;
`;

const ItemImage = styled(Image)`
  object-fit: cover;
  width: 100%;
  flex: 1;
`;
