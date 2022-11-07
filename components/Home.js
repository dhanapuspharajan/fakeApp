import { View, Text , StyleSheet} from 'react-native'
import React from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Repo from './Repo';
import Employee from './Employee';
import Notification from './Notification';

const Home = () => {

    const Tab = createBottomTabNavigator();

  return (
    <View  style={styles.container}>

      <Tab.Navigator initialRouteName='Repo'
      style={{backgroundColor:'grey'}}
      screenOptions={({route}) => ({ 
          headerShown:false,
         tabBarActiveTintColor:'red',
         tabBarInactiveTintColor:'white',
          tabBarStyle:{ backgroundColor:'#5f5a5a' },
         tabBarIcon:({ focused, color, size  }) =>{ 

          let IconName;
          let RouteName = route.name;
           
           if(RouteName === "Employee") {
            IconName = focused? "person":'person'

          } else if( RouteName === "Repo" ){
            IconName = focused? "home":'home'
            
          }else if(RouteName === "Notification"){
            IconName = focused? "mail":"mail"
          }

          return <Ionicons name={IconName}  size={size} color={color} />
         },
       })}>
        <Tab.Screen  name="Repo" component={ Repo }/> 
        <Tab.Screen  name="Employee" component={ Employee  }  /> 
        <Tab.Screen name="Notification" component={ Notification } /> 
     </Tab.Navigator>
    </View>
  )
}

const styles = StyleSheet.create({
  
    container:{
     backgroundColor:"grey",
     height:'100%'
    },
   
  });

export default Home