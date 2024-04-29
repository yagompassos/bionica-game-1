import React, { RefObject, useRef } from "react"
import { Animated, PanResponder, View, StyleSheet} from "react-native";
import { Circle } from "react-native-svg";
import { BALL_RADIUS, VIOLIN_HEIGHT } from "../config/utils";

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

const Palheta = ({ ref }: { ref: RefObject<View> }) => {
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

    
    const circleStyle = {
        transform: [{ translateX: pan.x }],
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: 'blue'
    };

    return (<Animated.View
        style={[styles.circle, circleStyle]}
        ref={ref}
        {...panResponder.panHandlers}
    />)
}

const styles = StyleSheet.create({
    circle: {
        position: 'absolute'
    }
});

export default Palheta;


// cx={pan.x}
// cy={VIOLIN_HEIGHT / 2}
// r={BALL_RADIUS}
// fill="white"