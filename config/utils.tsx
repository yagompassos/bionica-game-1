import { Dimensions } from "react-native";

const { width, height } = Dimensions.get('window');

export const WIDTH = width;
export const HEIGHT = height;
export const VIOLIN_WIDTH = 200;
export const VIOLIN_HEIGHT = 2;
export const BALL_RADIUS = 10;

// Empiricamente, é mais proveitoso ter um tempo queda > delay
// devemos encontrar um tempo próximo que seja ótimo
export const TEMPO_QUEDA = 5000;
export const DELAY_QUEDA = 6000;
export const QUANT_NOTAS = 20;