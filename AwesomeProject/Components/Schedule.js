import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import Header from './Header.js';
import Time from './Time.js';
import Week from './Week.js';
import Date from './Date.js';
import CourceList from './CourceList.js';
export default class Schedule extends Component {
  static navigationOptions = {
    tabBarLabel: 'Thời khóa biểu',
  };
  render() {
     const props  = {
         hocKy:'Học kỳ',
         namHoc:'2019 - 2020',
         thu:'Thứ 2',
         ngay:'Ngày 15/01/2019'
     };
     const {container,container3} = styles;
    return (
      <View style={container}>
            <Header {...props}/>
            <Time />
            <Week />
            <Date {...props}/>
            <CourceList />
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'space-between'
    },
    
})
   