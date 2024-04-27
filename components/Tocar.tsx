import React, { useRef } from 'react';
import { View, Animated, PanResponder } from 'react-native';
import Nota from './Nota';

const Tocar = () => {
    const posicaoY = useRef(new Animated.Value(-10)).current;

    const panResponder = PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onPanResponderMove: Animated.event([null, { dy: posicaoY }]),
        onPanResponderRelease: () => {
            Animated.spring(posicaoY, { toValue: -100, useNativeDriver: false }).start();
        },
    });

    return (
        <Animated.View
            {...panResponder.panHandlers}
            style={{ transform: [{ translateY: posicaoY }] }}
        >
            <Nota />
        </Animated.View>
    );
};

export default Tocar;
