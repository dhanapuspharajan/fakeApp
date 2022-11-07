import { View, Text, Image } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import React from 'react'
import { EmployeeContextConsumer } from '../Context'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Personal from './Personal';
import Organition from './Organition';
import { Header } from '@react-navigation/stack';

const EmployeeDetails = () => {

  const [ Employee, setEmployee ] = EmployeeContextConsumer();
  const Tab = createMaterialTopTabNavigator(); 
  
  return (
   
    <View style={{backgroundColor:'#1c1717'}} > 
    
      <View style={{
        backgroundColor:'#3f3636',
        display:'flex',
         flexDirection:'row',
         alignItems:'center',
         padding:10,
         margin:10,
         borderRadius:10
  
      }}>
    <View style={{ width:80, height:80 }} >
        <Image style={{width:80, height:80, borderRadius:50, backgroundColor:'grey'}} source={{ uri:Employee.profile_image } } ></Image>
      </View>
      <View style={{marginStart:15, marginTop:5}}>
      <Text style={{color:'white',fontSize:15,fontWeight:'bold'}} >{Employee.username}</Text>
      <Text style={{color:'white'}} >{Employee.company.name}</Text>
      </View>
    </View>
     <View  style={{ height:'100%' }} >
       <Tab.Navigator initialRouteName='Personal' 
       
      screenOptions={ ({ route }) => ({
          tabBarActiveTintColor:'red',
         tabBarInactiveTintColor:'white',
          tabBarBounces:true,
        
        tabBarStyle:{ backgroundColor:'#1c1717' },
        tabBarIcon:({ focused, color, size  }) =>{ 

let IconName;
let RouteName = route.name;
 
 if(RouteName === "Personal") {
  IconName = focused? "person":'person'

} else if( RouteName === "Organization" ){
  IconName = focused? "business":'business'
  
}
return <Ionicons name={IconName}  size={20} color={color} />
 }
}) }
        >
       <Tab.Screen name="Personal" component={Personal} />
       <Tab.Screen name="Organization" component={Organition} />
       </Tab.Navigator>
     </View>
     
    </View>
  )
}

export default EmployeeDetails