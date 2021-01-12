import * as React from 'react';
import { Text, View,Image,StyleSheet,Button,Alert,SafeAreaView,props,ScrollView,TouchableOpacity,ImageBackground,TouchableHighlight} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
function Login(){
    return (
        <View style={styles.container}>
        <ImageBackground source={{uri:'https://m.media-amazon.com/images/G/31/img2020/fashion/WA_2020/Ethnic_store/PC_topbanner._SX3000_QL85_.jpg'}} style={styles.backgroundImage1}>
        
      
        <Image source={{ uri: 'https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2020/9/5/c7bf26ba-f2d7-46f2-b85b-cdc014cd919f1599296126393-dk.jp' }} style={styles.logo} />
        
  
        <TextInput placeholder='Enter Username' placeholderTextColor="black" style={{ height:40,width:300,
       borderColor: 'blue', borderWidth: 5,paddingLeft:10,margin:10,borderRadius:20,borderWidth:1}} />
       
                  <TextInput placeholder="Password" 
                  placeholderTextColor="black"
              returnKeyType='go'
       secureTextEntry 
             autoCorrect={false}
             style={{ height: 40,width:300, borderColor: 'blue', borderWidth: 5,paddingLeft:10,margin:10,borderRadius:20,borderWidth:1 }}
             />
              <TouchableOpacity>
            <Text style={styles.forgot}>Forgot Password?</Text>
          </TouchableOpacity>
          
          
          <view style = {{margin:10}}/>
  <TouchableOpacity style={styles.button}
          onPress={() => navigation.navigate('Home')}>
            <Text style={styles.loginText}>Login</Text>
  
            
          </TouchableOpacity>
          <TouchableOpacity>
          <Text style={styles.loginText}>___________________ OR ___________________</Text> 
          </TouchableOpacity>
   <view style = {{margin:10}}/>
          <TouchableOpacity style={styles.FacebookStyle} activeOpacity={0.5}>
          <Image 
           source={{uri:'https://reactnativecode.com/wp-content/uploads/2017/10/Facebook_Login_Button.png'}}
            style={styles.ImageIconStyle} 
            />
             <View style={styles.SeparatorLine} />
   
   <Text style={styles.TextStyle}> Login Using Facebook </Text>
  
  </TouchableOpacity>
  <view style = {{margin:10}}/>
  <TouchableOpacity style={styles.GooglePlusStyle} activeOpacity={0.5}>
   
           <Image 
            source={{uri:'https://reactnativecode.com/wp-content/uploads/2017/10/Google_Plus.png'}}
            style={styles.ImageIconStyle} 
            />
   
           <View style={styles.SeparatorLine} />
   
           <Text style={styles.TextStyle}> Login Using Google Plus </Text>
   
         </TouchableOpacity>
          </ImageBackground>
      </View>
    );
}
function Sinup() {
  return(
  <View style={styles.container}>        
    <TouchableOpacity
      onPress={() => alert('You can pick a photo from your mobile!')}
      style={{ backgroundColor: '#CE93D8',borderColor:'violet',borderRadius:20,borderWidth:1,width:200,alignItems:'center',height:30,justifyContent:"center" }}>
      <Text style={{ fontSize:18, color: '#000' }}>Select your own image!</Text>
    </TouchableOpacity>

    <TextInput placeholder='Enter Your Name' placeholderTextColor="violet" style={{ height:50,width:300,
   borderColor: 'pink', borderWidth: 5,paddingLeft:10,margin:10,borderRadius:20,borderWidth:1}} />
   <TextInput placeholder='Enter Emai id/Phno' placeholderTextColor="violet" style={{ height:50,width:300,
   borderColor: 'pink', borderWidth: 5,paddingLeft:10,margin:10,borderRadius:20,borderWidth:1}} />
              <TextInput placeholder="Password" 
              placeholderTextColor="violet"
          returnKeyType='go'
   secureTextEntry 
         autoCorrect={false}
         style={{ height: 50,width:300, borderColor: 'pink', borderWidth: 5,paddingLeft:10,margin:10,borderRadius:20,borderWidth:1 }}
         />

    <Button
      color="#EC407A"
      title="signup" onPress={() => Alert.alert('u r signed up!')} />
      <Text style={styles.taglineText}>HEART OF PERFECT MUSIC</Text>
      <Text style={styles.cpText}>copywrites--shanmukhidamerla</Text>
       <Text style={styles.cpText}>for enquiry contact-phn:1234567890</Text>
  </View>
);
}
const styles = StyleSheet.create({
  container: {
    marginTop:25,
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headingText: {
    fontSize:20,
    fontWeight:'bold',
    color:'white',
    padding:20,
    justifyContent: 'center',

  },
  taglineText: {
    fontSize:15,
    fontWeight:'bold',
    color:'violet',
    padding:30,  
  },
  cpText:{
    fontSize:10,
    fontWeight:'bold',
    color:'grey',
    alignSelf:"center",
    marginBottom:2
  },
});

  
  