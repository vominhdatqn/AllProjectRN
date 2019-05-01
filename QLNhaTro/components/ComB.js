import React, { Component } from 'react';
import {View,StyleSheet,Text,TouchableOpacity} from 'react-native';

export default class ComB extends React.Component {
	 static navigationOptions = {
    title: 'ComB',
    header:null
  };
	render() {
		return (
			<View style={style.container}>
				<TouchableOpacity onPress={()=>this.props.navigation.goBack()}>
				<Text>goBack ComB</Text>
				</TouchableOpacity>
			</View>
			
		);
	}
}
const style = StyleSheet.create({
	container:{
		backgroundColor:'blue',
		fontSize: 30,
		flex:1
	}
})