
import React from 'react';
import type {Node} from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  
  DebugInstructions,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {MaterialCommunityIcons} from 'react-native-vector-icons/MaterialCommunityIcons';
import Search from './screens/Search.js';
import Home from './screens/Home.js';




const App = () => {
 

  return (
    <View>
    <StatusBar backgroundColor = "#00aaff"  barStyle = "dark-content"   />
    <Home/>
    </View>
    
  );
};


export default App;
