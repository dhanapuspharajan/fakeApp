import 'react-native-gesture-handler';
import React from 'react';
import {  View , StyleSheet } from 'react-native';
import { EmployeeContextProvider } from './Context';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import EmployeeDetails from './components/EmployeeDetails';

import { createStackNavigator } from '@react-navigation/stack';
import Home from './components/Home';


function App(){

   const Stack = createStackNavigator();

  return (
    <View style={styles.container}> 
     
      <NavigationContainer>
      <EmployeeContextProvider>
      <Stack.Navigator initialRouteName='Home' >
       <Stack.Screen name='Home' 
       component={ Home }
        options={{ headerShown:false }}
       ></Stack.Screen>
        <Stack.Screen name='EmployeeDetails' component={EmployeeDetails } 
        
         options={{ 

           headerStyle:{ 
             backgroundColor:'#1c1717',
             
            },
            headerTitleStyle:{
              color:'white'
            },
            headerTintColor:'white'
          }}
         ></Stack.Screen> 
      </Stack.Navigator>
      </EmployeeContextProvider>
     </NavigationContainer>
    
     
    </View>
  );
};

const styles = StyleSheet.create({
  
  container:{
   backgroundColor:"grey",
   height:'100%'
  },
 
});

export default App;
