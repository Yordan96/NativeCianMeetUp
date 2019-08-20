import React from 'react';
import {Text, StyleSheet, ImageBackground, TextInput, Button, View, FlatList} from 'react-native';

class ListaCompra extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [], text: '' };
    this.agregarTarea = this.agregarTarea.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  agregarTarea(text) {
    this.setState({ text });
  }

  handleSubmit(e) {
    const newItem = {
      text: this.state.text,
      id: Date.now()
    };
    this.setState(state => ({
      items: state.items.concat(newItem),
      text: ''
    }));
  }

  render() {
    return (

      <View style={styles.container}>
        <Text style={styles.text}>Tareas pendientes</Text>
        <TodoList items={this.state.items} />
          <Text>
            ¿Qué se necesita hacer?
          </Text>
            <TextInput
                style={{height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 5}}
                onChangeText={(text) => this.agregarTarea(text)}
                // onChangeText={(text) => this.setState({text})}
                value={this.state.text}
            />
            <Button
                onPress={() => {
                    this.handleSubmit()
                }}
                title={`Añadir${this.state.items.length + 1}`}
            />
      </View>
    );
  }
}

class TodoList extends React.Component {
  render() {
    return (
        <View style={styles.container_item}>
            <FlatList
                data={this.props.items}
                renderItem={({item}) => <Text style={styles.item}>* {item.text}</Text>}
            />
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container_item: {
   flex: 1,
   paddingTop: 22,
   paddingLeft: 10
  },
  container: {
    paddingHorizontal:20
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
    text: {
      fontSize:20,
        fontWeight: 'bold'
    }
});

export default ListaCompra;
