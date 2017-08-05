import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Alert,
  Text,
  ScrollView,
  ListView,
  View
} from 'react-native';
import styles from './styles/style';

import TodoList from './components/TodoList';
import Footer from './components/Footer';

export default class ReactNativeTODO extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [
        {text: 'Learn react native'},
        {text: 'Make a to-do app'}
      ]
    }
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <ScrollView
          style={styles.base}
        >
          <TodoList
            todos={this.state.todos}
          />
        </ScrollView>
        <Footer
          addTodo={this.addTodo.bind(this)}
        />
      </View>
    );
  }

  addTodo(text) {
    this.setState({
      todos: this.state.todos.concat([{text: text}])
    });
  }
}

AppRegistry.registerComponent('ReactNativeTODO', () => ReactNativeTODO);
