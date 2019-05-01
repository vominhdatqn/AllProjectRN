import Home from '../Components/Home/Home';
import Transplants from '../Components/Transplants.js';
import Nearby from '../Components/Nearby.js';
import Message from '../Components/Message.js';
import Account from '../Components/Account/Account';
import {createStackNavigator,createAppContainer,createMaterialTopTabNavigator} from 'react-navigation';
import React, {Component} from 'react';
import Ionicons from 'react-native-vector-icons/MaterialCommunityIcons';

const TabBottom = createMaterialTopTabNavigator(
{
    Home:Home,
    Transplants:Transplants,
    Nearby:Nearby,
    Message:Message,
    Account:Account,
},{ 
    defaultNavigationOptions: ({navigation}) => ({  
        tabBarIcon: ({ focused, tintColor,horizontal }) => {
            const { routeName } = navigation.state;
            let iconName;
            if (routeName === 'Home') {
              iconName = `home-city${focused ? '' : '-outline'}`;
            } else if (routeName === 'Transplants') {
              iconName = `account-group${focused ? '' : '-outline'}`;
            } else if (routeName === 'Nearby') {
              iconName = `google-nearby${focused ? '' : ''}`;
            } else if (routeName ==='Message'){
              iconName = `facebook-messenger${focused ? '' : ''}`;
            }else if (routeName ==='Account'){
                iconName = `account-card-details${focused ? '' : ''}`;
              }
             return <Ionicons name={iconName} size={25} color={tintColor} />;
          },
        }),
        // tabBarLabel: 'Trang Chủ'.toLowerCase(),
       tabBarOptions: {
          activeTintColor: '#0693e3',
         // màu xanh #2196f3
          inactiveTintColor: '#19364d',
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
          swipeEnabled:false,  
          animationEnabled:false,
            });
export const  StackBottomApp = createAppContainer(TabBottom);