/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
} from 'react-native';

import {
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Header from '../Components/Header';
import Seconds from '../Components/Seconds';
import ListaCompra from '../Components/ListaCompra';

class Home extends React.Component {
  static navigationOptions = {
    title: 'Inicio',
    headerStyle: {
      backgroundColor: '#0d84f4',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };
  render(){
    const {navigate} = this.props.navigation;

    return (
        <Fragment>
          <StatusBar barStyle="dark-content" />
          {/*<StatusBar barStyle="ligth-content" />*/}
          <SafeAreaView>
            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                style={styles.scrollView}>
              <Header />
              <View style={styles.body}>
                <Seconds/>
                <View style={styles.sectionContainer}>
                  <Text style={styles.sectionTitle}>Ejemplos de Componentes principales</Text>
                  <View style={styles.separator} />
                  <View style={styles.linkContainer}>
                    <Button
                        title="Tareas"
                        onPress={() => navigate('Tareas', {title: 'Ejemplo Tareas'})}
                    />
                  </View>
                  <View style={styles.separator} />
                  <View style={styles.linkContainer}>
                    <Button
                        title="FlexBox"
                        onPress={() => navigate('Flex')}
                    />
                  </View>
                </View>
              </View>
            </ScrollView>
          </SafeAreaView>
        </Fragment>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  linkContainer: {
    paddingVertical: 8,
  },
  separator: {
    backgroundColor: Colors.light,
    height: 1,
  },
});

export default Home;
