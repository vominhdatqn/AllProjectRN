import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default class Header extends Component {
  render() {
    const {container,titleText} = styles;
    return (
      <View style={container}>
        <Text style={titleText}>{this.props.hocKy}</Text>
        <Text style={titleText}>{this.props.namHoc}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container:{
        flex:1.2,
        backgroundColor:'deepskyblue',
        alignItems:'center',
        marginBottom:10
      
    },
    titleText: {
        fontSize: 20,
        fontWeight: 'bold',
        color:'white'
      },

})
