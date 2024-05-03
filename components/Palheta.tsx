import React, { useEffect, useRef } from 'react';
import { Circle } from 'react-native-svg';
import * as Matter from 'matter-js';
import { BALL_RADIUS, VIOLIN_HEIGHT } from '../config/utils';

const Palheta = ({ world }: { world: Matter.World }) => {
    const circleRef = useRef<Circle>(null);

    useEffect(() => {
        const body = Matter.Bodies.circle(100, VIOLIN_HEIGHT / 2, BALL_RADIUS, { isStatic: true });
        Matter.World.add(world, [body]);

        const updatePosition = () => {
            if (circleRef.current) {
                const position = body.position;
                circleRef.current.setNativeProps({ cx: position.x, cy: position.y });
            }
        };

        const interval = setInterval(updatePosition, 1000 / 60); // Atualiza a posição a cada frame

        return () => {
            clearInterval(interval);
            Matter.World.remove(world, body);
        };
    }, []);

    return <Circle ref={circleRef} cx={100} cy={VIOLIN_HEIGHT / 2} r={BALL_RADIUS} fill="white" />;
};

export default Palheta;
