import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

module.exports = React.createClass({
  getInitialState(){
    return({
      tasks: ['Take Course', "Clean house"]
    })
  },

  render() {
    return(
      <View style={styles.container}>
        <View>
          <Text>{this.state.tasks}</Text>
        </View>
      </View>
    )
  }
})


const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 3,
    borderColor: 'green',
    justifyContent: 'center',
    alignItems: 'center'
  }
})
