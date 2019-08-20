/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import ListaCompra from '../Components/ListaCompra';

const Tareas = () => {
    return (
        <View>
          <ScrollView>
            <ListaCompra />
          </ScrollView>
        </View>
    );
};
export default Tareas;
