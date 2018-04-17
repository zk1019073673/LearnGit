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
    Button,
    Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import SearchDevicesScreen from './SearchDevices';
import SearchChargingPie from './SearchChargingPie';
import AccountInfo from './AccountInfo';

/**
 * 设备群组页面
 */
let list = ['区域一：公用', '区域二：广德环境仓', '区域三：黑河','区域四：燃热区域'];  
let list2 = ['设备一:环境仓'];

/**
 * 实际设备群组页面
 * @param {*} props 
 */
export default class ContentScreen extends React.Component{

    constructor(props) { 
        super(props); 
        this.state = { 
            listExpand:[false,false,false],//true表示有数据更新 
        }; 
    }

    static navigationOptions = ({navigation}) => {
        const params = navigation.state.params || {};
        return {
            headerRight: (
                <TouchableOpacity onPress={() => navigation.navigate('AccountInfo')}>
                    <Image style={{width:25,height:25,marginRight:15}} source={require('../images/personal-center.png')} ></Image>
                </TouchableOpacity>
            ),
            headerTitle:'设备群组列表'
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
                        <Image source={require('../images/process.png')} style={{width:25,height:25}}></Image>
                        <Text style={{paddingRight:80}}>{item}</Text>
                        <Icon color="gray" size={30} name={this.state.listExpand[i]?'angle-down':'angle-right'} />       
                    </View> 
                </TouchableOpacity> 
                    {this.state.listExpand[i]?this.renderSubItem():null}
            </View>
        ); 
    } 
    // renderSubMenuList(list2) { 
    //     return list2.map((item, i) => this.renderSubItem(item, i)); 
        
    // } 
    renderSubItem() { 
        return (
            <View>
                <TouchableOpacity activeOpacity={0.5} 
                                  onPress = {() => {this.props.navigation.navigate('SearchDevices',{deviceName:'设备一'})}}>
                    <View style={styles.itemContainer}>
                        <Image style={{width:25,height:25,marginLeft:50}} source={require('../images/Envir-Icon.png')}></Image>
                        <Text style={{paddingRight:200}}>设备一：环境舱</Text>
                        <Icon color="gray" size={30} name='angle-right' />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.5} 
                                  onPress = {() => {this.props.navigation.navigate('SearchChargingPie',{deviceName:'设备二'})}}>
                    <View style={styles.itemContainer}>
                        <Image style={{width:25,height:25,marginLeft:50}} source={require('../images/ChargingPie.png')}></Image>
                        <Text style={{paddingRight:200}}>设备二：充电桩</Text>
                        <Icon color="gray" size={30} name='angle-right' />
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
        paddingRight: 10, 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        backgroundColor: 'white', 
        borderBottomColor: '#ccc', 
        borderBottomWidth: 0.5,
    }, 
})