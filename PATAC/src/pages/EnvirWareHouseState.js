/**
 * zhang.kai 2018/4/13
 */
import React, { Component } from 'react';
import { 
    View,
    ScrollView,
    TouchableOpacity,
    StyleSheet,
    Text,
    Platform,
    Image } from 'react-native';
//导入acharts第三方库
import Echarts from 'native-echarts';
import Dimensions from 'Dimensions';
import Icon from 'react-native-vector-icons/FontAwesome';

const {width} = Dimensions.get('window');
let list = ['温度(实际值/目标值)', '湿度(实际值/目标值)'];

/**
 * 环境仓状态页面
 */
export default class EnvirWareHouseState extends Component {

    constructor(props) { 
        super(props); 
        this.state = { 
            listExpand:[false,false,false],//true表示有数据更新 
            tempValue:[10, 13, 12, 15, 18, 13, 20, 15],
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
                        <Text style={{paddingRight:80}}>{item}</Text>
                        <View style={{flexDirection:'row'}}>
                            <Text style={{fontWeight:'bold'}}>18</Text><Text>/18℃</Text>
                        </View>
                        <Icon color="gray" size={30} name={this.state.listExpand[i]?'angle-down':'angle-right'} />       
                    </View> 
                </TouchableOpacity> 
                    {this.state.listExpand[i]?this.renderSubItem():null} 
            </View>
        ); 
    } 
    renderSubItem() { 
        //chart部分
        const option = {
            //点击某一个点的数据的时候，显示出悬浮窗
            tooltip : {
                trigger: 'axis'
            },
            //可以手动选择现实几个图标
            legend: {
                data:['温度']
            },
            //各种表格
            toolbox: {
                //改变icon的布局朝向
                //orient: 'vertical',
                show : true,
                showTitle:true,
                feature : {
                    //show是否显示表格，readOnly是否只读
                    dataView : {show: false, readOnly: false},
                    magicType : {
                        //折线图 柱状图
                        type: ['line','bar'],
                    },
  
                }
            },
            xAxis : [
                {
                    //就是一月份这个显示为一个线段，而不是数轴那种一个点点
                    boundaryGap:true,
                    type : 'category',
                    name : '(小时)',
                    data : ['1','2','3','4','5','6','7','8']
                }
            ],
            yAxis : [
                {
                    type : 'value',
                    name : '温度(实际值/目标值)'
                }
            ],
            //图形的颜色组
            color:['#202020'],
            //需要显示的图形名称，类型，以及数据设置
            series : [
                {
                    type:'bar',
                    data:this.state.tempValue,
                }
            ]
        };
        return (
            <View style={styles.container}>
                <Echarts option={option} height={300} width={width}/>
            </View>
        ); 
    }

    render(){

        return(
            <View style={styles.container}>
                <View style={styles.header}><Text style={styles.text}>设备基本信息</Text></View>
                <View style={styles.state}>
                    <Text>设备状态</Text>
                    <View style={{flexDirection:'row'}}>
                        <Image style={{width:12,height:12,marginTop:2}} source={require('../images/green-dot.png')}/>
                        <Text style={{fontSize:12,paddingLeft:5}}>运行</Text>
                    </View>
                </View>
                <View> 
                    <ScrollView contentContainerStyle={styles.contentContainer}> 
                        {this.renderMenuList(list)} 
                    </ScrollView> 
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
        );
    }

}

const styles = StyleSheet.create({
    title:{
        color:'white',
        fontSize:20,
        textAlign:'center',
    },
    container: {
        flex: 1,
        paddingTop: 2
    },
    header: {
        flexDirection:'row',
        justifyContent: 'center',
        alignItems:'center',
        height:35,
        fontWeight: 'bold',
        backgroundColor: '#E6E6E6',
    },
    text: {
        fontSize: 16,
    },
    state: {
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        height:35,
        backgroundColor: '#FFFFFF',
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
    videoHeader: {
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        height:35,
        backgroundColor: '#E6E6E6',
    },
    videoZone: {
        flex:1,
        backgroundColor: '#CCCCCC',
        justifyContent:'center',
        alignItems:'center',
    }
})