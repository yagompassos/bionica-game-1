import React, { useEffect, useRef } from 'react';
import { View, StyleSheet } from 'react-native';
import * as Matter from 'matter-js';

const Nota = ({ world, body }: { world: Matter.World, body: Matter.Body }) => {
    const viewRef = useRef<View>(null);

    useEffect(() => {
        const updatePosition = () => {
            if (viewRef.current && body) {
                const position = body.position;
                viewRef.current.setNativeProps({ style: [{ top: position.y, left: position.x }] });
            }
        };

        const interval = setInterval(updatePosition, 1000 / 60); // Atualiza a posição a cada frame

        return () => clearInterval(interval);
    }, [body]);

    return <View ref={viewRef} style={styles.nota} />;
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
