import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default class Study extends Component {
  static navigationOptions = {
    tabBarLabel: 'Học tập',
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
