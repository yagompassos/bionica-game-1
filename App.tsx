import React, { useRef } from 'react';
import { View, StyleSheet, PanResponder, Animated } from 'react-native';
import Svg, { Rect, Circle } from 'react-native-svg';

const VIOLIN_WIDTH = 200;
const VIOLIN_HEIGHT = 5;
const BALL_RADIUS = 10;

const GameScreen: React.FC = () => {
  const pan = useRef(new Animated.ValueXY()).current;

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: Animated.event([
      null,
      { dx: pan.x, dy: pan.y }, // Atualiza o valor de pan.x e pan.y
    ]),
    onPanResponderRelease: () => {
      // Adicione qualquer lógica adicional que você precisa ao soltar o dedo
    },
  });

  return (
    <View style={styles.container}>
      <Svg height="100%" width="100%" viewBox={`0 0 ${VIOLIN_WIDTH} ${VIOLIN_HEIGHT}`}>
        <Rect x={0} y={0} width={VIOLIN_WIDTH} height={VIOLIN_HEIGHT} fill="brown" />
        <AnimatedCircle
          cx={pan.x}
          cy={VIOLIN_HEIGHT / 2}
          r={BALL_RADIUS}
          fill="black"
          {...panResponder.panHandlers}
        />
      </Svg>
    </View>
  );
};

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
});

export default GameScreen;
