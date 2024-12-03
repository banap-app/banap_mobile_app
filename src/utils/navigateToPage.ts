import { NavigationProp, useNavigation } from '@react-navigation/native';

// Permite qualquer chave de string com parâmetros opcionais
type RootStackParamList = {
  [key: string]: object | undefined;
};

// Cria um hook customizado para navegar com rotas e parâmetros dinâmicos
export const useNavigateToPage = (): ((pageName: string, params?: object) => void) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const navigate = (pageName: string, params?: object): void => {
    navigation.navigate(pageName, params);
  };

  return navigate;
};
