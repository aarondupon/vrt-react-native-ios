/**
 * @format
 */
import {AppRegistry} from 'react-native';
import reactSketchApp from 'react-sketchapp';
reactSketchApp.makeSymbol = (...args) =>{
    console.log('makeSymbol:MenuButtonText:', args)
    
};

import App from './src/App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
