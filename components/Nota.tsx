import React from 'react';
import { Animated, StyleSheet } from 'react-native';

const Nota = ({ Y, X }: { Y: Animated.Value, X: Animated.Value }) => {
    return <Animated.View
        style={[styles.nota, { transform: [{ translateY: Y }, { translateX: X }] }]}
    />
};

const styles = StyleSheet.create({
    nota: {
        position: 'absolute',
        width: 50,
        height: 50,
        backgroundColor: 'black',
        borderRadius: 5,
    },
});

export default Nota;
