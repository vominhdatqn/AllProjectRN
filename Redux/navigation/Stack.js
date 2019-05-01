import React from 'react';
import {createStackNavigator,createAppContainer} from 'react-navigation';
import Home from '../component/Home';
import Login from '../component/Login';
const Stack = createStackNavigator({
    Home: {
        screen: Home
      },
    Login:{
        screen:Login
    }
})
export default createAppContainer(Stack); 