import { View, Text, Image } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'

const Card = (props) => {

    const { username, companyName, profile_image } = props;

  return (
    <View  style={{ display:'flex',
    flexDirection:'row',
   alignItems:'center',
   justifyContent:'space-between',
   borderBottomColor:'grey',
   borderWidth:1,
   padding:10
    }} > 
    <View style={{ display:'flex', flexDirection:'row' }} >
    <View style={{ width:50, height:50 }} >
        <Image style={{width:50, height:50, borderRadius:50, backgroundColor:'grey'}} source={{ uri:profile_image } } ></Image>
      </View>
      <View style={{marginStart:15, marginTop:5}}>
      <Text style={{color:'white'}} >{username}</Text>
      <Text style={{fontSize:15, width:'100%',color:'grey'}} >{companyName}</Text>
      </View>
    </View>
     
        <View>
        <Ionicons  
        name='chevron-forward-sharp'
         color='white' 
         size={25} 
         > </Ionicons>
        </View>
       



    </View>
    
  )
}

export default Card