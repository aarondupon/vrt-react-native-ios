import React, { useContext, useEffect } from 'react';
import {
  Image,
  StyleSheet,
  render as renderSketchApp,
  Page,
  Artboard,
  Text,
  View,
  makeSymbol,
} from 'react-sketchapp';
import chroma from 'chroma-js';
import CornerIconSvg from '../Svg/CornerIconSvg';
import DocumentContext, {
  useDocument,
  DocumentContextConsumer,
} from '../../context/DocumentContext';
import Thumbnail from '../Image/Thumbnail';

const Album = ({width=100,hover}) => {
//   const [state]: any = useContext(DocumentContext);

  return (
    <View name="Multi" style={{ position:'relative',padding: 10,minWidth:width}}>
      <Thumbnail hover={hover} style={{width:width-20,height:width-20}}  />
      <CornerIconSvg hover={hover} style={{ position: 'absolute', bottom:0, left: 0 }} />
    </View>
  );
};
// makeSymbol(Album,'Album');
export default Album;
