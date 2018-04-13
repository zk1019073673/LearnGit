/**
 * zhang.kai 2018/4/13 
 */
import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import { Text } from 'react-native';
import LoginScreen from './src/pages/Login';
import ContentScreen from './src/pages/Content';
import SearchDevicesScreen from './src/pages/SearchDevices';
import AccountInfo from './src/pages/AccountInfo';

/**
 * 程序路由，初始化为登录页面
 */
const RootStack = StackNavigator(
    {
        Login: {
            screen: LoginScreen,
            navigationOptions:{
                header:null,
            }
        },
        Content: {
            screen: ContentScreen,
            navigationOptions:{
                headerLeft:<Text></Text> 
            }
        },
        SearchDevices: {
            screen: SearchDevicesScreen,
        },
        AccountInfo: {
            screen: AccountInfo,
        }
    },

    {
        initialRouteName:'Login',
    }
  );
  
export default class App extends React.Component {
    render() {
        return <RootStack />;
    }
}