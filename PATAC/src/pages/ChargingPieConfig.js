/**
 * zhang.kai 2018/4/17
 */
import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import { 
    View,
    ScrollView,
    TouchableOpacity,
    StyleSheet,
    Text,
    Button,
    Switch,
    Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import SearchDevicesScreen from './SearchDevices';
import SearchChargingPie from './SearchChargingPie';
import AccountInfo from './AccountInfo';

/**
 * 充电桩设定页面
 */
let list = ['SOC电量停机设定', '设定'];

export default class ChargingPieConfig extends React.Component{

    constructor(props) { 
        super(props); 
        this.state = { 
            listExpand:[false,false,false],//true表示有数据更新 
        }; 
    }

    renderMenuList(list) { 
        return list.map((item, i) => this.renderItem(item, i)); 
    }

    onPressItem(i){ 
        let l=this.state.listExpand; 
        l[i]=!l[i]; 
        this.setState({listExpand:l}); 
    } 
    renderItem(item, i) { 
        return (
            <View key={i}> 
                <TouchableOpacity 
                    activeOpacity={0.75} 
                    onPress={this.onPressItem.bind(this,i)} > 
                    <View style={styles.itemContainer} >
                        <Text style={{paddingLeft:20}}>{item}</Text>
                        <Icon color="gray" size={30} name={this.state.listExpand[i]?'angle-down':'angle-right'} />       
                    </View> 
                </TouchableOpacity> 
            </View>
        ); 
    } 

    render() { 
        return ( 
            <View> 
                <ScrollView contentContainerStyle={styles.contentContainer}> 
                    {this.renderMenuList(list)}
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
                </ScrollView>
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
        paddingRight: 20, 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        backgroundColor: 'white', 
        borderBottomColor: '#ccc', 
        borderBottomWidth: 0.5,
    }, 
    accountContent:{
        height: 36,
        paddingRight:10,
        flexDirection:'row',
        alignItems: 'center', 
        justifyContent: 'space-between',
    },
    contentFont:{
        fontSize:14,
        marginLeft:30,
    },
})