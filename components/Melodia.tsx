import React, { RefObject, useEffect, useState } from 'react';
import { View, Animated } from 'react-native';
import Nota from './Nota';
import { DELAY_QUEDA, HEIGHT, QUANT_NOTAS, TEMPO_QUEDA, WIDTH } from '../config/utils';
import INota from '../interface/INota';

const Melodia = ({ ref }: { ref: RefObject<View> }) => {
    const [notas, setNotas] = useState<INota[]>([]);

    useEffect(() => {
        const novasNotas: INota[] = Array.from({ length: QUANT_NOTAS }, (_, index) => {
            return {
                id: index.toString(),
                posicaoY: new Animated.Value(Math.random() * (HEIGHT - 100) - HEIGHT),
                posicaoX: new Animated.Value(Math.random() * (WIDTH - 100)),
            };
        });

        setNotas(novasNotas);

        novasNotas.forEach((nota, index) => {
            setTimeout(() => {
                Animated.timing(nota.posicaoY, {
                    toValue: HEIGHT + 100,
                    duration: TEMPO_QUEDA,
                    useNativeDriver: false
                }).start();
            }, Math.random() * DELAY_QUEDA * index);
        });
    }, [])

    const renderNotas = () => {
        return notas.map((nota) => (
            <Nota ref={ref} key={nota.id} Y={nota.posicaoY} X={nota.posicaoX} />
        ));
    };

    return <View>{renderNotas()}</View>;
};

export default Melodia;
