import React, { Component } from 'react';
import {createStackNavigator,createAppContainer} from 'react-navigation';
import ComA from '../components/ComA.js';
import ComB from '../components/ComB.js';
import ComC from '../components/ComC.js';

const AppNavigator = createStackNavigator({
	ComA:ComA,
	ComB:ComB,
	ComC:ComC,
});

export default createAppContainer(AppNavigator);