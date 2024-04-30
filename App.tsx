import React, { useEffect, useState, useRef } from 'react';
import { View, StyleSheet, ImageBackground, Text } from 'react-native';
import Violino from './components/Violino';
import Melodia from './components/Melodia';
import { Circle } from 'react-native-svg';

const GameScreen: React.FC = () => {
  const [score, setScore] = useState(0);
  const melodiaRef = useRef<View>(null);
  const violinoRef = useRef<Circle>(null);

  const checkCollision = () => {
    console.log(violinoRef.current);
    if (melodiaRef.current && violinoRef.current) {
      let melodiaLayout = { x: 0, y: 0, width: 0, height: 0 };

      melodiaRef.current.measure((x, y, width, height, pageX, pageY) => {
        melodiaLayout = { x: pageX, y: pageY, width, height };
      });

      let violinLen = violinoRef.current.getBBox();
      console.log(violinLen);
      if (
        melodiaLayout.x < violinLen!.x + violinLen!.width &&
        melodiaLayout.x + melodiaLayout.width > violinLen!.x &&
        melodiaLayout.y < violinLen!.y + violinLen!.height &&
        melodiaLayout.y + melodiaLayout.height > violinLen!.y
      ) {
        setScore(score + 1);

      }
    };
  }


  useEffect(() => {
    const interval = setInterval(checkCollision, 100); // Check collision every 100ms
    return () => clearInterval(interval);
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
