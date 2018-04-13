/**
 * zhang.kai 2018/4/13
 */
import React, { Component } from 'react';
import {
    View,
    ScrollView,
    Text,
    StyleSheet,
} from 'react-native';

/**
 * 故障记录页面
 */
export default class FaultRecords extends Component {
  
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.cell}>
          <Text>2018/02/14</Text>
          <Text>17:00</Text>
          <Text>温度超标</Text>
        </View>
        <View style={styles.cellWhite}>
          <Text>2018/02/14</Text>
          <Text>17:00</Text>
          <Text>温度超标</Text>
        </View>
        <View style={styles.cell}>
          <Text>2018/02/14</Text>
          <Text>17:00</Text>
          <Text>温度超标</Text>
        </View>
        <View style={styles.cellWhite}>
          <Text>2018/02/14</Text>
          <Text>17:00</Text>
          <Text>温度超标</Text>
        </View>
        <View style={styles.cell}>
          <Text>2018/02/14</Text>
          <Text>17:00</Text>
          <Text>温度超标</Text>
        </View>
        <View style={styles.cellWhite}>
          <Text>2018/02/14</Text>
          <Text>17:00</Text>
          <Text>温度超标</Text>
        </View>
        <View style={styles.cell}>
          <Text>2018/02/14</Text>
          <Text>17:00</Text>
          <Text>温度超标</Text>
        </View>
        <View style={styles.cellWhite}>
          <Text>2018/02/14</Text>
          <Text>17:00</Text>
          <Text>温度超标</Text>
        </View>
        <View style={styles.cell}>
          <Text>2018/02/14</Text>
          <Text>17:00</Text>
          <Text>温度超标</Text>
        </View>
        <View style={styles.cellWhite}>
          <Text>2018/02/14</Text>
          <Text>17:00</Text>
          <Text>温度超标</Text>
        </View>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
      flex:1,
  },
  header: {
      backgroundColor: 'white',
  },
  cell: {
      flexDirection:'row',
      height:40,
      backgroundColor:'#E6E6E6',
      justifyContent:'space-around',
      alignItems:'center',
  },
  cellWhite: {
      flexDirection:'row',
      height:40,
      backgroundColor:'#FFFFFF',
      justifyContent:'space-around',
      alignItems:'center',
  },

})