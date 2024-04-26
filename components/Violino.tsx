import React from 'react';
import { View, StyleSheet } from 'react-native';

const Violino = () => {
  return <View style={styles.bar}></View>;
};

const styles = StyleSheet.create({
  bar: {
    width: 5, // Ajustando a largura para uma barra mais fina
    height: '30%', // Altura da barra ajustada para 30% da tela
    backgroundColor: 'gray',
    position: 'absolute',
    top: '70%', // Posicionando a barra próximo aos 70% da vertical da tela
    left: '50%', // Posicionando a barra no centro horizontal da tela
    transform: [{ translateX: -2.5 }], // Ajustando o centro da barra
  },
});

export default Violino;
