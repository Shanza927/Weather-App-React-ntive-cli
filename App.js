
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



const Tab = createBottomTabNavigator();
const App = () => {
 

  return (
    <View>
    <StatusBar backgroundColor = "#00aaff"  barStyle = "dark-content"   />
     <NavigationContainer>
            <Tab.Navigator
      initialRouteName="home"
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
      }}
    >
      <Tab.Screen
        name="home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="search"
        component={Search}
        options={{
          tabBarLabel: 'Updates',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="bell" color={color} size={size} />
          ),
          tabBarBadge: 3,
        }}
      />
      
    </Tab.Navigator>
    </NavigationContainer>
    
    {/* <NavigationContainer>
     <Tab.Navigator
     initialRouteName="home"
      screenOptions={({route})=>({
        tabBarIcon:({color})=> {
          let iconName ;
          if(route.name==="home"){
            iconName="home" 
          }
          else if (route.name==="search"){
            iconName="search-plus" ;
          }
          return <MaterialCommunityIcons name ={iconName} size ={20} color={color} />
        }
      })}
      tabBarOptions ={{
        activeTintColor:"white",
        inactiveTintColor:"gray"
      }}
    >
      <Tab.Screen
        name="home"
        component={Home}
        
      />
      <Tab.Screen
        name="search"
        component={Search}
       
      />
      
    </Tab.Navigator>

    </NavigationContainer> */}
 
    </View>
    
  );
};


export default App;
