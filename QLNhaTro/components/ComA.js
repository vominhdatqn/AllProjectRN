import React, { Component } from 'react';
import {View,StyleSheet,Text,TouchableOpacity} from 'react-native';

export default class ComA extends React.Component {
	render() {
		return (
			<View style={style.container}>
				<TouchableOpacity onPress={()=>this.props.navigation.navigate('ComB')}>
				<Text>Click Me ComB</Text>
				</TouchableOpacity>
			</View>
			
		);
	}
}
const style = StyleSheet.create({
	container:{
		backgroundColor:'red',
		fontSize: 30,
		flex:1
	}
})