import React, { Component } from 'react';
import {View,Text} from "react-native";
export default class ComC extends Component {
	constructor(props){
		super(props);
		this.state ={
			mau:"yellow"
		}
	}
	doimauC(){
		this.setState({
			mau:'black'
		});
	}
	render() {
		return (
			<View style={{width:100,height:100,backgroundColor:this.state.mau,justifyContent:'center',alignItems:'center'}}>

			</View>
		);
	}
}



