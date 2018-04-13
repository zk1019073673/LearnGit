/**
 * zhang.kai 2018/4/13
 */
import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import MyButton from '../component/button';
import EnvirWareHouseEditScreen from './EnvirWareHouseEdit';

/**
 * 环境仓设置
 */
class EnvirWareHouseConfigScreen extends React.Component {

    render(){
        return(
            <View>
                <View style={{marginTop:30}}>
                    <View style={styles.content}>
                        <Text>目标温度</Text>
                        <Text>18℃</Text>
                    </View>
                    <View style={styles.content}>
                        <Text>目标湿度</Text>
                        <Text>60%</Text>
                    </View>
                    <View style={styles.content}>
                        <Text>持续时间</Text>
                        <Text>每1小时</Text>
                    </View>
                </View>
                
                <View>
                    <MyButton text={"编辑"} backcolor={"#333333"} press={() => this.props.navigation.navigate('EnvirWareHouseEdit')}>
                    </MyButton>
                </View>
            </View>
        );
    }
}

/**
 * 参数编辑页面路由
 */
const RootStack = StackNavigator(
    {
        
        EnvirWareHouseConfig:{
            screen: EnvirWareHouseConfigScreen,
            navigationOptions:{
                header:null,
            }
        },
        EnvirWareHouseEdit:{
            screen: EnvirWareHouseEditScreen,
            navigationOptions:{
                headerTitle:<Text style={{fontSize:20,fontWeight:'bold',marginLeft:50}}>环境舱设定编辑</Text>,
                headerRight:
                    <TouchableOpacity>
                        <Text style={{marginRight:16,fontSize:16}}>保存</Text>
                    </TouchableOpacity>,
            }
        }
    },

    {
        initialRouteName:'EnvirWareHouseConfig',
    }
  );
  
export default class EnvirWareHouseConfig extends React.Component {
    render() {
        return <RootStack />;
    }
}

const styles = StyleSheet.create({
    content:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginLeft:60,
        marginRight:60,
        height:50,
    }
})