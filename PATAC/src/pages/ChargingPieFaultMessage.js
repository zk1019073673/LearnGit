/**
 * zhang.kai 2018/4/17
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
 * 充电桩故障信息页面
 */
export default class ChargingPieFaultMessage extends Component {

    render(){
        return(
            <View>
                <MessageDetails></MessageDetails>
                <FaultRecords></FaultRecords>
            </View>
        );
    }

}