import {createStackNavigator, createAppContainer,createMaterialTopTabNavigator} from 'react-navigation';
import Login from '../Components/Login.js';
import Register from '../Components/Register.js';
import Home from '../Components/Home.js';
import Study from '../Components/Study.js';
import Other from '../Components/Other.js';
import Schedule from '../Components/Schedule.js';
import Ionicons from 'react-native-vector-icons/MaterialCommunityIcons';
import React, {Component} from 'react';
const Stack = createStackNavigator(
{
    Login:Login,
    Register:Register
},
{
    initialRouteName:'Login',
    headerMode:'none'
});
const TabBottom = createMaterialTopTabNavigator(
    {
        Home:Home,
        Schedule:Schedule,
        Study:Study,
        Other:Other
    },
    {
        
      defaultNavigationOptions: ({navigation}) => ({  
   
            tabBarIcon: ({ focused, tintColor,horizontal }) => {
                const { routeName } = navigation.state;
                let iconName;
                if (routeName === 'Home') {
                  iconName = `home-city${focused ? '' : '-outline'}`;
                } else if (routeName === 'Schedule') {
                  iconName = `timetable${focused ? '' : ''}`;
                } else if (routeName === 'Study') {
                  iconName = `format-clear${focused ? '' : ''}`;
                } else if (routeName ==='Other'){
                  iconName = `menu-open${focused ? '' : ''}`;
                }
                 return <Ionicons name={iconName} size={25} color={tintColor} />;
        
                
              },
            }),
            tabBarLabel: 'Trang Chủ'.toLowerCase(),
           tabBarOptions: {
              activeTintColor: 'orange',
              inactiveTintColor: '#5e666d',
              showIcon: true,   
              showlabel:true,
              upperCaseLabel: false,
              labelStyle: {
                fontSize: 10,
                margin: 0,
                padding: 0,
              },
             indicatorStyle:{
               backgroundColor: '#000',
              },
              style:{
              backgroundColor: '#fff',
                  },
            },
             tabBarPosition:'bottom',
              swipeEnabled:true,  
              animationEnabled:false,
                });
export const  StackApp = createAppContainer(TabBottom);

