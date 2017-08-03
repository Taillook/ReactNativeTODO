import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Alert,
  Text,
  View
} from 'react-native';
import {
  Button
} from 'react-native-elements'
import styles from './styles/style';

export default class ReactNativeTODO extends Component {
  constructor(props) {
      super(props);
      this.state = {
          my: 'hello'
      }
      this.onPress = this.onPress.bind(this);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          {this.state.my}
        </Text>
        <Button
          raised
          onPress={this.onPress}
          icon={{name: 'check'}}
          title='PUSH ME!' />
      </View>
    );
  }
  onPress() {
    this.setState({
      my: 'hello, world!'
    });
  }
}

AppRegistry.registerComponent('ReactNativeTODO', () => ReactNativeTODO);
