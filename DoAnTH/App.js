/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import Splash from './Components/Splash.js';
import {StackBottomApp} from './Navigation/Navigation.js';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state={
      currentScreen:true
    };
  }
  componentWillMount(){
    setTimeout(()=>{
      this.setState({
        currentScreen:false
      });
    },500)
  }
  render() {
    const {currentScreen} = this.state;
    let APP = currentScreen ? <Splash /> : <StackBottomApp />;
    return APP;
  }
}

