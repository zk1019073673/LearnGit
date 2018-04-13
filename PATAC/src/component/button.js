/**
 * zhangkai 2018-3-23
 */
import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';

export default class MyButton extends Component {
    constructor(props){
        super(props);
    }
    customPressHandler = () =>{
        const{press} = this.props;
        press();
    }

    render() {
        const {backcolor} = this.props;
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    style={[styles.button,{backgroundColor:backcolor}]}
                    onPress={this.customPressHandler}
                >
                    <Text style={styles.buttonText}>{this.props.text}</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    button:{
        height:40,
        width:100,
        justifyContent:'center'
    },
    buttonText:{
        textAlign:'center',
        color:'white'
    },
    container: {
        margin:10,
        flexDirection:'row',
        justifyContent: 'center'
    }
});
