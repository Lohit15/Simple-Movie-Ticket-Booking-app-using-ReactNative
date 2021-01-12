/*Example 2: This is an Example of Animated Splash Screen
import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      animating: false,
     // animating: true,  /*if we will input GIF image
      align: 'center',
      alignsecond: false,
    };
    setTimeout(
      () =>
        this.setState({ align: 'flex-start' }, function() {
          this.setState({
            alignsecond: true,
          });
        }),
      3000
    );
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: this.state.align,
          marginHorizontal: 40,
        }}>
        <Image
        source={require('./assets/favicon.png')}
         // source={require('./img/mygif1.gif')} /*for GIF image
          style={{ width: 60, height: 60 }}
        />
        
        {!this.state.alignsecond ? null : (
          <View style={{ margin: 10 }}>
            <Text
              style={{ color: 'red', fontSize: 30, fontWeight: 'bold' }}>
            Welcome to KLH
            </Text>
          </View>
        )}
      </View>
    );
  }
}*/
/*Example 3: This is an example of Splash Screen with Zoom Effect Animation///
import React from 'react';
//import react in our code.

import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Image,
  Animated,
} from 'react-native';
//import all the components we are going to use

export default class App extends React.Component {
  state = {
    height: new Animated.Value(150), // Initial value for opacity: 0
    width: new Animated.Value(150), // Initial value for opacity: 0
  };
  
  componentDidMount() {
    this.animation();
  }
  animation(){
    
    Animated.timing(
      this.state.width, // The animated value to drive
      {
        toValue: 1000, // Animate to opacity: 1 (opaque)
        duration: 10000, // Make it take a while
      }
    ).start(); // Starts the animation
    
    Animated.timing(
      this.state.height, // The animated value to drive
      {
        toValue: 1000, // Animate to opacity: 1 (opaque)
        duration: 10000, // Make it take a while
      }
    ).start(); // Starts the animation
    
  }

  render() {
    let { height } = this.state;
    let { width } = this.state;

    return (
      <View style={styles.MainContainer}>
        <Animated.Image
          source={{
            uri:
              'https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png',
          }}
          style={{
            width: width,
            height: height,
          }}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'    
  },
});*/
//Example 4: This is an example of Splash Screen with Zoom Effect Animation///
import React from 'react';
//import react in our code.

import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Image,
  Animated,
} from 'react-native';
//import all the components we are going to use

export default class App extends React.Component {
  state = {
    height: new Animated.Value(600), // Initial value for opacity: 0
    width: new Animated.Value(360), // Initial value for opacity: 0
  };
  componentDidMount() {
    Animated.timing(
      this.state.width, // The animated value to drive
      {
        toValue: 360, // Animate to opacity: 1 (opaque)
        duration: 450, // Make it take a while
      }
    ).start(); // Starts the animation
    Animated.timing(
      this.state.height, // The animated value to drive
      {
        toValue: 750, // Animate to opacity: 1 (opaque)
        duration: 10000, // Make it take a while
      }
    ).start(); // Starts the animation
    setTimeout(function() {
      alert('Go to next Screen');
    }, 12000);
  }

  render() {
    let { height } = this.state;
    let { width } = this.state;

    return (
      <View style={styles.MainContainer}>
        <Animated.Image
          source={require('./assets/imag.jpg')}
          style={{
            width: width,
            height: height,
            position: 'absolute',
          }}
        />
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            paddingTop: 48,
            backgroundColor: 'rgba(11, 56, 82, 0.3)',
          }}>
          <Image
            source={{
              uri:
                'https://raw.githubusercontent.com/AboutReact/sampleresource/master/react_logo.png',
            }}
            style={{
              width: 100,
              height: 100,
            }}
          />
          <Text style={{ fontSize: 18, color: 'white' }}>
            Example of Animated Splash Screen
          </Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    position: 'relative',
    backgroundColor: '#2F7ECC',
  },
});




