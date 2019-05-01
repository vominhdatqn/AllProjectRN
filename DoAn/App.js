/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TouchableOpacity} from 'react-native';
import AppRedux from "./Components/AppRedux.js";
import {createStore} from 'redux';
import {Provider} from 'react-redux';
const defaultState = {value: 10,changeColor:true };
const reducer = (state = defaultState,action) =>{
if(action.type==='UP') return {value:state.value+1,changeColor:state.changeColor};
if(action.type==='DOWN') return {value:state.value-1,changeColor:state.changeColor};
if(action.type==='CHANGECOLOR') return{value:state.value,changeColor:!state.changeColor};
return state;

}

const store = createStore(reducer);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <AppRedux />
            </Provider>
    );
  }
}

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