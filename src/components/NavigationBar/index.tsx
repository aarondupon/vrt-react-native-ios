import React from 'react';
import {
  MenuButtonLeft,
  MenuButtonRight,
  MenuButtonText,
  MenuButtonMiddle,
} from '../../core/Button/MenuButton';
import HBox from '../../core/Layout/HBox';
import { View, Text } from 'react-sketchapp';
import HearIconSvg from '../../core/Svg/HearIconSvg';

const NavigationBar = (props) => (
  <View
    style={{
      padding: 0,
      marginTop: 10,
      marginLeft: 120,
      width: 1320,
      height: 26,
      flexDirection: 'row',
      display:'flex',
      ...props.style,
    }}

    
  >
   
    <MenuButtonLeft style={{fontSize:props.style.fontSize}} selected={props.selectedIndex === 0} label={'Home'} />
    <MenuButtonMiddle  style={{fontSize:props.style.fontSize}} selected={props.selectedIndex === 1} label={'Playlist'} />
    <MenuButtonRight  style={{fontSize:props.style.fontSize}} selected={props.selectedIndex === 2}  label={'Smart Radio'} />
    <MenuButtonText  style={{fontSize:props.style.fontSize}} label={props.edit ? '< Terug' :  'Wijzigen'} />
    <HBox style={{ position: 'absolute', width: 350, left: 1366 - 450, marginTop: 2 }}>
      {/* <HearIconSvg /> */}
      <View style={{ width: 10 }} />
      <Text>{props.buttonRightTitle}</Text>
    </HBox>
    <View
      style={{
        alignItems: 'center',
        marginTop: 3,
        position: 'absolute',
        left: 1366 - 450 - 400,
        backgroundColor: 'none',
      }}
    >
      <Text style={{ textAlign: 'center', fontWeight: 'bold' }}>{props.title || 'mijn afspeelijst'}</Text>
    </View>
  </View>
);

export default NavigationBar;
