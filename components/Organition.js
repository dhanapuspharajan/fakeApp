import { View, Text , StyleSheet } from 'react-native'
import React from 'react'
import { EmployeeContextConsumer } from '../Context'
const Organition = () => {

  const [Employee, setEmployee] = EmployeeContextConsumer();

  return (
    <View  style={{ height:'100%',backgroundColor:'#1c1717' }} >
      
      <View style={{ display:'flex', flexDirection:'row', backgroundColor:'#1c1717',width:'100%',alignItems:'center'}}>
      <View style={{ margin:20  }}>
         <Text style={styles.text} >Company Name</Text>
         <Text style={{color:'red', 
         fontWeight:'bold',
         fontSize:15,
          marginBottom:10}}>About me</Text>
         <Text style={{color:'red',
          fontWeight:'bold',
          fontSize:15,
          marginBottom:10,
          }} >Business</Text>
      </View>

      <View style={{ margin:10,marginTop:20 }}>
         <Text style={styles.text}>-</Text>
         <Text style={styles.text}>-</Text>
         <Text style={styles.text}>-</Text>
      </View>

      <View style={{marginTop:10 ,flex:1}}>
        <Text style={styles.textNormal}>{Employee.company.name}</Text>
        <Text style={styles.textNormal}>{Employee.company.catchPhrase}</Text>
        <Text style={styles.textNormal}>{Employee.company.bs}</Text>
      </View>
   

    </View>
    </View>
  )
}


const  styles= StyleSheet.create({

  text:{
    fontWeight:'bold',
    fontSize:15,
   marginBottom:15
    
  },
  textNormal:{
    fontSize:15,
    marginBottom:5,  
    flexShrink:1  
  }
})

export default Organition