import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default class Date extends Component {
  render() {
      const {container,titleText} = styles;
      const {thu,ngay} = this.props;
    return (
      <View style={container}>
        <Text style={titleText}>{thu} - {ngay}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
       marginLeft:5,
      justifyContent:'center'
    },
    titleText:{
        fontWeight: 'bold',
        color:'#0e0e0e',
        fontSize:15
    }
})
