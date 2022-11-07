import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { EmployeeContextConsumer } from '../Context'

const Personal = () => {

  const [Employee, setEmployee] = EmployeeContextConsumer();

  return (
    // basic
    <View style={{ height:'100%', backgroundColor:'#1c1717' }}>
    <View style={{ display:'flex', flexDirection:'row', backgroundColor:'#1c1717',width:'100%',alignItems:'center'}}>
      <View style={{ margin:10  }}>
         <Text style={styles.text} >Name</Text>
         <Text style={styles.text}>Username</Text>
         <Text style={styles.text} >E-Mail</Text>
         <Text style={styles.text} >Phone</Text>
         <Text style={styles.text} >Website</Text>
      </View>

      <View style={{ margin:10 }}>
         <Text style={styles.text}>-</Text>
         <Text style={styles.text}>-</Text>
         <Text style={styles.text}>-</Text>
         <Text style={styles.text}>-</Text>
         <Text style={styles.text}>-</Text>
      </View>

      <View style={{ margin:10}}>
        <Text style={styles.textNormal}>{Employee.name}</Text>
        <Text style={styles.textNormal}>{Employee.username}</Text>
        <Text style={styles.textNormal}>{Employee.email}</Text>
        <Text style={styles.textNormal}>{Employee.phone}</Text>
        <Text style={styles.textNormal}>{Employee.website}</Text>
      </View>
   

    </View>
    {/* Personal */}
     <View>
      <Text style={{color:'red',fontSize:20, backgroundColor:'#1c1717',textAlign:'center'}}>Address</Text>
     </View>
     <View style={{ display:'flex', flexDirection:'row', backgroundColor:'#1c1717',width:'100%',alignItems:'center' }}>
      <View style={{ margin:10  }}>
         <Text style={styles.text} >Street</Text>
         <Text style={styles.text}>Suite</Text>
         <Text style={styles.text} >City</Text>
         <Text style={styles.text} >ZipCode</Text>
      </View>

      <View style={{ margin:10 }}>
         <Text style={styles.text}>-</Text>
         <Text style={styles.text}>-</Text>
         <Text style={styles.text}>-</Text>
         <Text style={styles.text}>-</Text>
      </View>

      <View style={{ margin:10}}>
        <Text style={styles.textNormal}>{Employee.address.street}</Text>
        <Text style={styles.textNormal}>{Employee.address.suite}</Text>
        <Text style={styles.textNormal}>{Employee.address.city}</Text>
        <Text style={styles.textNormal}>{Employee.address.zipcode}</Text>
      </View>
   

    </View>
    {/* address */}
    <View>
      <Text style={{color:'red',fontSize:20, backgroundColor:'#1c1717',textAlign:'center'}}>Geo</Text>
     </View>
     <View style={{ display:'flex', flexDirection:'row', backgroundColor:'#1c1717',width:'100%',alignItems:'center' }}>
      <View style={{ margin:10  }}>
         <Text style={styles.text} >Latitude</Text>
         <Text style={styles.text}>Longitude</Text>
      </View>

      <View style={{ margin:10 }}>
         <Text style={styles.text}>-</Text>
         <Text style={styles.text}>-</Text>
      
      </View>

      <View style={{ margin:10}}>
        <Text style={styles.textNormal}>{Employee.address.geo.lat}</Text>
        <Text style={styles.textNormal}>{Employee.address.geo.lng}</Text>
      </View>
   

    </View>
    </View>
  )
}

const  styles= StyleSheet.create({

  text:{
    fontWeight:'bold',
    fontSize:15,
    marginBottom:10
  },
  textNormal:{
    fontSize:15,
    marginBottom:10
  }
})

export default Personal