import * as React from 'react';
import { View , Text } from 'react-native';
import { Appbar , Title } from 'react-native-paper';

const Header = ({Heading }) => {
 const theme = {
   colors: {
    primary: '#3498db',
    accent: '#f1c40f',
  }

 }
  return (
     
    <Appbar.Header
    theme = {theme}
    style ={{flexDirection :"row" , justifyContent:"center"  , backgroundColor:"#00aaff" }}
    >
      <Title style = {{ color : "white"  }}>
      
       {Heading}
       
      </Title>
    </Appbar.Header>
    
  );

};

export default Header;
