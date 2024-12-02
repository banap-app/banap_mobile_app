import { NavigationProp, useNavigation } from '@react-navigation/native';

type RootStackParamList = {
  [key: string]: undefined; // Defina os parâmetros esperados para cada rota
};

// Cria um hook customizado para navegar
export const useNavigateToPage = (): ((pageName: string) => void) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const navigate = (pageName: string): void => {
    navigation.navigate(pageName);
  };

  return navigate;
};
