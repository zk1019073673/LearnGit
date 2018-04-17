/**
 * zhang.kai 2018/4/17
 */
import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import { View,
        ScrollView,
        StyleSheet,
        Text,
        Image,
        TextInput,
        TouchableOpacity } from 'react-native';
import { Button,Tabs } from 'antd-mobile';
import px2dp from '../utils/px2pd';
import MyButton from '../component/button';

/**
 * 充电桩状态详情页
 */

const tabs = [
    {title:<Text style={{fontSize:18}}>A枪充电桩状态</Text>},
    {title:<Text style={{fontSize:18}}>B枪充电桩状态</Text>},
];
export default class ChargingPieState extends React.Component{
    render(){
        return(
            <ScrollView style={styles.LoginModal}>
                <View style={styles.textTitle}><Text style={{marginLeft:15}}>充电桩状态</Text></View>
                <View style={styles.contentText}>
                    <Text>设备名称</Text>
                    <Text>002 A区充电桩</Text>
                </View>
                <View style={styles.contentText}>
                    <Text>设备状态</Text>
                    <Text>正在充电</Text>
                </View>
                <View style={styles.contentText}>
                    <Text>设备描述</Text>
                    <Text>安悦充电桩</Text>
                </View>
                <View style={styles.contentText}>
                    <Text>设备位置</Text>
                    <Text>安徽广德试车场</Text>
                </View>

                <View style={styles.LoginTabs}>
                    <Tabs tabs={tabs} 
                        tabBarActiveTextColor='black' 
                        tabBarInactiveTextColor='gray' >
                        <View>
                            <View style={styles.textTitle}><Text style={{marginLeft:15}}>设备基本信息</Text></View>
                            <View style={styles.contentText}>
                                <Text>卡号</Text>
                                <Text>12345内</Text>
                            </View>
                            <View style={styles.contentText}>
                                <Text>充电电压</Text>
                                <Text>110V</Text>
                            </View>
                            <View style={styles.contentText}>
                                <Text>充电电流</Text>
                                <Text>2A</Text>
                            </View>
                            <View style={styles.textTitle}><Text style={{marginLeft:15}}>设备充电信息</Text></View>
                            <View style={styles.contentText}>
                                <Text>充电量(已充/预计)</Text>
                                <Text>80%/100%</Text>
                            </View>
                            <View style={styles.contentText}>
                                <Text>充电时间(已充/预计)</Text>
                                <Text>1.5h/3h</Text>
                            </View>
                            <View style={styles.contentText}>
                                <Text>电池最高温度</Text>
                                <Text>40℃</Text>
                            </View>
                            <View style={styles.contentText}>
                                <Text>当前电压</Text>
                                <Text>110V</Text>
                            </View>
                            <View style={styles.contentText}>
                                <Text>已充金额</Text>
                                <Text>￥10</Text>
                            </View>
                            <View style={styles.contentText}>
                                <Text>SOC</Text>
                                <Text>40%</Text>
                            </View>

                            <View style={styles.videoHeader}>
                            <Text>现场视频</Text>
                            </View>
                            <View style={styles.videoZone}>
                                <TouchableOpacity onPress={() => {alert('No Video Exist!')}}>
                                    <Image style={{width:50,height:50}} source={require('../images/media_player.png')}/>
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View>
                            <View style={styles.textTitle}><Text style={{marginLeft:15}}>设备基本信息</Text></View>
                            <View style={styles.contentText}>
                                <Text>卡号</Text>
                                <Text>12345内</Text>
                            </View>
                            <View style={styles.contentText}>
                                <Text>充电电压</Text>
                                <Text>110V</Text>
                            </View>
                            <View style={styles.contentText}>
                                <Text>充电电流</Text>
                                <Text>2A</Text>
                            </View>
                            <View style={styles.textTitle}><Text style={{marginLeft:15}}>设备充电信息</Text></View>
                            <View style={styles.contentText}>
                                <Text>充电量(已充/预计)</Text>
                                <Text>80%/100%</Text>
                            </View>
                            <View style={styles.contentText}>
                                <Text>充电时间(已充/预计)</Text>
                                <Text>1.5h/3h</Text>
                            </View>
                            <View style={styles.contentText}>
                                <Text>电池最高温度</Text>
                                <Text>40℃</Text>
                            </View>
                            <View style={styles.contentText}>
                                <Text>当前电压</Text>
                                <Text>110V</Text>
                            </View>
                            <View style={styles.contentText}>
                                <Text>已充金额</Text>
                                <Text>￥10</Text>
                            </View>
                            <View style={styles.contentText}>
                                <Text>SOC</Text>
                                <Text>40%</Text>
                            </View>

                            <View style={styles.videoHeader}>
                            <Text>现场视频</Text>
                            </View>
                            <View style={styles.videoZone}>
                                <TouchableOpacity onPress={() => {alert('No Video Exist!')}}>
                                    <Image style={{width:50,height:50}} source={require('../images/media_player.png')}/>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </Tabs>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    textTitle:{
        flexDirection:'row',
        backgroundColor:'#E6E6E6',
        height:35,
        alignItems:'center',
    },
    contentText:{
        flexDirection:'row',
        paddingTop:10,
        paddingBottom:10,
        justifyContent:'space-between',
        paddingLeft:20,
        paddingRight:20,
        alignItems:'center',
    },
    userNameLogin:{
        flexDirection:'row',
        backgroundColor:'#E6E6E6',
        marginTop:30,
    },
    userNameInput:{
        flex:5,
        borderBottomWidth:1,
        borderBottomColor:'#BDBDBD',
        fontSize:20
    },
    phoneLogin:{
        flexDirection:'row',
        backgroundColor:'#E6E6E6',
        marginTop:30
    },
    phoneLoginInput:{
        flex:5,
        borderBottomWidth:1,
        borderBottomColor:'#BDBDBD',
        fontSize:20
    },
    LoginModal:{
        flex:1,
        flexDirection:'column',
    },
    LoginModalTitle:{
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        borderBottomColor:'#DCDCDC',
        borderStyle:'solid',
    },
    LoginModalLoginText:{
        fontSize:px2dp(28),
        fontWeight:'bold',
        paddingBottom:px2dp(7),
        paddingTop:px2dp(5)
    },
    LoginTabs:{
        flex:1,
        backgroundColor:'#F4F4F4',
    },
    LoginTabsUserNumber:{
        flexDirection:'row',
        backgroundColor:'#E6E6E6',
        alignItems:'center',
    },
    LoginTabsUserNumberText:{
        flex:1,
        paddingTop:px2dp(15),
        paddingLeft:px2dp(20),
        fontWeight:'bold'
    },
    LoginTabsUserPwd:{
        flex:1,
        paddingTop:px2dp(15),
        paddingLeft:px2dp(20),
        fontWeight:'bold',
    },
    LoginTabsPhoneVerify:{
        flex:2,
        height:px2dp(30),
        marginRight:10
    },
    videoHeader: {
        flexDirection:'row',
        alignItems:'center',
        height:35,
        paddingLeft:20,
        backgroundColor: '#E6E6E6',
    },
    videoZone: {
        flex:1,
        height:200,
        backgroundColor: '#CCCCCC',
        justifyContent:'center',
        alignItems:'center',
    }
})