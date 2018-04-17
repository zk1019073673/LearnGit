/**
 * zhang.kai 2018/4/17
 */
import React, {Component} from 'react';
import {StackNavigator} from 'react-navigation';
import {View,
        ScrollView,
        Text,
        TouchableOpacity,
        StyleSheet,
        TextInput,
        } from 'react-native';
import AccountInfo from './AccountInfo';

export default class AccountEdit extends React.Component{

    static navigationOptions = ({navigation}) => {
        const params = navigation.state.params || {};

        return {
            headerTitle:'账户编辑',
            headerLeft:(
                <TouchableOpacity onPress = {() => {navigation.navigate('AccountInfo')}}>
                    <Text style={{marginLeft:15,fontSize:15,fontWeight:'bold'}}>取消</Text>
                </TouchableOpacity>
            ),
            headerRight:(
                <TouchableOpacity onPress = {() => {alert('保存成功！')}}>
                    <Text style={{marginRight:15,fontSize:15,fontWeight:'bold'}}>保存</Text>
                </TouchableOpacity>
            ),
        };
        
    }

    render(){
        return(
            <ScrollView style={styles.container}>
                <View style={styles.theme}>
                    <Text style={{fontSize:15,fontWeight:'bold'}}>变更密码</Text>
                </View>
                <View style={styles.items}>
                    <Text>旧密码</Text>
                    <TextInput placeholder='请输入8-16位英文或数字' underlineColorAndroid='#3A3A3A' secureTextEntry={true}></TextInput>
                    <Text>新密码</Text>
                    <TextInput placeholder='请输入8-16位英文或数字' underlineColorAndroid='#3A3A3A' secureTextEntry={true}></TextInput>
                    <Text>再输一次新密码</Text>
                    <TextInput placeholder='请输入8-16位英文或数字' underlineColorAndroid='#3A3A3A' secureTextEntry={true}></TextInput>
                </View>
                <View style={styles.theme}>
                    <Text style={{fontSize:15,fontWeight:'bold'}}>个人信息</Text>
                </View>
                <View style={styles.items}>
                    <Text>姓名</Text>
                    <TextInput placeholder='请输入8-16位英文或数字' underlineColorAndroid='#3A3A3A'></TextInput>
                    <Text>手机</Text>
                    <TextInput placeholder='请输入8-16位英文或数字' underlineColorAndroid='#3A3A3A'></TextInput>
                    <Text>电邮</Text>
                    <TextInput placeholder='请输入8-16位英文或数字' underlineColorAndroid='#3A3A3A'></TextInput>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        
    },
    theme:{
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:'#E6E6E6',
        paddingLeft:10,
        height:35,
    },
    items:{
        flexDirection:'column',
        paddingTop:10,
        paddingLeft:18,
        paddingRight:18,
    },
});