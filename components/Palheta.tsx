import React, { RefObject, useRef } from "react"
import { Animated, PanResponder } from "react-native";
import { Circle } from "react-native-svg";
import { BALL_RADIUS, VIOLIN_HEIGHT } from "../config/utils";

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

const Palheta = ({ ref }: { ref: RefObject<Circle> }) => {
    const pan = useRef(new Animated.ValueXY()).current;

    const panResponder = PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onPanResponderMove: (evt, gestureState) => {
            if (gestureState.dx !== 0)
                pan.setValue({ x: Math.min(Math.max((gestureState.x0 + gestureState.dx) / 2, 10), 190), y: gestureState.dy });
        },
        onPanResponderRelease: () => {
            console.log(pan.x);
        },
    });

    return (<AnimatedCircle
        cx={pan.x}
        cy={VIOLIN_HEIGHT / 2}
        r={BALL_RADIUS}
        fill="white"
        ref={ref}
        {...panResponder.panHandlers}
    />)
}

export default Palheta;


// cx={pan.x}
// cy={VIOLIN_HEIGHT / 2}
// r={BALL_RADIUS}
// fill="white"