import React, { Component } from 'react';
import {StyleSheet, Text,TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
class ChangeColor extends Component {
	ClickColor(){
		this.props.dispatch({type:'CHANGECOLOR'});
	};
	
	render() {
		const color = this.props.MychangeColor ? 'red' : 'blue';
		return (
			<TouchableOpacity onPress={()=>this.ClickColor()}>
				<Text style={{fontSize:40,color}}>Change Color</Text>
			</TouchableOpacity>
		);
	}
}
function Color(state){
	return {value:state.value,MychangeColor:state.changeColor};
}
export default connect(Color)(ChangeColor);
