import React, { useEffect, useState } from 'react';
import { View, StyleSheet, ImageBackground, Text } from 'react-native';
import * as Matter from 'matter-js';
import Violino from './components/Violino';
import Melodia from './components/Melodia';

const engine = Matter.Engine.create();
const world = engine.world;

const GameScreen: React.FC = () => {
  const [score, setScore] = useState(0);

  useEffect(() => {
    // Corpo da Melodia
    const melodiaBody = Matter.Bodies.rectangle(50, 50, 50, 50, { isStatic: true });
    melodiaBody.label = 'melodia';
    Matter.World.add(world, melodiaBody);
    // Corpo do Violino
    const violinoBody = Matter.Bodies.rectangle(150, 150, 50, 50, { isStatic: true });
    violinoBody.label = 'violino';
    Matter.World.add(world, violinoBody);

    // Escuta eventos de colisão entre os corpos
    Matter.Events.on(engine, 'collisionStart', event => {
      event.pairs.forEach(pair => {
        const bodyA = pair.bodyA;
        const bodyB = pair.bodyB;

        if ((bodyA.label === 'melodia' && bodyB.label === 'violino') ||
          (bodyA.label === 'violino' && bodyB.label === 'melodia')) {
          setScore(score + 1); // Incrementa o score quando há colisão entre Melodia e Violino
        }
      });
    });

    return () => {
      Matter.World.remove(world, melodiaBody);
      Matter.World.remove(world, violinoBody);
    };
  }, []);

  return (
    <ImageBackground source={require("./assets/background.png")} style={styles.container}>
      <Melodia world={world} />
      <View style={styles.violinoContainer}>
        <Violino world={world} />
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
