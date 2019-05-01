import React, { Component } from 'react'
import { Text, StyleSheet, View,TouchableOpacity } from 'react-native'

export default class Home extends Component {
  render() {
    const{ container} = styles;
    return (
      <View style={container}>
        
      <TouchableOpacity onPress={()=>this.props.navigation.navigate('Login')}>
      <Text> Home </Text>
      </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container:{
        flex:1
    }
})
