/**
 * zhang.kai 2018/4/13
 */
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';
import MessageDetails from './MessageDetails';
import FaultRecords from './FaultRecords';

/**
 * 环境仓故障信息页面
 */
export default class FaultMessage extends Component {

    render(){
        return(
            <View>
                <MessageDetails></MessageDetails>
                <FaultRecords></FaultRecords>
            </View>
        );
    }

}