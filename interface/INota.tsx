import { Animated } from "react-native";

export default interface INota {
    id: string;
    posicaoY: Animated.Value;
    posicaoX: Animated.Value;
}
