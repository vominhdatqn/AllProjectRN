import React, { Component } from 'react';
import {StyleSheet, Text, View,TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import ComController from "./ComController.js";
 class AppRedux extends Component {
	render() {
		const color = this.props.myChangeColor ? 'red' : 'blue';
		return (
			<View style={styleApp.container}>
                <View style={styleApp.header}>
                    <Text style={styleApp.appName}>EXAM 1: {'\n'}APP COMPONENT</Text>
                    <Text style={{fontSize:40,color}}>{this.props.myValue}</Text>
                </View>
               <ComController />
            </View>
		);
	}
}

function mapStateToProps(state){
	return {myValue: state.value,myChangeColor:state.changeColor};
}
export default connect(mapStateToProps)(AppRedux);
const styleApp = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
        paddingTop: 30
    },
    header: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    appName: {
        color: 'white',
        fontSize: 30,
        textAlign: 'center'
    },
    value: {
        color: 'yellow',
        fontSize: 40
    }
});
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