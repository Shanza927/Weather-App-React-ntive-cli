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
import Search from './screens/Search.js';



const App = () => {
 

  return (
    <View>
<StatusBar 
     backgroundColor = "#00aaff"  
     barStyle = "dark-content"   
 />
 <Search/>
<Text>Hello   World </Text>
    </View>
    
  );
};


export default App;
