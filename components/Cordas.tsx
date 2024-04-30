import { View } from "react-native";
import { Rect } from "react-native-svg"

const VIOLIN_WIDTH = 200;
const VIOLIN_HEIGHT = 2;

const Cordas = () => {
    return (<View>
        <Rect width={VIOLIN_WIDTH} height={VIOLIN_HEIGHT} fill="#ffffff" y={-5} />
        <Rect width={VIOLIN_WIDTH} height={VIOLIN_HEIGHT} fill="#ffffff" />
        <Rect width={VIOLIN_WIDTH} height={VIOLIN_HEIGHT} fill="#ffffff" y={5} />
    </View>);
}

export default Cordas;