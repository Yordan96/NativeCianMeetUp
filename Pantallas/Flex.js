import React, { Component } from 'react';
import {View, Image, StyleSheet} from 'react-native';
import Colors from "react-native/Libraries/NewAppScreen/components/Colors";

export default class FlexDirectionBasics extends Component {
  render() {
    return (
        <View>
            <View style={{flex: 1, flexDirection: 'row'}}>
                <View style={{width: 90, height: 90, backgroundColor: 'yellow', flex: 1}} >
                    <Image source={require('../assets/img/batmann.png')} style={{height:70, width:90, resizeMode: 'stretch'}} />
                </View>
                <View style={{width: 90, height: 90, backgroundColor: 'red', alignSelf: 'flex-start' }}>
                    <Image source={require('../assets/img/wonderwoman.png')} style={{height:90, width:90, resizeMode: 'stretch'}} />
                </View>
                <View style={{width: 90, height: 90, backgroundColor: 'black'}} >
                    <Image source={require('../assets/img/cyborg.png')} style={{height:90, width:90, resizeMode: 'stretch'}} />
                </View>
            </View>
        </View>
    );
  }
};


//justifyContent:'space-between
//justifyContent:'space-around'
