import { View, Text ,StyleSheet, FlatList, TouchableOpacity , Pressable} from 'react-native'
import React, { useEffect, useState } from 'react'
import { TextInput } from 'react-native-gesture-handler'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Card from './Card';

import { EmployeeContextConsumer } from '../Context';

const Employee = ( { navigation } ) => {


  const [SearchValue, setSearchValue] = useState('');
  const [SearchFocused, setSearchFocused] = useState(false);
  const URL = 'http://www.mocky.io/v2/5d565297300000680030a986';
  const [ Employees , SetEmployees ] = useState([]);
  const [ ShowList , setShowList ] =useState(false);
  
  const [Employee, setEmployee] = EmployeeContextConsumer();

 async function  fetchData(){
      
      
         fetch(URL)
         .then( (res) => res.json() )
         .then( (json) => SetEmployees(json) )
         .then( console.log(Employees.length) )
         .then( () => setShowList(true) )

  }

  useEffect(()=> {
   
    fetchData();

  },[])

  return (
    <View style={{ height:'100%', backgroundColor:'black' }} >
       
       <View style={{height:50 , backgroundColor:'red',justifyContent:'center'}} >
        <Text style={{marginStart:20,fontSize:20,color:'white'}}>Employee</Text>
       </View>
       {/* end of header */}
       

          <View style={{ 
              display:'flex',
              flexDirection:'row',
              alignItems:'center',
              marginTop:20,
              marginBottom:10,
            marginHorizontal:10,
            borderRadius:20,
            borderWidth:1,
            
            borderColor:SearchFocused?'red':'grey'
           }} >
              <Ionicons
               name='search'
                size={20}
               color={'white'}
                style={{ marginStart:10 }} 
              ></Ionicons>
             
             <TextInput style={{
        
             marginStart:10,
             tintColor:'white',
             width:'90%'
             }} 
              onSubmitEditing={  ()=> {fetchData( SearchValue ) ; console.log(SearchValue) }}
               onChangeText={(newValue) =>  setSearchValue(newValue) }
               value={ SearchValue }
               onFocus={ () => setSearchFocused(true) }
               onBlur={ () => setSearchFocused(false) } /> 
          </View> 
          {/* end of serach container */}

          {/* start of FlatList */}



         { ShowList? <FlatList
          data={Employees}
          keyExtractor= { ( Employees )=> Employees.name }
          contentContainerStyle={{
          
           }}

           renderItem={( {item, index} ) => { 
          
             return <Pressable key={index} onPress={ ()=>{
               setEmployee(item);
               navigation.navigate('EmployeeDetails') 
               } }>
                  <Card 
                  profile_image={ item.profile_image }
                  username={item.username} 
                   companyName={item.address.street} 
                   ></Card>
               </Pressable>
            }}>
          </FlatList>: <Text style={{color:'white',fontSize:15,textAlign:'center'}} >Loading...</Text>}
          {/* endof FlatList */}
          </View>

  )
}

const styles = StyleSheet.create( {
   
} )

export default Employee