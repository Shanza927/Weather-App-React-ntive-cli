import  React , {useState , useEffect} from 'react';
import { View , Text ,FlatList } from 'react-native';
import { TextInput, Button , Card  } from 'react-native-paper';
import Header from './Header.js';

const Search = () => {
const [City, setCity] = useState('');
const [cities , setCities] = useState([]);
const fetchCities = (text) => {
	setCity(text);
	let url = `https://api.openweathermap.org/data/2.5/weather?q=${City}&appid=b0b473bc157cbe9cfff2e3c84cd0f008` ;
   fetch(url)
   .then(response=>response.json())
   .then((cityData) => {
     setCities(cityData);
   }
  );
  
  console.log(City)
  console.log(cities);
 
 
}
//   useEffect(() => {
	//   const fetchApi = async () => {
	// 	  const url = `https://api.openweathermap.org/data/2.5/weather?q=${City}&appid=b0b473bc157cbe9cfff2e3c84cd0f008` ;
	// 	  const response = await fetch(url);
	// 	  const resJson=await response.json();
	// 	  setCities(resJson);
	//   };
//  let url = `https://api.openweathermap.org/data/2.5/weather?q=${City}&appid=b0b473bc157cbe9cfff2e3c84cd0f008` ;
//    fetch(url)
//    .then(response=>response.json())
//    .then(cityData =>{
//      setCities([...cities , cityData]);
//    }
//   );
  
//   console.log(City)
 
//  console.log(cities);
 
// } , [] );

  return (
      <View  >
      <Header Heading = "Search Screen" />
      <TextInput
	  type="text"
      label="City Name "
      value={City}
      onChangeText={(text) => fetchCities(text)}
    />
     <Button 
      icon="content-save"
      mode="contained"
      theme={{
        roundness: 3 ,
        colors:{
          primary:'#00aaff',
        }
      }}
      style={{margin:20}}
      onPress={() => console.log('Pressed')}>
    <Text style={{color : "white"}}>Save Changes </Text>
  </Button>
  <FlatList
  data = {cities}
  renderItem={({item})=>{
    return(
      <Card style={{margin:2 , padding:10}}>
      <Text>{item.Sys.name}</Text>
      </Card>
    );
  }}
  // keyExtractor={(item, index) => index.toString()}
  keyExtractor={item=>item.Sys.name}
  />
    </View>
  );

}

export default Search;
