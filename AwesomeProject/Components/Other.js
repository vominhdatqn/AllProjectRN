import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default class Other extends Component {
  static navigationOptions = {
    tabBarLabel: 'Khác',
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