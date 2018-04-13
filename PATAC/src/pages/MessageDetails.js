/**
 * zhangkai 2018/4/11
 */
import React, {Component} from 'react';
import {
    View,
    Picker,
    Dimensions,
    StyleSheet,
} from 'react-native';


var {
    width: deviceWidth
} = Dimensions.get('window');

export default class MessageDetails extends Component{
    constructor(props) {
        super(props);
        this.state={content:null}
    }
    render(){
        return(
            <View>
                <View style={styles.container}>
                    <Picker
                            selectedValue={this.state.content}
                            style={{ height: 50, width:deviceWidth/3}}
                            onValueChange={(itemValue, itemIndex) => this.setState({content: itemValue})}>
                        <Picker.Item label="日期" />
                        <Picker.Item label="升序" value="timeUp" />
                        <Picker.Item label="降序" value="timeDown" />
                    </Picker>
                    <Picker
                            selectedValue={this.state.content}
                            style={{ height: 50, width:deviceWidth/3}}
                            onValueChange={(itemValue, itemIndex) => this.setState({content: itemValue})}>
                        <Picker.Item label="时间" />
                        <Picker.Item label="升序" value="timeUp" />
                        <Picker.Item label="降序" value="timeDown" />
                    </Picker>
                    <Picker
                            selectedValue={this.state.content}
                            style={{ height: 50, width:deviceWidth/3}}
                            onValueChange={(itemValue, itemIndex) => this.setState({content: itemValue})}>
                        <Picker.Item label="故障咨询" />
                        <Picker.Item label="温度超标" value="temperOverflow" />
                    </Picker>
                </View>
            </View>
            
        
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'center',
        backgroundColor:'#B3B3B3',
    }
})