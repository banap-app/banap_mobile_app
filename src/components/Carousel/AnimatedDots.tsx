import React from 'react';
import { View, Animated, StyleSheet } from 'react-native';

const AnimatedDots = ({ length, currentIndex }: any) => {
  return (
    <View style={styles.dotsContainer}>
      {Array.from({ length }).map((_, index) => (
        <Animated.View
          key={index}
          style={[
            styles.dot,
            {
              backgroundColor: currentIndex === index ? '#000' : '#ccc',
              transform: [{ scale: currentIndex === index ? 1.2 : 1 }],
            },
          ]}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  dotsContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
});

export default AnimatedDots;
