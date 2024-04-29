import React from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import Violino from './components/Violino';
import Melodia from './components/Melodia';


const GameScreen: React.FC = () => {

  return (
    < ImageBackground source={require("./assets/background.png")} style={styles.container} >
      <Melodia></Melodia>
      <View style={styles.violinoContainer}>
        <Violino ></Violino>
      </View>
    </ImageBackground >
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
  }
});

export default GameScreen;
