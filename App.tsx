import React, { useEffect, useState, useRef } from 'react';
import { View, StyleSheet, ImageBackground, Text } from 'react-native';
import Violino from './components/Violino';
import Melodia from './components/Melodia';

const GameScreen: React.FC = () => {
  const [score, setScore] = useState(0);
  const melodiaRef = useRef<View>(null);
  const violinoRef = useRef<View>(null);

  const verificarColisao = () => {
    if (!melodiaRef.current || !violinoRef.current) 
      return;

    melodiaRef.current.measure((x, y, width, height, pageX, pageY) => {
    const melodiaRect = { left: pageX, right: pageX + width, top: pageY, bottom: pageY + height };

    violinoRef.current.measure((x, y, width, height, pageX, pageY) => {
    const violinoRect = { left: pageX, right: pageX + width, top: pageY, bottom: pageY + height };

    if (
          melodiaRect.left < violinoRect.right &&
          melodiaRect.right > violinoRect.left &&
          melodiaRect.top < violinoRect.bottom &&
          melodiaRect.bottom > violinoRect.top
       ) {
          let newScore = score + 1;
          setScore(newScore);
        }
      });
    });
  };

  useEffect(() => {
    verificarColisao();
  }, []);

  return (
    <ImageBackground source={require("./assets/background.png")} style={styles.container}>
      <Melodia ref={melodiaRef} />
      <View style={styles.violinoContainer}>
        <Violino ref={violinoRef} />
      </View>
      <Text style={styles.score}>Score: {score}</Text>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  violinoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 500,
    bottom: 0,
    left: 0,
    right: 0,
  },
  score: {
    position: 'absolute',
    top: 20,
    left: 20,
    color: 'white',
    fontSize: 20,
  }
});

export default GameScreen;
