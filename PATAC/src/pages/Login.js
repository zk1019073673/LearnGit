/**
 * zhang.kai 2018/4/13
 */
import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import { View,
        StyleSheet,
        Text,
        Image,
        TextInput,
        TouchableOpacity } from 'react-native';
import { Button,Tabs } from 'antd-mobile';
import px2dp from '../utils/px2pd';
import MyButton from '../component/button';

/**
 * 登录页面
 */
const tabs = [
    {title:'静态登入'},
    {title:'动态登入'},
];

export default class LoginScreen extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <View style={styles.LoginModal}>
                <View style={styles.LoginModalTitle}>
                    <Image source={require('../images/logo.png')}/>
                    <Text>泛亚汽车技术中心</Text> 
                </View>
                <View style={styles.LoginTabs}>
                    <Tabs tabs={tabs} style={{margin:40}}>
                        <View>
                            <View style={styles.userNameLogin}>
                                <TextInput placeholder='用户名称或电邮'
                                           placeholderTextColor={'#C0C0C0'}
                                           underlineColorAndroid="transparent"
                                           style={styles.userNameInput}>
                                </TextInput>
                            </View>
                            <View style={styles.LoginTabsUserNumber}>
                                <TextInput placeholder='用户密码'
                                           placeholderTextColor={'#C0C0C0'}
                                           underlineColorAndroid="transparent"
                                           style={{flex:5}}
                                           secureTextEntry={true}
                                >
                                </TextInput>
                            </View>

                            <View>
                                <MyButton text={"登入"} backcolor={"#333333"} press={() => this.props.navigation.navigate('Content')}>
                                </MyButton>
                            </View>

                        </View>

                        <View>
                            <View style={styles.phoneLogin}>
                                <TextInput placeholder='请输入手机•范例：130-11223344'
                                           placeholderTextColor={'#C0C0C0'}
                                           underlineColorAndroid="transparent"
                                           style={styles.phoneLoginInput}
                                           autoFocus={true}
                                >
                                </TextInput>
                            </View>
                            <View style={styles.LoginTabsUserNumber}>
                                <TextInput placeholder='动态密码'
                                           placeholderTextColor={'#C0C0C0'}
                                           underlineColorAndroid="transparent"
                                           style={{flex:3}}
                                >
                                </TextInput>
                                <Button  size="small" style={styles.LoginTabsPhoneVerify}>发送动态短信</Button>
                            </View>
                            <View>
                                <MyButton text={"登入"} backcolor={"#333333"} press={() => this.props.navigation.navigate('Content')}>
                                </MyButton>
                            </View>
                        </View>
                    </Tabs>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    userNameLogin:{
        flexDirection:'row',
        backgroundColor:'#E6E6E6',
        marginTop:30
    },
    userNameInput:{
        flex:5,
        borderBottomWidth:1,
        borderBottomColor:'#BDBDBD'
    },
    phoneLogin:{
        flexDirection:'row',
        backgroundColor:'#E6E6E6',
        marginTop:30
    },
    phoneLoginInput:{
        flex:5,
        borderBottomWidth:1,
        borderBottomColor:'#BDBDBD'
    },
    LoginModal:{
        flex:1,
        flexDirection:'column',
        height:50,
        justifyContent: 'space-between'
    },
    LoginModalTitle:{
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        borderBottomColor:'#DCDCDC',
        borderStyle:'solid',
        marginTop:40
    },
    LoginModalLoginText:{
        fontSize:px2dp(20),
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
        backgroundColor:'#E6E6E6'
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
        fontWeight:'bold'
    },
    LoginTabsPhoneVerify:{
        flex:2,
        height:px2dp(35),
        marginTop:px2dp(5)
    },
    LoginTabsPhoneVerifyMess:{
        color:'#939393',
        fontSize:px2dp(12),
        paddingTop:px2dp(10),
        paddingLeft:px2dp(100)
    }
});