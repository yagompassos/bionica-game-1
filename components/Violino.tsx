import React, { RefObject } from 'react';
import Svg, { Circle } from 'react-native-svg';
import Cordas from './Cordas';
import Palheta from './Palheta';
import { VIOLIN_HEIGHT, VIOLIN_WIDTH } from '../config/utils';
import { View } from 'react-native';

const Violino = ({ ref }: { ref: RefObject<View> }) => {
  return (
    <Svg height="100%" width="100%" viewBox={`0 0 ${VIOLIN_WIDTH} ${VIOLIN_HEIGHT}`}>
      <Cordas></Cordas>
      <Palheta ref={ref}></Palheta>
    </Svg>);
};

export default Violino;
