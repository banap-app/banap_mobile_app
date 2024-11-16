import React, { useState } from 'react';
import { View, Dimensions, StyleSheet, Image } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import AnimatedDots from './AnimatedDots'; // Componente das bolinhas

const { width } = Dimensions.get('window');

const images = [
  'https://ceagesp.gov.br/wp-content/uploads/2019/12/Banana_pratapng-464x464.png',
  'https://ceagesp.gov.br/wp-content/uploads/2019/12/Banana_pratapng-464x464.png',
  'https://ceagesp.gov.br/wp-content/uploads/2019/12/Banana_pratapng-464x464.png',
];

const MyCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <View style={styles.container}>
      <Carousel
        loop
        width={width}
        height={200}
        data={images}
        scrollAnimationDuration={1000}
        onSnapToItem={(index) => setCurrentIndex(index)}
        renderItem={({ item }) => (
          <View style={styles.imageContainer}>
            <Image source={{ uri: item }} style={styles.image} />
          </View>
        )}
      />
      {/* Barra de Bolinhas */}
      <AnimatedDots length={images.length} currentIndex={currentIndex} />
    </View>
  );
};

export default MyCarousel;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    width: '100%',
    height: '100%',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
});
