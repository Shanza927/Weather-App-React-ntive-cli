import  React , {useState , useEffect} from 'react';
import { View , Text , Image} from 'react-native';
import { Appbar , Title , Card } from 'react-native-paper';
import Header from './Header.js';

const Home = () => {
 const [info , setInfo] = useState({
     name:"loading !!",
     temp:"loading ",
     humidity:"loading ",
     desc :"loading",
     icon :"loading"
 })
 useEffect(() => {
    getWeather();
 }, [])
 const getWeather =()=>{
    let url = `https://api.openweathermap.org/data/2.5/weather?q=pakistan&appid=b0b473bc157cbe9cfff2e3c84cd0f008&units=metric` ;
   fetch(url)
   .then(data => data.json())
   .then(results =>{
       setInfo({
           name:results.name,
           temp:results.main.temp,
           humidity:results.main.humidity,
           desc:results.weather[0].description,
           icon:results.weather[0].icon ,
          })
       console.log(results)
   })
   }



  return (
      <View style={{flexDirection:"row" , justifyContent:"center"}}>
      <View style={{flex:1 }}>
       <Header Heading = "Weathe App" />
       <View style={{alignItems:"center"}}>
       <Title style={{color:"#00aaff" , marginTop:30 , fontSize:30}}>
       {info.name}
       </Title>
       <Image style={{width: 120, height: 120}}
              source={{uri:"http://openweathermap.org/img/wn/"+info.icon+"@2x.png"}} />
       </View>
       <Card style={{margin:5 , padding:17 }}>
       <Title style={{color:"#00aaff"}}> feels like  {info.temp} °C</Title>
       </Card>
      
        <Card style={{margin:5 , padding:17}}>
       <Title style={{color:"#00aaff"}}> humidity = {info.humidity}</Title>
       </Card>
        <Card style={{margin:5 , padding:17}}>
       <Title style={{color:"#00aaff"}}> description = {info.desc}</Title>
       </Card>
    </View>
    </View>
  );

};

export default Home;
