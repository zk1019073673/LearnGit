/**
 * zhang.kai 2018/4/13
 */
import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import { 
    View,
    Text,
    Slider,
    StyleSheet,
    Picker,
    Dimensions,
} from 'react-native';

var {
    width: deviceWidth
} = Dimensions.get('window');

/**
 * 环境仓参数编辑页面
 */
export default class EnvirWareHouseEditScreen extends React.Component{
    constructor(props) {
        super(props);
        this.state={content:null}
    }

    state = {
        tempValue:0,
        humidValue:0,
    }
    render(){
        return(
            <View>
                <View>
                    <View style={styles.content}>
                        <Text>目标温度</Text>
                        <Text>{this.state.tempValue}℃</Text>
                    </View>
                    <Slider
                        thumbImage={require('../images/circle.png')}
                        minimumTrackTintColor='black'
                        minimumValue={0} 
                        maximumValue={100} 
                        onValueChange={(value)=>{this.setState({tempValue:value})}} 
                        onSlidingComplete={(value)=>{this.setState({tempValue:value})}}/>
                </View>

                <View>
                    <View style={styles.content}>
                        <Text>目标湿度</Text>
                        <Text>{this.state.humidValue}%</Text>
                    </View>
                    <Slider
                        thumbImage={require('../images/circle.png')}
                        minimumTrackTintColor='black'
                        minimumValue={0} 
                        maximumValue={100} 
                        onValueChange={(value)=>{this.setState({humidValue:value})}} 
                        onSlidingComplete={(value)=>{this.setState({humidValue:value})}}/>
                </View>

                <View style={styles.content}>
                    <View>
                        <Text style={{fontWeight:'bold'}}>持续时间 :</Text>
                    </View>
                    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                        <View><Text style={{fontSize:16}}>每</Text></View>

                        <Picker
                                selectedValue={this.state.content}
                                style={{ height: 50, width:deviceWidth/3}}
                                onValueChange={(itemValue, itemIndex) => this.setState({content: itemValue})}>
                            <Picker.Item label="1" />
                            <Picker.Item label="2" value="timeUp" />
                            <Picker.Item label="3" value="timeDown" />
                        </Picker>

                        <Picker
                                selectedValue={this.state.content}
                                style={{ height: 50, width:deviceWidth/3}}
                                onValueChange={(itemValue, itemIndex) => this.setState({content: itemValue})}>
                            <Picker.Item label="分钟" />
                            <Picker.Item label="小时" value="timeUp" />
                        </Picker>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    content:{
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        marginTop:30,
    }
})