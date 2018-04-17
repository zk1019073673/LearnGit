/**
 * zhang.kai 2018/4/13
 */
import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import { 
    View,
    ScrollView,
    TouchableOpacity,
    StyleSheet,
    Text,
    Switch,
    Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import AccountEdit from './AccountEdit';

/**
 * 账户信息页内容
 */
export default class AccountInfo extends React.Component{
    constructor(props) { 
        super(props); 
        this.state = { 
            truePushOn: true,
            falsePushOn: false,
            trueControlOn: true,
            falseControlOn: false,
        }; 
    }

    static navigationOptions = ({navigation}) => {
        const params = navigation.state.params || {};
        return {
            headerRight: (
                <TouchableOpacity onPress={() => navigation.navigate('AccountEdit')}>
                    <Text style={{marginRight:15,fontSize:15,fontWeight:'bold'}}>编辑</Text>
                </TouchableOpacity>
            ),
            headerLeft:(
                <TouchableOpacity onPress = {() => {navigation.navigate('Content')}}>
                    <Text style={{marginLeft:15,fontSize:15,fontWeight:'bold'}}>返回</Text>
                </TouchableOpacity>
            ),
            headerTitle:'账户信息'
        };
    };

    render(){
        return(
            <View>
                <View  style={styles.title}>
                    <Text style={{marginLeft:20}}>账户信息</Text>
                </View>

                <View style={{paddingLeft:20,paddingRight:20}}>
                    <View style={styles.accountContent}>
                        <Text style={styles.contentFont}>账户名称</Text>
                        <Text style={styles.contentFont}>Admin</Text>
                    </View>
                    <View style={styles.accountContent}>
                        <Text style={styles.contentFont}>密码</Text>
                        <Text style={styles.contentFont}>********</Text>
                    </View>
                    <View style={styles.accountContent}>
                        <Text style={styles.contentFont}>权限</Text>
                        <Text style={styles.contentFont}>Admin</Text>
                    </View>
                    <View style={styles.accountContent}>
                        <Text style={styles.contentFont}>短信和电邮推送</Text>
                        <Switch
                            onValueChange={(value) => this.setState({falsePushOn: value})}
                            thumbTintColor={'#FFFFFF'}
                            tintColor={'#B3B3B3'}
                            onTintColor={'#666666'}
                            style={{marginBottom:10,marginTop:10}}
                            value={this.state.falsePushOn} />
                    </View>
                    <View style={styles.accountContent}>
                        <Text style={styles.contentFont}>设备控制权状态</Text>
                        <Switch
                            onValueChange={(value) => this.setState({falseControlOn: value})}
                            thumbTintColor={'#FFFFFF'}
                            tintColor={'#B3B3B3'}
                            onTintColor={'#666666'}
                            style={{marginBottom:10,marginTop:10}}
                            value={this.state.falseControlOn} />
                    </View>  
                </View>

                <View  style={styles.title}>
                    <Text style={{marginLeft:20}}>个人信息</Text>
                </View>

                <View style={{paddingLeft:20,paddingRight:20}}>
                    <View style={styles.accountContent}>
                        <Text style={styles.contentFont}>姓名</Text>
                        <Text style={styles.contentFont}>Admin</Text>
                    </View>
                    <View style={styles.accountContent}>
                        <Text style={styles.contentFont}>手机</Text>
                        <Text style={styles.contentFont}>130-11223344</Text>
                    </View>
                    <View style={styles.accountContent}>
                        <Text style={styles.contentFont}>邮箱</Text>
                        <Text style={styles.contentFont}>Example@patac.com.cn</Text>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    titleText:{
        flex:1,
        flexDirection:'row',
        alignItems: 'center', 
        justifyContent: 'space-between',
    },
    title:{
        height: 40,
        flexDirection:'row',
        alignItems: 'center', 
        backgroundColor: '#E6E6E6',
    },
    accountContent:{
        height: 36,
        flexDirection:'row',
        alignItems: 'center', 
        justifyContent: 'space-between',
    },
    contentFont:{
        fontSize:16,
    },
})