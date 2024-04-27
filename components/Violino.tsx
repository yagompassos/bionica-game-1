import React from 'react';
import Svg from 'react-native-svg';
import Cordas from './Cordas';
import Palheta from './Palheta';
import { VIOLIN_HEIGHT, VIOLIN_WIDTH } from '../config/utils';

const Violino = () => {
  return (
    <Svg height="100%" width="100%" viewBox={`0 0 ${VIOLIN_WIDTH} ${VIOLIN_HEIGHT}`}>
      <Cordas></Cordas>
      <Palheta></Palheta>
    </Svg>);
};

export default Violino;
