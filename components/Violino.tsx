import React, { RefObject } from 'react';
import Svg, { Circle } from 'react-native-svg';
import Cordas from './Cordas';
import Palheta from './Palheta';
import { VIOLIN_HEIGHT, VIOLIN_WIDTH } from '../config/utils';
import { LayoutChangeEvent, View } from 'react-native';

const Violino = ({ world }: { world: Matter.World }) => {
  return (
    <Svg height="100%" width="100%" viewBox={`0 0 ${VIOLIN_WIDTH} ${VIOLIN_HEIGHT}`}>
      <Cordas></Cordas>
      <Palheta world={world}></Palheta>
    </Svg>);
};

export default Violino;
