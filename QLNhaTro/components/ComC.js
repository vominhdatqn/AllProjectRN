import React, { Component } from 'react';
import {View,StyleSheet,Text} from 'react-native';

class ComC extends React.Component {
	render() {
		return (
			<View style={style.container}>
				<Text>Sun 3</Text>
			</View>
			
		);
	}
}
const style = StyleSheet.create({
	container:{
		backgroundColor:'yellow',
		fontSize: 30,
		flex:1
	}
})