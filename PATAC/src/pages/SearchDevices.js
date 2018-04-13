/**
 * zhang.kai 2018/4/13
 */
import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import ScrollableTabView,{DefaultTabBar} from 'react-native-scrollable-tab-view';
import { 
    View,
    ScrollView,
    TouchableOpacity,
    StyleSheet,
    Text,
    Image,
    Dimensions,
    TouchableHighlight,
} from 'react-native';

//将设备信息的三个页面导入
import EnvirWareHouseState from './EnvirWareHouseState';
import FaultMessage from './FaultMessage';
import EnvirWareHouseConfig from './EnvirWareHouseConfig';

//获取设备的宽度和高度
var {
    height: deviceHeight,
    width: deviceWidth
} = Dimensions.get('window');

/**
 * 设备详情页
 */
export default class SearchDevicesScreen extends React.Component{
    //将设备群组页中的设备名称传入查找设备页
    static navigationOptions = ({ navigation }) => {
        const { params } = navigation.state;
        
        return {
          title: params ? params.deviceName : '无法找到该设备',
          headerStyle: {
            backgroundColor: '#B3B3B3',
          },
          headerTintColor: '#3A3A3A',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }
    };

    render(){
        return (
            <ScrollableTabView renderTabBar={() => <DefaultTabBar/>}>
                <EnvirWareHouseState tabLabel="环境舱状态" />
                <FaultMessage tabLabel="故障信息" />
                <EnvirWareHouseConfig tabLabel="环境舱设定" />
            </ScrollableTabView>
          );
    }
        
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22
    },
    contentContainer: { 
        paddingBottom: 20, 
    }, 
    center: { 
        flexDirection: 'row', 
        justifyContent: 'center', 
        alignItems: 'center', 
    }, 
    itemContainer: {
        height: 50, 
        paddingLeft: 10,
        paddingRight: 10, 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        backgroundColor: '#B3B3B3', 
        borderBottomColor: '#ccc', 
        borderBottomWidth: 0.5,
    }, 
    naviRow: {
        flexDirection: 'row'
    },
    button: {
        width: deviceWidth / 3, //导航栏每个标签宽度为屏幕1/4
        height: 45,
        justifyContent: 'center'
    },
    textStyle1: {
        fontSize: 20,
        textAlign: 'center'
    }
})