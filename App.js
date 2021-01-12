import React, { Component } from 'react';
import { StyleSheet,TextInput, Linking,View,Image,Alert,TouchableOpacity,TouchableHighlight,ScrollView, Text,Button,SafeAreaView,ImageBackground } from 'react-native';
import { NavigationContainer,DefaultTheme} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';
import { SocialIcon } from 'react-native-elements';
import Login from './components/Login';
import Sinup from './components/Sinup';
import StarRating from './src/StarRating';
import AddUserScreen from './screens/AddUserScreen'
import firebase from './database/firebaseDb'
const Separator = () => (
  <View style={styles.separator} />
);
const MyTheme = {
  ...DefaultTheme,
  dark: false,
  colors: {
    primary: 'rgb(255, 45, 85)',
    background: 'rgb(242, 242, 242)',
    card: 'rgb(255, 255, 255)',
    text: 'rgb(28, 28, 30)',
    border: 'rgb(199, 199, 204)',
    notification: 'rgb(255, 69, 58)',
  },
};
    function homeStackScreen({navigation}){
      return (
        <View style={styles.container}>
        <ImageBackground source={{uri:'https://lh3.googleusercontent.com/proxy/wwIcZjucRVdo-DfY36LZxdYyAtqCY8-8v3jC2SaEB0-mbOio2mTSnYnaxcmhsnLcieXk6Nx92KOVXOySRwvZcIJhIEnA93hPWJAhaAcx3lcBun-8XNH_T6qbIb7ZtkkQBn5bo2Nkek1vUus'}} style={styles.backgroundImage1}>
        <Image
       style={{margin:10, alignSelf:"center"}}
       source={{uri:'https://indiaemporim.com/skin/frontend/default/newindia/images/fresh/new-arrivals-1.gif'}}
       onPress={() => navigation.navigate('Home')}/>  
          <Separator />
          <ScrollView>
          <Text style={{color:"#054f7d",fontSize:24,textAlign:"Left"}}>Recommended for you</Text>
      <ScrollView horizontal={true} >
         
     
         <View style={styles.rightContainer}>
         <TouchableOpacity onPress={() => navigation.navigate('Tenet')}>
         <Image
            source={{uri:'https://sm.ign.com/ign_me/gallery/t/tenet-imag/tenet-images_7jnp.jpg'}}
             style={styles.HomeImageIconStyle}
           />
             
        
            <Text style={{color:"#054f7d",fontSize:15,textAlign:"center"}}>Tenet</Text>
            <Text style={{color:"#054f7d",fontSize:15,textAlign:"center"}}>English</Text>
            <Text style={{color:"#BBBBBB",fontSize:15,textAlign:"center"}}>Adveture/Action</Text>
         
            <Button
            placeholderTextColor = "Black"
            color = "#054f7d"
            title="Watch Trailer"
            onPress={ ()=>{ Linking.openURL("https://www.youtube.com/watch?v=AZGcmvrTX9M")}}
          />
            
         </TouchableOpacity>
         </View>
         <View style={styles.rightContainer}>
         <TouchableOpacity onPress={() => navigation.navigate('DRStrange2')}>
         <Image
            source={{uri:'https://static1.srcdn.com/wordpress/wp-content/uploads/2020/06/Doctor-Strange-2-Wanda-Fan-poster.jpg?q=50&fit=crop&w=740&h=922'}}
             style={styles.HomeImageIconStyle}
           />
             
             <Text style={{color:"#054f7d",fontSize:15,textAlign:"center"}}>DR Strange-2</Text>
            <Text style={{color:"#054f7d",fontSize:15,textAlign:"center"}}>English</Text>
            <Text style={{color:"#BBBBBB",fontSize:15,textAlign:"center"}}>Adveture/Action</Text>
            <Button
            placeholderTextColor = "Black"
            color = "#054f7d"
            title="Watch Trailer"
            Radius = "7"
            paddingVertical= '3'
            paddingHorizontal = '5'
            onPress={ ()=>{ Linking.openURL("https://www.youtube.com/watch?v=zTgdtmkMT2g")}}
          />
    </TouchableOpacity>
         </View>
         <View style={styles.rightContainer}>
         <TouchableOpacity onPress={() => navigation.navigate('V')}>
         <Image
            source={{uri:'https://1847884116.rsc.cdn77.org/telugu/home/nani_v_19082020_c.jpg'}}
             style={styles.HomeImageIconStyle}
           />
         
              <Text style={{color:"#054f7d",fontSize:15,textAlign:"center"}}>V</Text>
            <Text style={{color:"#054f7d",fontSize:15,textAlign:"center"}}>Telugu</Text>
            <Text style={{color:"#BBBBBB",fontSize:15,textAlign:"center"}}>Thiller/Action</Text>
            <Button
            placeholderTextColor = "Black"
            color = "#054f7d"
            title="Watch Trailer"
            onPress={ ()=>{ Linking.openURL("https://www.youtube.com/watch?v=eBcYKDUT8fs")}}
          />
         </TouchableOpacity>
         </View>
         <View style={styles.rightContainer}>
         <TouchableOpacity onPress={() => navigation.navigate('Red')}>
         <Image
            source={{uri:'https://www.timessouth.com/wp-content/uploads/2019/10/red-ram-firstlook-poster.jpg'}}
             style={styles.HomeImageIconStyle}
           />
         
        
              <Text style={{color:"#054f7d",fontSize:15,textAlign:"center"}}>Red</Text>
            <Text style={{color:"#054f7d",fontSize:15,textAlign:"center"}}>Telugu</Text>
            <Text style={{color:"#BBBBBB",fontSize:15,textAlign:"center"}}>Thiller/Action</Text>
            <Button
            placeholderTextColor = "Black"
            color = "#054f7d"
            title="Watch Trailer"
            onPress={ ()=>{ Linking.openURL("https://www.youtube.com/watch?v=n1gkahx6Xlg")}}
          />
         </TouchableOpacity>
         </View>
         </ScrollView>
         <Separator />
         <Text style={{color:"#054f7d",fontSize:24,textAlign:"Left"}}>Popular Movies</Text>
         <ScrollView horizontal={true} >
         <View style={styles.rightContainer}>
         <TouchableOpacity onPress={() => navigation.navigate('Nishabdam')}>
         <Image
            source={{uri:'https://upload.wikimedia.org/wikipedia/en/f/f2/Nishabdham_poster.jpg'}}
             style={styles.HomeImageIconStyle}
           />
        
              <Text style={{color:"#054f7d",fontSize:15,textAlign:"center"}}>Nishabdam</Text>
            <Text style={{color:"#054f7d",fontSize:15,textAlign:"center"}}>English/Telugu</Text>
            <Text style={{color:"#BBBBBB",fontSize:15,textAlign:"center"}}>Thiller/Drama</Text>
            <Button
            placeholderTextColor = "Black"
            color = "#054f7d"
            title="Watch Trailer"
            onPress={ ()=>{ Linking.openURL("https://www.youtube.com/watch?v=azUa-Qpi-Bo")}}
          />
         </TouchableOpacity>
         </View>
         
         <View style={styles.rightContainer}>
         <TouchableOpacity onPress={() => navigation.navigate('Master')}>
         <Image
            source={{uri:'https://www.deccanherald.com/sites/dh/files/articleimages/2020/06/05/Master-release-1591344581.jpg'}}
             style={styles.HomeImageIconStyle}
           />
              <Text style={{color:"#054f7d",fontSize:15,textAlign:"center"}}>Master</Text>
            <Text style={{color:"#054f7d",fontSize:15,textAlign:"center"}}>Telugu/Tamil</Text>
            <Text style={{color:"#BBBBBB",fontSize:15,textAlign:"center"}}>Drama/Action</Text>
            <Button
            placeholderTextColor = "Black"
            color = "#054f7d"
            title="Watch Trailer"
            onPress={ ()=>{ Linking.openURL("https://www.youtube.com/watch?v=YArWM642EyQ")}}
          />
         </TouchableOpacity>
         </View> 
         <View style={styles.rightContainer}>
         <TouchableOpacity onPress={() => navigation.navigate('BlackWidow')}>
         <Image
            source={{uri:'https://terrigen-cdn-dev.marvel.com/content/prod/1x_masonry/rachel_ons_poster_02.jpg'}}
             style={styles.HomeImageIconStyle}
           />
         <Text style={{color:"#054f7d",fontSize:15,textAlign:"center"}}>Black Widow</Text>
            <Text style={{color:"#054f7d",fontSize:15,textAlign:"center"}}>English</Text>
            <Text style={{color:"#BBBBBB",fontSize:15,textAlign:"center"}}>Adveture/Action</Text>
            <Button
            placeholderTextColor = "Black"
            color = "#054f7d"
            title="Watch Trailer"
            onPress={ ()=>{ Linking.openURL("https://www.youtube.com/watch?v=ybji16u608U")}}
          />
         </TouchableOpacity>
         </View>
         <View style={styles.rightContainer}>
         <TouchableOpacity onPress={() => navigation.navigate('KGF2')}>
         <Image
            source={{uri:'https://m.hindustantimes.com/rf/image_size_444x250/HT/p2/2020/08/22/Pictures/_c7b72eb2-e45b-11ea-aae4-2b178f7f5029.jpg'}}
             style={styles.HomeImageIconStyle}
           />
       
              <Text style={{color:"#054f7d",fontSize:15,textAlign:"center"}}>KGF Chapter-2</Text>
            <Text style={{color:"#054f7d",fontSize:15,textAlign:"center"}}>Hindi/Telugu</Text>
            <Text style={{color:"#BBBBBB",fontSize:15,textAlign:"center"}}>Historical/Action</Text>
            <Button
            placeholderTextColor = "Black"
            color = "#054f7d"
            title="Watch Trailer"
            onPress={ ()=>{ Linking.openURL("https://www.youtube.com/watch?v=jmP731lxOzg")}}
          />
         </TouchableOpacity>
         </View>
         </ScrollView>  
    
    
         <Separator />
         <Text style={{color:"#054f7d",fontSize:24,textAlign:"Left"}}>Other Movies</Text>
      <ScrollView horizontal={true} >
      <View style={styles.rightContainer}>
      <TouchableOpacity onPress={() => navigation.navigate('RRR')}>
         <Image
            source={{uri:'https://upload.wikimedia.org/wikipedia/en/d/d7/RRR_Poster.jpg'}}
             style={styles.HomeImageIconStyle}
           />
              <Text style={{color:"#054f7d",fontSize:15,textAlign:"center"}}>RRR</Text>
            <Text style={{color:"#054f7d",fontSize:15,textAlign:"center"}}>Telugu/Hindi</Text>
            <Text style={{color:"#BBBBBB",fontSize:15,textAlign:"center"}}>Fiction/Action</Text>
            <Button
            placeholderTextColor = "Black"
            color = "#054f7d"
            title="Watch Trailer"
            onPress={ ()=>{ Linking.openURL("https://www.youtube.com/watch?v=2_BkCz3OnlY")}}
          />
         </TouchableOpacity>
         </View>
         <View style={styles.rightContainer}>
         <TouchableOpacity onPress={() => navigation.navigate('Avatar2')}>
         <Image
            source={{uri:'https://i.ytimg.com/vi/AxLH0lXEGAY/maxresdefault.jpg'}}
             style={styles.HomeImageIconStyle}
           />
              <Text style={{color:"#054f7d",fontSize:15,textAlign:"center"}}>Avatar-2</Text>
            <Text style={{color:"#054f7d",fontSize:15,textAlign:"center"}}>English</Text>
            <Text style={{color:"#BBBBBB",fontSize:15,textAlign:"center"}}>Adveture/Action</Text>
            <Button
            placeholderTextColor = "Black"
            color = "#054f7d"
            title="Watch Trailer"
            onPress={ ()=>{ Linking.openURL("https://www.youtube.com/watch?v=AxLH0lXEGAY")}}
          />
         </TouchableOpacity>
         </View>
         <View style={styles.rightContainer}>
         <TouchableOpacity onPress={() => navigation.navigate('Sarkaaruvaaripaata')}>
         <Image
            source={{uri:'https://i2.cinestaan.com/image-bank/1500-1500/173001-174000/173518.jpg'}}
             style={styles.HomeImageIconStyle}
           />
              <Text style={{color:"#054f7d",fontSize:15,textAlign:"center"}}>Sarkaru Vaari paata</Text>
            <Text style={{color:"#054f7d",fontSize:15,textAlign:"center"}}>Telugu</Text>
            <Text style={{color:"#BBBBBB",fontSize:15,textAlign:"center"}}>Drama/Action</Text>
            <Button
            placeholderTextColor = "Black"
            color = "#054f7d"
            title="Watch Trailer"
            onPress={ ()=>{ Linking.openURL("https://www.youtube.com/watch?v=y80uOMCIVFE")}}
          />
         </TouchableOpacity>
         </View>
         <View style={styles.rightContainer}>
         <TouchableOpacity onPress={() => navigation.navigate('vakeelsaab')}>
         <Image
            source={{uri:'https://www.filmibeat.com/img/popcorn/movie_posters/vakeelsaab-20200303085530-15138.jpg'}}
             style={styles.HomeImageIconStyle}
           />
              <Text style={{color:"#054f7d",fontSize:15,textAlign:"center"}}>vakeelsaab</Text>
            <Text style={{color:"#054f7d",fontSize:15,textAlign:"center"}}>Telugu</Text>
            <Text style={{color:"#BBBBBB",fontSize:15,textAlign:"center"}}>Drama/Action</Text>
            <Button
            placeholderTextColor = "Black"
            color = "#054f7d"
            title="Watch Trailer"
            onPress={ ()=>{ Linking.openURL("https://www.youtube.com/watch?v=1rcJgndYjN8")}}
          />
         </TouchableOpacity>
         </View> 
      </ScrollView>
    
      
      
        <Separator />
        
           </ScrollView>
           </ImageBackground>
      </View>
       );
    }
  
    function Snacks({ navigation }) {
      return (
        <View style={styles.container2}>
       
          <Separator />
          <Text style={{color:"#008000",fontSize:24,textAlign:"center"}}>VEG</Text>
          <ScrollView>
      <ScrollView horizontal={true} >
         
    
         <View style={styles.rightContainer}>
         <TouchableOpacity onPress={() => navigation.navigate('')}>
         <Image
            source={{uri:'https://samosaexpress.co.in/wp-content/uploads/2017/11/veg-burger-combo.jpg'}}
             style={styles.HomeImageIconStyle}
           />
             
        
            <Text style={{color:"#054f7d",fontSize:15,textAlign:"center"}}>Veg Combo</Text>
            <Text style={{color:"#054f7d",fontSize:15,textAlign:"center"}}>199/-</Text>     
            <Button
            placeholderTextColor = "Black"
            color = "#054f7d"
            title="Order"
            onPress={() => navigation.navigate('Confirmation1')}
          />
            
         </TouchableOpacity>
         </View>
         <View style={styles.rightContainer}>
         <TouchableOpacity onPress={() => navigation.navigate('')}>
         <Image
            source={{uri:'https://floursandfrostings.com/wp-content/uploads/2018/03/IMG_20180306_084523_451.jpg'}}
             style={styles.HomeImageIconStyle}
           />
             
        
            <Text style={{color:"#054f7d",fontSize:15,textAlign:"center"}}>Veg puff</Text>
            <Text style={{color:"#054f7d",fontSize:15,textAlign:"center"}}>50/-(2nos)</Text>     
            <Button
            placeholderTextColor = "Black"
            color = "#054f7d"
            title="Order"
            onPress={() => navigation.navigate('Confirmation1')}
          />
    </TouchableOpacity>
         </View>
         <View style={styles.rightContainer}>
         <TouchableOpacity onPress={() => navigation.navigate('')}>
         <Image
            source={{uri:'https://5.imimg.com/data5/HG/CY/HX/SELLER-64644135/paper-popcorn-tub-30-oz--500x500.png'}}
             style={styles.HomeImageIconStyle}
           />
             
        
            <Text style={{color:"#054f7d",fontSize:15,textAlign:"center"}}>Popcorn Tub</Text>
            <Text style={{color:"#054f7d",fontSize:15,textAlign:"center"}}>80/-</Text>     
            <Button
            placeholderTextColor = "Black"
            color = "#054f7d"
            title="Order"
            onPress={() => navigation.navigate('Confirmation1')}
          />
         </TouchableOpacity>
         </View>
         </ScrollView>
         <Separator />
         <Text style={{color:"#FF0000",fontSize:24,textAlign:"center"}}>NON-VEG</Text>
         <ScrollView horizontal={true} >
         
         <View style={styles.rightContainer}>
         <TouchableOpacity onPress={() => navigation.navigate('')}>
         <Image
            source={{uri:'https://samosaexpress.co.in/wp-content/uploads/2017/11/chicken-burger-combo-rs-100.jpg'}}
             style={styles.HomeImageIconStyle}
           />
             
        
            <Text style={{color:"#054f7d",fontSize:15,textAlign:"center"}}>Non veg Combo</Text>
            <Text style={{color:"#054f7d",fontSize:15,textAlign:"center"}}>299/-</Text>     
            <Button
            placeholderTextColor = "Black"
            color = "#054f7d"
            title="Order"
            onPress={() => navigation.navigate('Confirmation1')}
          />
         </TouchableOpacity>
         </View>
         
         <View style={styles.rightContainer}>
         <TouchableOpacity onPress={() => navigation.navigate('')}>
         <Image
            source={{uri:'https://1.bp.blogspot.com/_Bsj07jy57o0/TIZVZK5ExiI/AAAAAAAAArM/Xj_zmWs8-jE/s1600/chicken+puffs.JPG'}}
             style={styles.HomeImageIconStyle}
           />
             
        
            <Text style={{color:"#054f7d",fontSize:15,textAlign:"center"}}>chicken puff</Text>
            <Text style={{color:"#054f7d",fontSize:15,textAlign:"center"}}>60/-(2nos)</Text>     
            <Button
            placeholderTextColor = "Black"
            color = "#054f7d"
            title="Order"
            onPress={() => navigation.navigate('Confirmation1')}
          />
         </TouchableOpacity>
         </View> 
         <View style={styles.rightContainer}>
         <TouchableOpacity onPress={() => navigation.navigate('')}>
         <Image
            source={{uri:'https://www.indianhealthyrecipes.com/wp-content/uploads/2018/07/popcorn-chicken-recipe-480x270.jpg'}}
             style={styles.HomeImageIconStyle}
           />
             
        
            <Text style={{color:"#054f7d",fontSize:15,textAlign:"center"}}>chicken popcorn</Text>
            <Text style={{color:"#054f7d",fontSize:15,textAlign:"center"}}>180/-</Text>     
            <Button
            placeholderTextColor = "Black"
            color = "#054f7d"
            title="Order"
            onPress={() => navigation.navigate('Confirmation1')}
          />
         </TouchableOpacity>
         </View>
         </ScrollView>  
    
    
         <Separator />
         <Text style={{color:"#0000FF",fontSize:24,textAlign:"center"}}>BEVERAGES</Text>
      <ScrollView horizontal={true} >
      
         <View style={styles.rightContainer}>
         <TouchableOpacity onPress={() => navigation.navigate('')}>
         <Image
            source={{uri:'https://5.imimg.com/data5/AQ/RO/MY-12951225/1-litre-mineral-water-500x500.jpg'}}
             style={styles.HomeImageIconStyle}
           />
             
        
            <Text style={{color:"#054f7d",fontSize:15,textAlign:"center"}}>Water</Text>
            <Text style={{color:"#054f7d",fontSize:15,textAlign:"center"}}>20/-</Text>     
            <Button
            placeholderTextColor = "Black"
            color = "#054f7d"
            title="Order"
            onPress={() => navigation.navigate('Confirmation1')}
          />
         </TouchableOpacity>
         </View>
         <View style={styles.rightContainer}>
         <TouchableOpacity onPress={() => navigation.navigate('')}>
         <Image
            source={{uri:'https://thumbs.dreamstime.com/z/bottles-global-soft-drink-brands-poznan-poland-apr-including-products-coca-cola-company-pepsico-114614624.jpg'}}
             style={styles.HomeImageIconStyle}
           />
             
        
            <Text style={{color:"#054f7d",fontSize:15,textAlign:"center"}}>CoolDrinks</Text>
            <Text style={{color:"#054f7d",fontSize:15,textAlign:"center"}}>60/-(500ml)</Text>     
            <Button
            placeholderTextColor = "Black"
            color = "#054f7d"
            title="Order"
            onPress={() => navigation.navigate('Confirmation1')}
          />
         </TouchableOpacity>
         </View>
         <View style={styles.rightContainer}>
         <TouchableOpacity onPress={() => navigation.navigate('')}>
         <Image
            source={{uri:'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/if1gfdajo6ydxgx5ioou'}}
             style={styles.HomeImageIconStyle}
           />
             
        
            <Text style={{color:"#054f7d",fontSize:15,textAlign:"center"}}>ThickShake</Text>
            <Text style={{color:"#054f7d",fontSize:15,textAlign:"center"}}>180/-</Text>     
            <Button
            placeholderTextColor = "Black"
            color = "#054f7d"
            title="Order"
            onPress={() => navigation.navigate('Confirmation1')}
          />
         </TouchableOpacity>
         </View>
    
      </ScrollView>
    
      
      
        <Separator />
        
           </ScrollView>
           </View>
       );
    }
    function Tenet({ navigation }) {
      return (
        <View style={{ flex: 1, alignItems: 'Left'}}>
      <Image
            source={{uri:'https://sm.ign.com/ign_me/gallery/t/tenet-imag/tenet-images_7jnp.jpg'}}
             style={styles.HomeImageIconStyle}
           />
           <Text style={{color:"#054f7d",fontSize:15,textAlign:"Left"}}>Tenet</Text>
            <Text style={{color:"#054f7d",fontSize:15,textAlign:"Left"}}>English</Text>
            <Text style={{color:"#BBBBBB",fontSize:15,textAlign:"Left"}}>Adveture/Action</Text>
             <StarRating ratings={3} reviews={573} />
           
           <Button
            placeholderTextColor = "Black"
            color = "#054f7d"
            title="Book My Tickets"
            onPress={() => navigation.navigate('Confirmation')}
          />
           <View style = {{margin:10}}/>
             <Button
            placeholderTextColor = "Black"
            color = "#054f7d"
            title="Order Snacks"
            onPress={() => navigation.navigate('Snacks')}
          />
          
             <Text style={{color:"#054f7d",fontSize:25,textAlign:"Left"}}>Short Description About The Film</Text>
           <Text style={{fontSize:15,textAlign:"Left"}}>Tenet is a 2020 action-thriller and science fiction film written and directed by Christopher Nolan, who produced it with Emma Thomas. A co-production between the United Kingdom and United States, it stars John David Washington, Robert Pattinson, Elizabeth Debicki, Dimple Kapadia, Michael Caine, and Kenneth Branagh.The plot follows a secret agent (Washington) as he manipulates the flow of time to prevent World War III.Nolan took more than five years to write the screenplay after deliberating about Tenet's central ideas for over a decade. Pre-production began in late 2018, casting in March 2019, and principal photography lasted three months in Denmark, Estonia, India, Italy, Norway, the United Kingdom, and United States, from May to November. Cinematographer Hoyte van Hoytema shot on 70 mm and IMAX. Scenes of time manipulation were filmed both backwards and forwards. In excess of a hundred vessels and thousands of extras were used</Text>
         
        </View>
      );
    }
    function DRStrange2({ navigation }) {
      return (
        <View style={{ flex: 1, alignItems: 'Left'}}>
      <Image
            source={{uri:'https://static1.srcdn.com/wordpress/wp-content/uploads/2020/06/Doctor-Strange-2-Wanda-Fan-poster.jpg?q=50&fit=crop&w=740&h=922'}}
             style={styles.HomeImageIconStyle}
           />
           <Text style={{color:"#054f7d",fontSize:15,textAlign:"Left"}}>DR Strange-2</Text>
            <Text style={{color:"#054f7d",fontSize:15,textAlign:"Left"}}>English</Text>
            <Text style={{color:"#BBBBBB",fontSize:15,textAlign:"Left"}}>Sci-Fi/Action</Text>
             <StarRating ratings={3} reviews={573} />
           
           <Button
            placeholderTextColor = "Black"
            color = "#054f7d"
            title="Book My Tickets"
            onPress={() => navigation.navigate('Confirmation')}
          />
           <View style = {{margin:10}}/>
             <Button
            placeholderTextColor = "Black"
            color = "#054f7d"
            title="Order Snacks"
            onPress={() => navigation.navigate('Snacks')}
          />
          
             <Text style={{color:"#054f7d",fontSize:25,textAlign:"Left"}}>Short Description About The Film</Text>
           <Text style={{fontSize:15,textAlign:"Left"}}>The sequel was originally set for release on May 7, 2021, before being pushed back to November 5, 2021 due to Black Widow's delay.This was temporarily thrown into limbo, and not just because director Scott Derrickson left the sequel over "creative differences", but the general state of the world.However, Doctor Strange and the Multiverse of Madness pre-production is set to remain on schedule, and the movie is still aiming to start filming in June Derrickson remains on board as an executive producer and he wrote on Twitter: "Marvel and I have mutually agreed to part ways on Doctor Strange: In the Multiverse of Madness due to creative differences. I am thankful for our collaboration and will remain on as EP.</Text>
        </View>
      );
    }
    function V({ navigation }) {
      return (
        <View style={{ flex: 1, alignItems: 'Left'}}>
      <Image
            source={{uri:'https://1847884116.rsc.cdn77.org/telugu/home/nani_v_19082020_c.jpg'}}
             style={styles.HomeImageIconStyle}
           />
           <Text style={{color:"#054f7d",fontSize:15,textAlign:"Left"}}>V</Text>
            <Text style={{color:"#054f7d",fontSize:15,textAlign:"Left"}}>Telugu</Text>
            <Text style={{color:"#BBBBBB",fontSize:15,textAlign:"Left"}}>thriller/Action</Text>
             <StarRating ratings={3} reviews={573} />
           
           <Button
            placeholderTextColor = "Black"
            color = "#054f7d"
            title="Book My Tickets"
            onPress={() => navigation.navigate('Confirmation')}
          />
           <View style = {{margin:10}}/>
             <Button
            placeholderTextColor = "Black"
            color = "#054f7d"
            title="Order Snacks"
            onPress={() => navigation.navigate('Snacks')}
          />
          
             <Text style={{color:"#054f7d",fontSize:25,textAlign:"Left"}}>Short Description About The Film</Text>
           <Text style={{fontSize:15,textAlign:"Left"}}>V is a 2020 Indian Telugu-language action thriller film[3][4] written and directed by Mohana Krishna Indraganti, produced by Dil Raju under the banner of Sri Venkateswara Creations. The film stars Nani, Sudheer Babu, Nivetha Thomas and Aditi Rao Hydari along with Vennela Kishore and Tanikella Bharani in supporting roles. The film's score is composed by S. Thaman, with the soundtrack album being composed by Amit Trivedi, while cinematography is handled by P. G. Vinda and editing done by Marthand K. Venkatesh. It is Nani's 25th film as a lead actor, in which he plays an antagonist for the first time.[5][6][7] The film was released on Amazon Prime Video on 5 September 2020.</Text>
        </View>
      );
    }
    function Red({ navigation }) {
      return (
        <View style={{ flex: 1, alignItems: 'Left'}}>
      <Image
            source={{uri:'https://www.timessouth.com/wp-content/uploads/2019/10/red-ram-firstlook-poster.jpg'}}
             style={styles.HomeImageIconStyle}
           />
           <Text style={{color:"#054f7d",fontSize:15,textAlign:"Left"}}>Red</Text>
            <Text style={{color:"#054f7d",fontSize:15,textAlign:"Left"}}>Telugu</Text>
            <Text style={{color:"#BBBBBB",fontSize:15,textAlign:"Left"}}>thriller/Action</Text>
             <StarRating ratings={3} reviews={573} />
           
           <Button
            placeholderTextColor = "Black"
            color = "#054f7d"
            title="Book My Tickets"
            onPress={() => navigation.navigate('Confirmation')}
          />
           <View style = {{margin:10}}/>
             <Button
            placeholderTextColor = "Black"
            color = "#054f7d"
            title="Order Snacks"
            onPress={() => navigation.navigate('Snacks')}
          />
          
             <Text style={{color:"#054f7d",fontSize:25,textAlign:"Left"}}>Short Description About The Film</Text>
           <Text style={{fontSize:15,textAlign:"Left"}}>Red is an upcoming Indian Telugu-language action thriller film directed by Kishore Tirumala and co-produced by Krishna Chaitanya and Sravanthi Ravi Kishore under Sri Sravanthi Movies.[1] An official remake of the 2019 Tamil-language film Thadam, it stars Ram Pothineni in a double role alongside Nivetha Pethuraj, Malvika Sharma and Amritha Aiyer.[2] The story has been written by Magizh Thirumeni who also wrote and directed the original film, and the music has been composed by Mani Sharma. Sameer Reddy handled the cinematography, while Peter Hein choreographed the action sequences.[3] It is Ram's eighteenth film as an actor.[4] The film went on floors from 14 November 2019, after the first shot was clapped by Puri Jagannadh and Charmme Kaur on 30 October 2019.</Text>
        </View>
      );
    }
    function Nishabdam({ navigation }) {
      return (
        <View style={{ flex: 1, alignItems: 'Left'}}>
      <Image
            source={{uri:'https://upload.wikimedia.org/wikipedia/en/f/f2/Nishabdham_poster.jpg'}}
             style={styles.HomeImageIconStyle}
           />
           <Text style={{color:"#054f7d",fontSize:15,textAlign:"Left"}}>Nishabdam</Text>
            <Text style={{color:"#054f7d",fontSize:15,textAlign:"Left"}}>English/Telugu</Text>
            <Text style={{color:"#BBBBBB",fontSize:15,textAlign:"Left"}}>thriller/Drama</Text>
             <StarRating ratings={3} reviews={573} />
           
           <Button
            placeholderTextColor = "Black"
            color = "#054f7d"
            title="Book My Tickets"
            onPress={() => navigation.navigate('Confirmation')}
          />
           <View style = {{margin:10}}/>
             <Button
            placeholderTextColor = "Black"
            color = "#054f7d"
            title="Order Snacks"
            onPress={() => navigation.navigate('Snacks')}
          />
          
             <Text style={{color:"#054f7d",fontSize:25,textAlign:"Left"}}>Short Description About The Film</Text>
           <Text style={{fontSize:15,textAlign:"Left"}}>Nishabdham (transl. Silence) is an upcoming Indian thriller film directed by Hemant Madhukar. The film stars Anushka Shetty, Madhavan and Anjali, while Michael Madsen, Subbaraju, Shalini Pandey and Srinivas Avasarala play supporting roles.[3] This film is shot simultaneously in Telugu and Tamil, with the latter version titled Silence. The film was scheduled to be released on 31 January 2020 but was postponed to 2 April 2020.[4] Again the release was postponed due to the COVID-19 pandemic. The film is now scheduled to release through Prime Video on 2 October 2020</Text>
        </View>
      );
    }
    function Master({ navigation }) {
      return (
        <View style={{ flex: 1, alignItems: 'Left'}}>
      <Image
            source={{uri:'https://www.deccanherald.com/sites/dh/files/articleimages/2020/06/05/Master-release-1591344581.jpg'}}
             style={styles.HomeImageIconStyle}
           />
           <Text style={{color:"#054f7d",fontSize:15,textAlign:"Left"}}>Master</Text>
            <Text style={{color:"#054f7d",fontSize:15,textAlign:"Left"}}>Tamil/Telugu</Text>
            <Text style={{color:"#BBBBBB",fontSize:15,textAlign:"Left"}}>Action/Drama</Text>
             <StarRating ratings={3} reviews={573} />
           
           <Button
            placeholderTextColor = "Black"
            color = "#054f7d"
            title="Book My Tickets"
            onPress={() => navigation.navigate('Confirmation')}
          />
           <View style = {{margin:10}}/>
             <Button
            placeholderTextColor = "Black"
            color = "#054f7d"
            title="Order Snacks"
            onPress={() => navigation.navigate('Snacks')}
          />
         
             <Text style={{color:"#054f7d",fontSize:25,textAlign:"Left"}}>Short Description About The Film</Text>
           <Text style={{fontSize:15,textAlign:"Left"}}>Master is an upcoming Indian Tamil-language action-thriller film[1][2][3] written and directed by Lokesh Kanagaraj, and produced by Xavier Britto, under the banner XB Film Creators. The film stars Vijay and Vijay Sethupathi in the leading roles whilst Malavika Mohanan, Arjun Das, Andrea Jeremiah and Shanthanu Bhagyaraj play supporting roles.[4] The music for the film is composed by Anirudh Ravichander, whilst cinematography and editing are handled by Sathyan Sooryan and Philomin Raj, respectively. The film will be released in Tamil, Telugu, Hindi, Kannada, and Malayalam languages.[5][6] The film was initially scheduled to release theatrically on 9 April 2020, but indefinitely got postponed due to the COVID-19 pandemic.</Text>
        </View>
      );
    }
    function KGF2({ navigation }) {
      return (
        <View style={{ flex: 1, alignItems: 'Left'}}>
      <Image
            source={{uri:'https://m.hindustantimes.com/rf/image_size_444x250/HT/p2/2020/08/22/Pictures/_c7b72eb2-e45b-11ea-aae4-2b178f7f5029.jpg'}}
             style={styles.HomeImageIconStyle}
           />
           <Text style={{color:"#054f7d",fontSize:15,textAlign:"Left"}}>KGF-2</Text>
            <Text style={{color:"#054f7d",fontSize:15,textAlign:"Left"}}>Hindi/Telugu</Text>
            <Text style={{color:"#BBBBBB",fontSize:15,textAlign:"Left"}}>Action/Historical</Text>
             <StarRating ratings={3} reviews={573} />
           
           <Button
            placeholderTextColor = "Black"
            color = "#054f7d"
            title="Book My Tickets"
            onPress={() => navigation.navigate('Confirmation')}
          />
             <View style = {{margin:10}}/>
             <Button
            placeholderTextColor = "Black"
            color = "#054f7d"
            title="Order Snacks"
            onPress={() => navigation.navigate('Snacks')}
          />
         
             <Text style={{color:"#054f7d",fontSize:25,textAlign:"Left"}}>Short Description About The Film</Text>
           <Text style={{fontSize:15,textAlign:"Left"}}>K.G.F: Chapter 2 is an upcoming Indian Kannada-language period action film directed by Prashanth Neel. A sequel to the 2018 film K.G.F: Chapter 1, the film stars Yash in the lead reprising his role from the first film and Bollywood actor Sanjay Dutt as the antagonist.[1] Principal photography began in March 2019. The film was expected to be released on 23 October 2020[2] but was delayed due to the COVID-19 pandemic and Sanjay Dutt's health issues.[3] The film will be dubbed in Hindi, Malayalam, Tamil and Telugu languages.[1]</Text>
        </View>
      );
    }
    function BlackWidow({ navigation }) {
      return (
        <View style={{ flex: 1, alignItems: 'Left'}}>
      <Image
            source={{uri:'https://terrigen-cdn-dev.marvel.com/content/prod/1x_masonry/rachel_ons_poster_02.jpg'}}
             style={styles.HomeImageIconStyle}
           />
           <Text style={{color:"#054f7d",fontSize:15,textAlign:"Left"}}>Black Widow</Text>
            <Text style={{color:"#054f7d",fontSize:15,textAlign:"Left"}}>English</Text>
            <Text style={{color:"#BBBBBB",fontSize:15,textAlign:"Left"}}>Action/Adventure</Text>
             <StarRating ratings={3} reviews={573} />
           
           <Button
            placeholderTextColor = "Black"
            color = "#054f7d"
            title="Book My Tickets"
            onPress={() => navigation.navigate('Confirmation')}
          />
             
             <View style = {{margin:10}}/>
             <Button
            placeholderTextColor = "Black"
            color = "#054f7d"
            title="Order Snacks"
            onPress={() => navigation.navigate('Snacks')}
          />
             <Text style={{color:"#054f7d",fontSize:25,textAlign:"Left"}}>Short Description About The Film</Text>
           <Text style={{fontSize:15,textAlign:"Left"}}>In Marvel Studios’ action-packed spy thriller “Black Widow,” Natasha Romanoff aka Black Widow confronts the darker parts of her ledger when a dangerous conspiracy with ties to her past arises. Pursued by a force that will stop at nothing to bring her down, Natasha must deal with her history as a spy and the broken relationships left in her wake long before she became an Avenger.</Text>
        </View>
      );
    }
    function RRR({ navigation }) {
      return (
        <View style={{ flex: 1, alignItems: 'Left'}}>
      <Image
            source={{uri:'https://upload.wikimedia.org/wikipedia/en/d/d7/RRR_Poster.jpg'}}
             style={styles.HomeImageIconStyle}
           />
           <Text style={{color:"#054f7d",fontSize:15,textAlign:"Left"}}>RRR</Text>
            <Text style={{color:"#054f7d",fontSize:15,textAlign:"Left"}}>Hindi/Telugu</Text>
            <Text style={{color:"#BBBBBB",fontSize:15,textAlign:"Left"}}>Action/Fiction</Text>
             <StarRating ratings={3} reviews={573} />
           
           <Button
            placeholderTextColor = "Black"
            color = "#054f7d"
            title="Book My Tickets"
            onPress={() => navigation.navigate('Confirmation')}
          />
            
            <View style = {{margin:10}}/>
             <Button
            placeholderTextColor = "Black"
            color = "#054f7d"
            title="Order Snacks"
            onPress={() => navigation.navigate('Snacks')}
          />
             <Text style={{color:"#054f7d",fontSize:25,textAlign:"Left"}}>Short Description About The Film</Text>
           <Text style={{fontSize:15,textAlign:"Left"}}>RRR is an upcoming Indian Telugu-language period action drama film[3] written and directed by S. S. Rajamouli. It stars N. T. Rama Rao Jr., Ram Charan, Alia Bhatt and Olivia Morris.[4] It is a fictional story about India's freedom fighters, Alluri Sitarama Raju and Komaram Bheem who fought against the British Raj and Nizam of Hyderabad respectively.[5] The film is scheduled for release on 8 January 2021 along with the dubbed versions in Hindi, Kannada, Malayalam and Tamil languages.</Text>
        </View>
      );
    }
    function Sarkaaruvaaripaata({ navigation }) {
      return (
        <View style={{ flex: 1, alignItems: 'Left'}}>
      <Image
            source={{uri:'https://i2.cinestaan.com/image-bank/1500-1500/173001-174000/173518.jpg'}}
             style={styles.HomeImageIconStyle}
           />
           <Text style={{color:"#054f7d",fontSize:15,textAlign:"Left"}}>Sarkaru Vaari paata</Text>
            <Text style={{color:"#054f7d",fontSize:15,textAlign:"Left"}}>Telugu</Text>
            <Text style={{color:"#BBBBBB",fontSize:15,textAlign:"Left"}}>Action/Drama</Text>
             <StarRating ratings={3} reviews={573} />
           
           <Button
            placeholderTextColor = "Black"
            color = "#054f7d"
            title="Book My Tickets"
            onPress={() => navigation.navigate('Confirmation')}
          />
             <View style = {{margin:10}}/>
             <Button
            placeholderTextColor = "Black"
            color = "#054f7d"
            title="Order Snacks"
            onPress={() => navigation.navigate('Snacks')}
          />
         
             <Text style={{color:"#054f7d",fontSize:25,textAlign:"Left"}}>Short Description About The Film</Text>
           <Text style={{fontSize:15,textAlign:"Left"}}>Mahesh Babu to play dual roles in Sarkaru Vaari Paata. Mahesh Babu's much-aniticipated film, Sarkaru Vaari Paatu, directed by Parasuram, will see the Maharshi star in dual roles. If rumours are anything to go by, Mahesh Babu will be seen playing the roles of a pawn broker and bank officer in the film.</Text>
        </View>
      );
    }
    function Avatar2({ navigation }) {
      return (
        <View style={{ flex: 1, alignItems: 'Left'}}>
      <Image
            source={{uri:'https://i.ytimg.com/vi/AxLH0lXEGAY/maxresdefault.jpg'}}
             style={styles.HomeImageIconStyle}
           />
           <Text style={{color:"#054f7d",fontSize:15,textAlign:"Left"}}>Avatar2</Text>
            <Text style={{color:"#054f7d",fontSize:15,textAlign:"Left"}}>English</Text>
            <Text style={{color:"#BBBBBB",fontSize:15,textAlign:"Left"}}>Action/Adventure</Text>
             <StarRating ratings={3} reviews={573} />
           
           <Button
            placeholderTextColor = "Black"
            color = "#054f7d"
            title="Book My Tickets"
            onPress={() => navigation.navigate('Confirmation')}
          />
             <View style = {{margin:10}}/>
             <Button
            placeholderTextColor = "Black"
            color = "#054f7d"
            title="Order Snacks"
            onPress={() => navigation.navigate('Snacks')}
          />
          
             <Text style={{color:"#054f7d",fontSize:25,textAlign:"Left"}}>Short Description About The Film</Text>
           <Text style={{fontSize:15,textAlign:"Left"}}>Avatar 2(also marketed as James Cameron's Avatar 2)[6] is an upcoming American science fiction film directed, produced, edited, and co-written by James Cameron, produced by 20th Century Studios.[1][7] It is the second film in the Avatar franchise, following Avatar (2009). Cameron is producing the film with Jon Landau, with Josh Friedman originally announced as his co-writer; it was later announced that Cameron, Friedman, Rick Jaffa, Amanda Silver, and Shane Salerno took a part in the writing process of all sequels before being attributed separate scripts, making the eventual writing credits unclear.[8][9][10][11] Cast members Sam Worthington, Zoe Saldana, Stephen Lang, Giovanni Ribisi, Joel David Moore, Dileep Rao, CCH Pounder, and Matt Gerald are all reprising their roles from the original film, with Sigourney Weaver returning in a different role.[12] New cast members include Kate Winslet, Cliff Curtis, Edie Falco, Brendan Cowell, Michelle Yeoh, Jemaine Clement, Oona Chaplin, CJ Jones, and Vin Diesel.</Text>
        </View>
      );
    }
    function vakeelsaab({ navigation }) {
      return (
        <View style={{ flex: 1, alignItems: 'Left'}}>
      <Image
            source={{uri:'https://www.filmibeat.com/img/popcorn/movie_posters/vakeelsaab-20200303085530-15138.jpg'}}
             style={styles.HomeImageIconStyle}
           />
           <Text style={{color:"#054f7d",fontSize:15,textAlign:"Left"}}>vakeelsaab</Text>
            <Text style={{color:"#054f7d",fontSize:15,textAlign:"Left"}}>Telugu</Text>
            <Text style={{color:"#BBBBBB",fontSize:15,textAlign:"Left"}}>Action/Drama</Text>
             <StarRating ratings={3} reviews={573} />
           
           <Button
            placeholderTextColor = "Black"
            color = "#054f7d"
            title="Book My Tickets"
            onPress={() => navigation.navigate('Confirmation')}
          />
          <View style = {{margin:10}}/>
             <Button
            placeholderTextColor = "Black"
            color = "#054f7d"
            title="Order Snacks"
            onPress={() => navigation.navigate('Snacks')}
          />
          
             <Text style={{color:"#054f7d",fontSize:25,textAlign:"Left"}}>Short Description About The Film</Text>
           <Text style={{fontSize:15,textAlign:"Left"}}>Vakeel Saab is an upcoming Indian Telugu-language courtroom drama film directed by Venu Sriram and produced by Dil Raju and Boney Kapoor. It stars Pawan Kalyan, Anjali, Nivetha Thomas, Ananya Nagalla and Prakash Raj. It is a remake of the Hindi film Pink.</Text>
        </View>
      );
    }
    function Confirmation({ navigation }) {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-evenly'  }}>
        <Image
              source={{uri:'https://thumbs.gfycat.com/IllinformedEcstaticGroundbeetle-small.gif'}}
               style={styles.HomeImageIconStyle1}
             />
             <Text style={{color:"#054f7d",fontSize:15,textAlign:"Left"}}>Your confirmation code</Text>
             <Text style={{color:"#006400",fontSize:35,textAlign:"Left"}}>BMXu1c7Go100007</Text>
             
         <Button
            placeholderTextColor = "Black"
            color = "#054f7d"
            title="Wanna Write a Review??"
            onPress={ ()=>{ Linking.openURL("https://www.imdb.com/")}}
          />
    
             <View style = {{margin:10}}/>
             <Button
            placeholderTextColor = "Black"
            color = "#054f7d"
            title="Done"
            onPress={() => navigation.navigate('Home')}
          />
        
           </View>
           
      );
    }
    function Confirmation1({ navigation }) {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-evenly'  }}>
        <Image
              source={{uri:'https://media3.giphy.com/media/3o6ozuHcxTtVWJJn32/giphy.gif'}}
               style={styles.HomeImageIconStyle1}
             />
             <Text style={{color:"#054f7d",fontSize:15,textAlign:"Left"}}>Your confirmation code</Text>
             <Text style={{color:"#006400",fontSize:35,textAlign:"Left"}}>MTX002SNXID29001</Text>
             <Text style={{color:"Red",fontSize:15,textAlign:"Left"}}>Show this code at food counter of the theatre to get your favourite snacks</Text>
             <View style = {{margin:10}}/>
             <Button
            placeholderTextColor = "Black"
            color = "#054f7d"
            title="Done"
            onPress={() => navigation.navigate('Snacks')}
          />
           </View>
           
      );
    }
     /*function Sinup() {
    return(
    <View style={styles.container}>        
      <TouchableOpacity
        onPress={() => alert('You can pick a photo from your mobile!')}
        style={{ backgroundColor: '#CE93D8',borderColor:'violet',borderRadius:20,borderWidth:1,width:200,alignItems:'center',height:30,justifyContent:"center" }}>
        <Text style={{ fontSize:18, color: '#000' }}>Select your own image!</Text>
      </TouchableOpacity>
  
      <TextInput placeholder='Enter Your Name' placeholderTextColor="violet" style={{ height:50,width:300,
     borderColor: 'pink', borderWidth: 5,paddingLeft:10,margin:10,borderRadius:20,borderWidth:1}} />
     <TextInput placeholder='Enter Emai id/Ph no' placeholderTextColor="violet" style={{ height:50,width:300,
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
        title="signup" onPress={() =>alert('u r signed up!')} />
         </View>
  );
  }*/
 /*function Login({navigation}){
    return (
        <View style={styles.container}>     
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
            <button
          onPress={() => navigation.navigate('Home')}>
            <Text>Login</Text>
          </button>
              <TouchableOpacity>
            <Text style={styles.forgot}>Forgot Password?</Text>
          </TouchableOpacity>
          <button
          onPress={() => navigation.navigate('sinup')}>
            <Text>Sinup</Text>
          </button>
          <View style={{ flexDirection: 'row' }}>
                <SocialIcon
                  type="facebook"
                  onPress={() => Linking.openURL('https://www.facebook.com/') 
                  }
                />
                </View>
                <View style={{ flexDirection: 'row' }}>
                <SocialIcon
                  type="instagram"
                  onPress={() => Linking.openURL('https://www.instagram.com/') 
                  }
                />
                </View>
          </View> 
    );
}*/

    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: 'yellow',
        alignItems: 'center',
        justifyContent:  'center',
      },
      container2: {
        flex: 1,
        backgroundColor: 'orange',
        alignItems: 'center',
        justifyContent:  'center',
      },
      buttonStyle: {
        height: 50,
        width: 70,
        alignItems: 'center',
        justifyContent:  'center',
      },
      loginBtn:{
        width:"80%",
        backgroundColor:"#054f7d",
        borderRadius:25,
        height:50,
        alignItems:"center",
        justifyContent:"center",
        marginTop:40,
        marginBottom:10
        
      },
    scrollView: {
      backgroundColor: 'pink',
      marginHorizontal: 20,
    },
    
    leftContainer: {
      flex: 1,
      flexDirection:"column",
      justifyContent: "center",
      
    },
    rightContainer: {
      flex: 1,
      margin:5,
      flexDirection:"row",
      justifyContent:"center",
      
    },
    buttonContainer: {
      backgroundColor: 'cyan',
      borderRadius: 7,
      paddingVertical: 5,
      paddingHorizontal: 5,
      alignItems: 'center',
    },
    TextStyle1:{
      margin:5,
      fontSize:15,
      fontWeight:'400',
      color:'#fff',
      alignSelf:'center',
      fontWeight:'bold'
    },
    
    separator: {
      marginVertical: 5,
      borderBottomColor: 'pink',
      borderBottomWidth: StyleSheet.hairlineWidth,
    },
    HomeImageIconStyle: {
      padding: 2,
      margin: 2,
      height: 120,
      width: 120,
      borderRadius:10,
      borderColor:"white",
      borderWidth:0.5
    },
      button: {
        width:'20%',
        alignItems: "center",
        backgroundColor: "#673AB7",
        padding: 5
      },
      button1: {
        width:'20%',
        alignItems: "center",
        backgroundColor: "cyan",
        padding: 5
      },
    
      headingText: {
        fontSize:30,
        fontWeight:'bold',
        color:'#673AB7',
        padding:20,
        justifyContent: 'center',
    
      },
      headingText1:
      {
        fontSize:30,
        fontWeight:'bold',
        color:'cyan',
        padding:20,
        justifyContent: 'center',
    },
    HomeImageIconStyle1: {
      padding: 5,
      alignItems: "center",
      margin: 5,
      height: 400,
      width: 500,
      borderRadius:10,
      borderColor:"white",
      borderWidth:1
    },
      button: {
        width:'20%',
        alignItems: "center",
        backgroundColor: "#673AB7",
        padding: 5
      },
      button1: {
        width:'20%',
        alignItems: "center",
        backgroundColor: "cyan",
        padding: 5
      },
    
      headingText: {
        fontSize:30,
        fontWeight:'bold',
        color:'#673AB7',
        padding:20,
        justifyContent: 'center',
    
      },
      headingText1:
      {
        fontSize:30,
        fontWeight:'bold',
        color:'cyan',
        padding:20,
        justifyContent: 'center',
    },
    forgot:{
      color:"#673AB7",
      fontSize:11
    },
    backgroundImage1:{
      flex: 1,
      width: '100%',
      height: '100%',
      justifyContent: "center",
      alignItems: "center",
     
    },
    backgroundImage2:{
      flex: 1,
      width: '100%',
      height: '100%',
      justifyContent: "center",
      alignItems: "center",
     
    },
    image1:
    {
      flex: 1,
      width: '100%',
      height: '100%',
      justifyContent: "center",
      alignItems: "stretch",
      justifyContent: 'flex-end',
      padding :50,
    
    },
    
    backgroundImage: {
      flex: 1,
      width: '110%',
      height: '100%',
      justifyContent: "center",
      alignItems: "stretch",
      justifyContent: 'flex-end',
      padding:20,
    
    },
    
    ImageIconStyle: {
      padding: 10,
      margin: 5,
      height: 25,
      width: 25,
      resizeMode : 'stretch',
    
    },
    
    TextStyle :{
    
     color: "#fff",
     marginBottom : 4,
     marginRight :20,
     
    },
    
    SeparatorLine :{
    
    backgroundColor : '#fff',
    width: 1,
    height: 40
    
    },
    });
const Tab = createBottomTabNavigator();
function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="profileStackScreen"
      tabBarOptions={{
        activeTintColor: 'black',
      }}
    >
       <Tab.Screen
        name="Profile"
        component={ProfileTab}
        options={{
          tabBarLabel: 'YOUR PROFILE',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Home"
        component={HomeTab}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />

     
      <Tab.Screen
        name="ADD USER"
        component={AddUserScreen}
        options={{ title : "Details",
          tabBarLabel: 'Details',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
       </Tab.Navigator>
  );
}
const Stack = createStackNavigator();
function ProfileTab(){
  return (
    <Stack.Navigator>
    <Stack.Screen name="profile" component={profileStackScreen} />
    <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="sinup" component={Sinup} />
      </Stack.Navigator> 
  );
}
function HomeTab(){
  return (
    <Stack.Navigator>
    <Stack.Screen name="Home" component={homeStackScreen} />
    <Stack.Screen name="Tenet" component={Tenet} />
              <Stack.Screen name="DRStrange2" component={DRStrange2} />
              <Stack.Screen name="V" component={V} />
              <Stack.Screen name="Red" component={Red} />
              <Stack.Screen name="Nishabdam" component={Nishabdam} />
              <Stack.Screen name="Master" component={Master} />
              <Stack.Screen name="KGF2" component={KGF2} />
              <Stack.Screen name="BlackWidow" component={BlackWidow} />
              <Stack.Screen name="RRR" component={RRR} />
              <Stack.Screen name="Sarkaaruvaaripaata" component={Sarkaaruvaaripaata} />
              <Stack.Screen name="Avatar2" component={Avatar2} />
              <Stack.Screen name="vakeelsaab" component={vakeelsaab} />
              <Stack.Screen name="Confirmation" component={Confirmation} />
              <Stack.Screen name="Confirmation1" component={Confirmation1} />
              <Stack.Screen name="Snacks" component={Snacks} />
              <Stack.Screen name="Login" component={Login} />

    </Stack.Navigator> 
  );
}
function profileStackScreen({navigation}){
  return(
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-evenly'  }}>
    <ImageBackground source={{uri:'https://www.ticketonlinebooking.com/wp-content/uploads/2018/11/movie.jpg'}} style={styles.image1}>
    
      <Button
        placeholderTextColor = "Black"
        color = "Black"
        title="Log in"
        onPress={() => navigation.navigate('Login')}
      />
      <View style = {{margin:10}}/>
       <Button
        placeholderTextColor = "Black"
        color = "Black"
        title="Sign up"
        onPress={() => navigation.navigate('sinup')}
      />
      </ImageBackground>
    </View>
  ); 
}
export default function App() {
  return (
    <NavigationContainer MyTheme>
    <MyTabs/>
    </NavigationContainer>
  )
}
//app