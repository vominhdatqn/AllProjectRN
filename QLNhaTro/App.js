import React, { Component } from 'react';

import store from './redux/store.js';
// import {createStackNavigator,createAppContainer} from 'react-navigation';
import {Provider} from "react-redux";
import Main from './components/Main.js';


export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
      <Main />
      </Provider>
    
    );
  }
}
// const Navigator = createStackNavigator(
//  {
//   ComA:ComA,
//  ComB:ComB
// },
// {
  
//    defaultNavigationOptions:{
//     title:'Home'

//    },
  
//   navigationOptions: {
//    header: null,
//    headerVisible: false,
//   }
// }
// );
// const AppContainer= createAppContainer(Navigator);
// const style = StyleSheet.create({
//   container:{
//     backgroundColor:'yellow',
//     fontSize: 30,
//     flex:1
//   }
// })