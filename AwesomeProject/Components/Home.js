import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default class Home extends Component {
  static navigationOptions = {
    tabBarLabel: 'Trang chủ',
  };
  render() {
    return (
      <View style={styles.container}>
        <Text> textInComponent </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container:{flex:1}
})
