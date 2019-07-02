import * as React from 'react';
import styled, {css} from 'styled-components/primitives';
import { useDocument } from '../../../../context/DocumentContext';

const Text = styled.Text`
      font-size:${props=>parseInt(props.fontSize) || 12};
      color:${props=>props.selected ? '#ffffff' : '#666666'};
`

const Label = ({name="",children='',fontSize=undefined,selected=false,style={fontSize:16}} ) =>{
    const document:any = useDocument();
    style.fontSize = fontSize || (document[0] && document[0].width <=320 ? 10: 16);
   return(<Text selected={selected} {...style}>{children}</Text>)
  }

export default Label;