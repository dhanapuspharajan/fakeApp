import CheckBox from '@react-native-community/checkbox';
import React, { useEffect, useRef, useState } from 'react'
import { SafeAreaView ,StyleSheet, View, Text, TextInput, Animated, Easing} from 'react-native';


function Login() {
  
    const [toggleCheckBox, setToggleCheckBox] = useState(false);
    const [focused, setFocused] = useState(false);
    const [PasswordFocused, setPasswordFocused] =useState(false);
     const [Email, setEmail] = useState('');
     const [Password,  setPassword] = useState('');
   

     const focusAnim = useRef( new Animated.Value(0) ).current;
     const PassAnim = useRef( new Animated.Value(0) ).current;
     useEffect(()=> {
        Animated.timing( focusAnim, {
            toValue:focused? 1:0,
            duration:200,
            easing: Easing.bezier(0.4,0,0.2,1),
            useNativeDriver:false
        } ).start()

       
     },[ focusAnim, focused])
     
     useEffect(()=> {
        Animated.timing( PassAnim, {
            toValue:PasswordFocused? 1:0,
            duration:200,
            easing: Easing.bezier(0.4,0,0.2,1),
            useNativeDriver:false
        } ).start()
     },[PassAnim,PasswordFocused ])

  return (
      <SafeAreaView>
        <View>
         <View style={styles.topContainer} >
            <Text style={{color:'#fff',marginStart:30,fontSize:30,fontWeight:'bold'}} >Sign In</Text>
            <Text style={{fontWeight:'bold',color:'#fff',marginStart:30,marginTop:10}}>Please Login To Using App</Text>
         </View>

         <View style={styles.inputSection}>
             <Animated.View>
             <Animated.Text style={{ 
         zIndex:1,
        //  color:Email.length>0?'black':'grey',
          color: focusAnim.interpolate({ 
            inputRange:[0,1],
            outputRange:['grey','black']
           }),
         width:45,
         paddingStart:5,
         backgroundColor:'white',
        //  top:Email.length>0? 9 : 35,
        //  left:Email.length>0? 40:30,
          top: focusAnim.interpolate( { 
            inputRange:[0,1],
            outputRange:[35, 9]
           } ),

           left: focusAnim.interpolate({ 
            inputRange:[ 0,1 ],
            outputRange:[30,40]
            })
         }}>Email</Animated.Text>

      <View style={{
       marginHorizontal:10,
        backgroundColor:'white',
       borderRadius:20,
       shadowColor:'grey',
        elevation:8,
         borderColor:focused?'red':'',
         borderWidth:focused?1:0
    }}>
      <TextInput style={{
         marginStart:15,
        color:'red',
        height:50,
        borderRadius:20,
      }}
       placeholder={"Email"}
       onFocus={() => setFocused(true)}
       onBlur={ () => setFocused(false) }
       value={Email}
       onChangeText={(newValue) => setEmail(newValue )}
     
       ></TextInput>
    </View>   
             </Animated.View>
             <Animated.View >
             <Animated.Text style={{ 
         zIndex:1,
        //  color:Password.length>0?'black':'grey',
        color: PassAnim.interpolate( { 
            inputRange:[0,1],
            outputRange:['grey','black']
         } ),

         width:70,
         paddingStart:5,
         backgroundColor:'white',
        top:PassAnim.interpolate({ 
            inputRange:[0,1],
            outputRange:[ 35,9 ]
         }),
        //  left:Password.length>0? 40:30 
        left:PassAnim.interpolate( { 
            inputRange:[0,1],
            outputRange:[30,40 ]
         } )
         }}>Password</Animated.Text>
    
     <View style={{
       marginHorizontal:10,
        backgroundColor:'white',
       borderRadius:20,
       shadowColor:'grey',
        elevation:8,
       
        borderWidth:PasswordFocused?1:0,
        borderColor:PasswordFocused?'red':'',
    }}>
      <TextInput style={{
         marginStart:15,
        color:'red',
        height:50,
        borderRadius:20,
      }}
       placeholder={'Password'}
       onFocus={() => setPasswordFocused(true)}
       onBlur={ () => setPasswordFocused(false) }
       value={Password}
       secureTextEntry={true}
       onChangeText={(newValue) => setPassword(newValue)}
       ></TextInput>
    </View>
             </Animated.View>     
         </View> 
         {/*end of input */}
         <View>
            <View style={styles.forgetSection}>
            <View style={styles.forgetSection}>
            <CheckBox style={styles.checkbox}
               disabled={false}
               value={toggleCheckBox}
               tintColors={{ true: '#F15927', false: 'black' }}
               onValueChange={(n) => setToggleCheckBox(n)}
              ></CheckBox>
              <Text style={{color:'tomato',fontSize:15}} >Remember me</Text>
            </View>
             
               <Text style={{color:'blue',fontWeight:'bold'}}>Forget Password?</Text>
         </View>
            {/* end of forget section */}
    
            <View style={styles.loginBtnSection}>
                 <Text style={styles.loginBtn} >Sign in</Text>
                 <View style={{display:'flex',flexDirection:'row',marginStart:20,marginTop:30}}><Text style={{color:'red'}}>or </Text>
                 <Text  style={{color:'black'}}>Register a new account</Text></View>
            </View>
            {/* end of login section*/ }
         </View>
        </View>
      </SafeAreaView>
  )
}

const styles = StyleSheet.create({
     
    topContainer:{
        backgroundColor:'red',
        justifyContent:'center',
        height:300,
         borderBottomLeftRadius:50,
         borderBottomRightRadius:280
    },
    inputSection:{
    marginTop:15
    },
    forgetSection:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginHorizontal:10
    },
    checkbox:{
        tintColor:'#000',
        color:'#000'
    },
    loginBtnSection:{
        display:'flex',
        marginTop:100,
        width:200,
        textAlign:'center',
        justifyContent:'center',
        alignContent:'center',
        marginStart:'25%',
    
    },
    loginBtn:{
        color:'white',
        backgroundColor:'red',
        padding:5,
        borderRadius:20,
        width:200,
        height:50,
        textAlign:'center',
        fontSize:25
    },

    //
    CustomInputContainer:{
        marginHorizontal:10,
        backgroundColor:'white',
       borderRadius:20,
       shadowColor:'grey',
        elevation:10
      },
      TextInput:{
        marginStart:15,
        color:'black',
      }
})

export default Login;