import React, { Component } from 'react';
import {StyleSheet, Text, View,TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import ChangeColor from "./ChangeColor.js";
 class ComController extends Component {
 	Tang(){
	this.props.dispatch({type:'UP'});
};
Giam(){
	this.props.dispatch({type:'DOWN'});
};	
	render() {
		return (
			 <View style={styleController.controller}>

                    <Text style={styleController.controllName}>CONTROLLER COMPONENT</Text>
                    <ChangeColor />
                    <View style={styleController.buttonContainer}>
                        <TouchableOpacity style={styleController.button} onPress={()=>this.Tang()}>
                            <Text style={styleController.buttonText}>+</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styleController.button} onPress={()=>this.Giam()}>
                            <Text style={styleController.buttonText}>-</Text>
                        </TouchableOpacity>
                    </View>
                </View>
		);
	}
}
function KhongDoi(state){
	return {value:state.value,myChageColor:state.changeColor};
}
export  default connect()(ComController);
const styleController = StyleSheet.create({
    controller: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: 'yellow',
        alignSelf: 'stretch',
        margin: 20
    },
    controllName: {
        fontSize: 20,
        marginBottom: 10
    },
    buttonContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    button: {
        backgroundColor: 'black',
        paddingHorizontal: 50,
        paddingVertical: 25,
        margin: 10,
        borderRadius: 5
    },
    buttonText: {
        color: 'white',
        fontSize: 40
    }
});
