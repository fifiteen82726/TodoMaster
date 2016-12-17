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

  renderList(tasks){
    return(
      tasks.map((task) => {
        return(
          <View>
            <Text>
              {task}
            </Text>
          </View>
        )
      })
    )
  },

  render() {
    return(
      <View style={styles.container}>
        {this.renderList(this.state.tasks)}
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
