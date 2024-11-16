import { NavigationProp, useNavigation } from '@react-navigation/native';

type RootStackParamList = {
  [key: string]: undefined; // ou defina os parâmetros esperados para cada rota
};

export const navigateToPage = (pageName: string) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  return () => {
    navigation.navigate(pageName);
  };
};
