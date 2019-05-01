/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TouchableOpacity,Dimensions} from 'react-native';
import {StackApp} from './Navigation/Navigation.js';
import Schedule from './Components/Schedule.js';
// import {
//   widthPercentageToDP as wp,
//   heightPercentageToDP as hp,
//   listenOrientationChange as loc,
//   removeOrientationListener as rol
// } from 'react-native-responsive-screen';
// var { height } = Dimensions.get('window');
// var box_count = 5;
// var box_height = height / box_count;
export default class App extends Component{
 
  constructor(props){
    super(props);
    
  }
 
 
  render() {
   const Layout = StackApp;
    return (    
      // <Schedule />
      <StackApp />
    );
  }
 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  // box: {
  //   height: box_height //set this one
  // },
  // box1: {
  //   backgroundColor: '#2196F3'
  // },
  // box2: {
  //   backgroundColor: '#8BC34A'
  // },
  // box3: {
  //   backgroundColor: '#e3aa1a'
  // }
});
{/* <View style={styles.container}>
        <View style={{flex: 16}}/> 
        <View style={{flexDirection: 'row', flex: 68}}>
            <View style={{flex: 1}}/>
            <View style={[styles.box, {flex: 8}]}>
                <Text style={styles.title}>Awesome Blog Post Page</Text>
                <Text style={styles.text}></Text>
                <View style={styles.buttonsContainer}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Accept</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Decline</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{flex: 1}}/>
        </View>
        <View style={{flex: 16}}/>
    </View>
    );
  }
 
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#E0E0E0',
    alignItems: 'center',
    justifyContent: 'center',
},
box: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    shadowColor: '#000',
   shadowOffset: { width: 0, height: 2 },
   shadowOpacity: 0.5,
   shadowRadius: 2,
   elevation: 2,
},
title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'black'
},
text: {
    fontSize: 14,
    color: 'black'
},
buttonsContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
},
button: {
    width: 150,
    height: 45,
    borderRadius: 100,
    marginBottom: 10,
    backgroundColor: '#41B6E6',
    alignItems: 'center',
    justifyContent: 'center',
},
buttonText: {
    fontWeight: 'bold',
    fontSize: 14,
    color: 'white'
}
}); */}