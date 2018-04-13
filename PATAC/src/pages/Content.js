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
import AccountInfo from './AccountInfo';

/**
 * 设备群组页面,尚未实现导航栏按钮点击跳转
 */
let list = ['区域一：公用', '区域二：广德环境仓', '区域三：黑河','区域四：燃热区域'];  
let list2 = ['设备一', '设备二'];

/**
 * 自定义的导航栏
 */
class LogoTitle extends React.Component {
    render() {
        return (
            <View style={styles.titleText}>
                <Text style={{marginLeft:70,fontSize:18,fontWeight:'bold'}}>设备群组列表</Text>
                <TouchableOpacity onPress={() => {alert('无法跳转')}}>
                    <Image style={{width:25,height:25,marginRight:15}} source={require('../images/personal-center.png')} ></Image>
                </TouchableOpacity>
            </View>
        
        );
    }
}

/**
 * 实际设备群组页面
 * @param {*} props 
 */
export default class ContentScreen extends Component{

    constructor(props) { 
        super(props); 
        this.state = { 
            listExpand:[false,false,false],//true表示有数据更新 
        }; 
    }

    static navigationOptions = {
        headerTitle:<LogoTitle/>
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
                    {this.state.listExpand[i]?this.renderSubMenuList(list2):null} 
            </View>
        ); 
    } 
    renderSubMenuList(list2) { 
        return list2.map((item, i) => this.renderSubItem(item, i)); 
    } 
    renderSubItem(item, i) { 
        return (
            <View key={i}>
                <TouchableOpacity activeOpacity={0.5} 
                                  onPress = {() => {this.props.navigation.navigate('SearchDevices',{deviceName:item})}}>
                    <View style={styles.itemContainer}>
                        <Image style={{width:25,height:25,marginLeft:50}} source={require('../images/ChargingPie.png')}></Image>
                        <Text style={{paddingRight:200}}>{item}</Text>
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
                <TouchableOpacity style={styles.center} onPress={() => {this.props.navigation.navigate('AccountInfo')}}>
                    <Image style={{width:50,height:50,marginRight:15}} source={require('../images/personal-center.png')} ></Image>
                </TouchableOpacity> 
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