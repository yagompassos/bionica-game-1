import React, { useEffect, useState } from 'react';
import { View, Animated, StyleSheet } from 'react-native';
import { HEIGHT, QUANT_NOTAS, DELAY_QUEDA, TEMPO_QUEDA, WIDTH } from '../config/utils';
import * as Matter from 'matter-js';
import Nota from './Nota';

const Melodia = ({ world }: { world: Matter.World }) => {
    const [notas, setNotas] = useState<JSX.Element[]>([]);
    console.log("hi");
    useEffect(() => {
        const novasNotas: JSX.Element[] = [];

        Array.from({ length: QUANT_NOTAS }, (_, index) => {
            const x = Math.random() * (WIDTH - 100);
            console.log(WIDTH);
            const y = -500; // Começa acima da tela
            const body = Matter.Bodies.rectangle(x, y, 10, 150, { isStatic: false, friction: 0.5 });
            Matter.World.add(world, body);

            const translateY = new Animated.Value(y);
            Animated.timing(translateY, {
                toValue: HEIGHT,
                duration: TEMPO_QUEDA,
                delay: DELAY_QUEDA * index,
                useNativeDriver: false,
            }).start();

            novasNotas.push(
                <Animated.View key={index.toString()} style={[styles.nota, { transform: [{ translateY }] }]}>
                    <Nota world={world} body={body} />
                </Animated.View>
            );

            return null;
        });

        setNotas(novasNotas);
    }, []);

    return <View style={styles.container}>{notas}</View>;
};

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
    },
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

export default Melodia;
