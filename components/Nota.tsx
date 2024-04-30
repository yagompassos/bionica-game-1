import React, { RefObject } from 'react';
import { Animated, StyleSheet, View } from 'react-native';

const Nota = ({ ref, Y, X }: { ref: RefObject<View>, Y: Animated.Value, X: Animated.Value }) => {
    return <Animated.View
        ref={ref} style={[styles.nota, { transform: [{ translateY: Y }, { translateX: X }] }]}
    />
};

const styles = StyleSheet.create({
    nota: {
        position: 'absolute',
        width: 10,
        height: 150,
        backgroundColor: 'pink',
        borderRadius: 5,
        borderWidth: 3,
        borderColor: 'white',
    },
});

export default Nota;
