import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default class Splash extends Component {
  render() {
      const {container,title} = styles;
    return (
      <View style={container}>
        <Text style={title}> Hello. This is Splash </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'rgb(32,53,70)',
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    title:{
       fontWeight:'bold',
       fontSize:18

    }
})
