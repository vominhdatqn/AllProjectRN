import React, { Component } from 'react'
import {
    KeyboardAvoidingView,
    ScrollView,
    View,
    TextInput,StyleSheet
} from 'react-native'

export default class Transplants extends Component {
  render() {
    return (
        <ScrollView style = {{flex:1, backgroundColor: 'white'}} ref = 'scroll'>
          <KeyboardAvoidingView behavior='position' style = {{backgroundColor: 'white', flex: 1}}>
                <View style = {{height: 400}}/>
                <TextInput style = {{height: 60}} placeholder='Example 1' />
                <TextInput style = {{height: 60}} placeholder='Example 2' />
                <TextInput style = {{height: 60}} placeholder='Example 3' />
                <TextInput style = {{height: 60}} placeholder='Example 4' onFocus = {() => this.refs['scroll'].scrollTo({y: 60})}/>
          </KeyboardAvoidingView>
        </ScrollView>
    )
} 
}

const styles = StyleSheet.create({
    container:{
        flex:1
    }
})
