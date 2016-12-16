import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

module.exports = React.createClass({
  render() {
    return(
      <View style={styles.container}>
        <View style={styles.item}>
          <Text>Item1</Text>
        </View>
        <View style={styles.item}>
          <Text>Item2</Text>
        </View>
        <View style={styles.largeItem}>
          <View style={styles.item}>
            <Text>Item3a</Text>
          </View>
          <View style={styles.item}>
            <Text>Item3b</Text>
          </View>
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
    flexDirection: 'row'
  },

  item: {
    flex: 1,
    borderWidth: 3,
    borderColor: 'black'
  },

  largeItem: {
    flex: 3,
    borderWidth: 3,
    borderColor: 'blue'
  }
})
