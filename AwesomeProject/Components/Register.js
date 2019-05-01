import React, { Component } from 'react'
import { Text, StyleSheet, View,TextInput,TouchableOpacity,TouchableHighlight } from 'react-native'

export default class Register extends Component {
    constructor(props){
        super(props);
        this.state={
            username:'',
            email:'',
            password:''
        };
    }
  render() {
      const {username,email,password} = this.state;
    return (
        <View style={styles.container}>
        <View style={styles.inputContainer}>
        <TextInput 
            style={styles.inputs}
            placeholder="Nhập tên đăng nhập..."
            onChangeText={(username)=>this.setState({username})}
            value={username}
            underlineColorAndroid='transparent'
        />
        </View>
        <View style={styles.inputContainer}>
        <TextInput 
            style={styles.input}
            placeholder="Nhập địa chỉ email..."
            onChangeText={(email)=>this.setState({email})}
            keyboardType="email-address"
            underlineColorAndroid='transparent'
            value={email}
        />
        </View>
        
        <View style={styles.inputContainer}>
        <TextInput 
            style={styles.input}
            placeholder="Nhập mật khẩu..."
            onChangeText={(password)=>this.setState({password})}
            secureTextEntry={true}
            underlineColorAndroid='transparent'
            value={password}
        />
        </View>
        <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} >
          <Text style={styles.loginText}>Login</Text>
        </TouchableHighlight>

        <TouchableHighlight style={styles.buttonContainer} >
            <Text>Forgot your password?</Text>
        </TouchableHighlight>

        <TouchableHighlight style={styles.buttonContainer} >
            <Text>Register</Text>
        </TouchableHighlight>
       
      
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#DCDCDC',
    },
    inputContainer: {
        borderBottomColor: '#F5FCFF',
        backgroundColor: '#FFFFFF',
        borderRadius:30,
        borderBottomWidth: 1,
        width:250,
        height:45,
        marginBottom:20,
        flexDirection: 'row',
        alignItems:'center'
    },
    inputs:{
        height:45,
        marginLeft:16,
        borderBottomColor: '#FFFFFF',
        flex:1,
    },
    inputIcon:{
      width:30,
      height:30,
      marginLeft:15,
      justifyContent: 'center'
    },
    buttonContainer: {
      height:45,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom:20,
      width:250,
      borderRadius:30,
    },
    loginButton: {
      backgroundColor: "#00b5ec",
    },
    loginText: {
      color: 'white',
    }
  });
