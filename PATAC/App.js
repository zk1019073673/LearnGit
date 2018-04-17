/**
 * zhang.kai 2018/4/13 
 */
import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import { Text } from 'react-native';
import LoginScreen from './src/pages/Login';
import ContentScreen from './src/pages/Content';
import SearchDevicesScreen from './src/pages/SearchDevices';
import SearchChargingPie from './src/pages/SearchChargingPie';
import AccountInfo from './src/pages/AccountInfo';
import AccountEdit from './src/pages/AccountEdit';
// 引入引导页组件
import SplashScreen from 'rn-splash-screen';

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
        SearchChargingPie: {
            screen: SearchChargingPie,
        },
        AccountInfo: {
            screen: AccountInfo,
        },
        AccountEdit: {
            screen: AccountEdit,
        },
    },

    {
        initialRouteName:'Login',
    }
  );
  
export default class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {};
    }
    
    componentDidMount() {
        setTimeout(() => {
            SplashScreen.hide();
        }, 2000);
    }
    
    render() {
        return <RootStack />;
    }
}