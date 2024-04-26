import React from 'react';
import { View, StyleSheet } from 'react-native';

interface PalhetaProps {
  positionX: number;
  diameter: number;
}

const Palheta: React.FC<PalhetaProps> = ({ positionX, diameter }) => {
  return (
    <View
      style={[
        styles.palheta,
        { left: positionX - diameter / 2, width: diameter, height: diameter },
      ]}
    ></View>
  );
};

const styles = StyleSheet.create({
  palheta: {
    backgroundColor: 'red',
    borderRadius: 100,
    position: 'absolute',
    bottom: 20, // Height of the horizontal bar
  },
});

export default Palheta;
