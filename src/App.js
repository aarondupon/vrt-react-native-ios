/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component,useState} from 'react';
import {Platform, StyleSheet, Text, View,Image, ScrollView} from 'react-native';
import * as reactNativeSvg from 'react-native-svg';
import reactSketchapp from 'react-sketchapp';
import styled, {css} from 'styled-components/primitives';
import {DocumentContextProvider} from './context/DocumentContext';
import NavigationBar from './components/NavigationBar';
import ListItem from './components/Playlist/components/ListItem';
import VBox from './core/Layout/VBox';
import HBox from './core/Layout/HBox';
import { MenuButtonText } from './core/Button/MenuButton';

Object.assign(reactSketchapp,{Svg:Object.assign(reactNativeSvg.Svg,reactNativeSvg)});
reactSketchapp.Text = Text;
reactSketchapp.View = View;
reactSketchapp.Image =  (props)=>
  <Image {...props} 
    source = {{uri:props.source}} 
  />;

const Page = styled.View`
  width:${props=>props.width}px;
  height:auto;
  background-color: #f9f9f9;
  
`;

reactSketchapp.Page = Page;
const Artboard = styled.View`
  /* overflow:hidden; */
  background-color:#ffffff;
  border:solid 1px rgba(0,0,0,0.1);
  /* margin-left:50%; */
  /* transform:translateX(-${props=>props.style.width/2}px); */
  box-shadow: 0px 0px 5px rgba(0,0,0,0.4);
`;
reactSketchapp.Artboard = Artboard;
// reactSketchapp.Artboard = props=>
//   <View data-name="page">
//     <View style={{position:'relative',left:'50%',marginLeft:-props.style.width/2,width:props.style.width,padding:10}}>{props.name}</div>
//     <Artboard {...props} />
//   </View>;
/** overrides */
// require('react-sketchapp').makeSymbol = (comp) => comp;



// let {commands} = require('./my-command') ;




const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const useToggle = (initialState=false)=>{
    const [state,setState] = useState(initialState);
    const toggle = (value) =>{
      setState(value || !state);
    }
    return [toggle,state];
}
export default function App (){
  const [toggleEditList,editList] = useToggle()
// }
// export default class App extends Component {
  // render() {
    return (
      <DocumentContextProvider initialState={{width:320,height:768}} >
        <View style={styles.container}>
          <NavigationBar 
          selectedIndex={1}
          style={{marginLeft:0, fontSize:16}}
          />
           <VBox style={{width:'100%'}}>
        {/*** opnieuw gewoon even snel implementeren om demo te kunnnen tonen, sorry  ;) */}
          <HBox style={{paddingLeft:10}} >
                 {/* <HearIconSvg/> */}
                 
                  <VBox>
                  <View style={{width:10}} />
                  <Text>mijn intresses selecteren</Text>
                  <View style={{width:10}} />
                  <MenuButtonText style={{fontSize:16}} onPress={()=>toggleEditList()} label={'eaerazerzre'}></MenuButtonText>
                 </VBox>
          </HBox>
          <ScrollView>
            {([1,2,3,4,5]).map(x=><ListItem  edit={editList} key={x}/>)}
            </ScrollView>
          </VBox>
          <View style={styles.inner}>
            <Text style={styles.welcome}>razerarze dqfdfdto React Native!</Text>
            <Text style={styles.instructions}>To get startfqddfed, edit App.js</Text>
            <Text style={styles.instructions}>{instructions}</Text>
          </View>
        </View>
      </DocumentContextProvider>
    );
  
}
// type Props = {};
// export default class App extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.welcome}>Welcome to React Native!</Text>
//         <Text style={styles.instructions}>To get started, edit App.js</Text>
//         <Text style={styles.instructions}>{instructions}</Text>
//       </View>
//     );
//   }
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'flex-start',
    // alignItems: 'flex-start',
    backgroundColor: '#F5FCFF',
  },
  inner:{
    // flex: 0,
    width:'100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
