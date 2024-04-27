import React from 'react';
import { View, StyleSheet, useWindowDimensions, ImageBackground } from 'react-native';
import Violino from './components/Violino';
import Tocar from './components/Tocar';


const GameScreen: React.FC = () => {

  const { width, height } = useWindowDimensions();

  return (
    <ImageBackground source={require("./assets/background.png")} style={styles.container}>
      <Tocar></Tocar>
      <View style={styles.violinoContainer}>
        <Violino ></Violino>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  violinoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 500,
    bottom: 0,
    left: 0,
    right: 0,
  }
});

export default GameScreen;
