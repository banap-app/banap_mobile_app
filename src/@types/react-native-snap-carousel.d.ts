declare module 'react-native-snap-carousel' {
    import { Component } from 'react';
    import { FlatListProps, StyleProp, ViewStyle } from 'react-native';
  
    export interface CarouselProps<T> extends FlatListProps<T> {
      data: T[];
      renderItem: ({ item, index }: { item: T; index: number }) => JSX.Element;
      sliderWidth: number;
      itemWidth: number;
      onSnapToItem?: (index: number) => void;
      loop?: boolean;
      autoplay?: boolean;
      autoplayDelay?: number;
      autoplayInterval?: number;
      containerCustomStyle?: StyleProp<ViewStyle>;
      contentContainerCustomStyle?: StyleProp<ViewStyle>;
      inactiveSlideScale?: number;
      inactiveSlideOpacity?: number;
      inactiveSlideShift?: number;
      layout?: 'default' | 'stack' | 'tinder';
      layoutCardOffset?: number;
    }
  
    export default class Carousel<T> extends Component<CarouselProps<T>> {}
  }
  