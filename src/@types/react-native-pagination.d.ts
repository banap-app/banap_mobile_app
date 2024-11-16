declare module 'react-native-pagination' {
    import { Component } from 'react';
    import { ViewStyle } from 'react-native';
  
    interface PaginationProps {
      carouselRef: any;
      dotsLength: number;
      activeDotIndex: number;
      dotStyle?: ViewStyle;
      inactiveDotOpacity?: number;
      inactiveDotScale?: number;
    }
  
    export default class Pagination extends Component<PaginationProps> {}
  }
  