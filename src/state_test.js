import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native';

module.exports = React.createClass({
  getInitialState(){
    return({
      tasks: ['Take Course', "Clean house"],
      task: ''
    })
  },
  renderList(tasks){
    return(
      tasks.map((task) => {
        return(
          <View key={task} style={styles.task}>
            <Text>
              {task}
            </Text>
          </View>
        )
      })
    )
  },

  addTask(){
    let tasks = this.state.tasks.concat([this.state.task]);
    this.setState({tasks: tasks});
  },

  render() {
    return(
      <View style={styles.container}>
        <Text style={styles.header}>
          ToDoList
        </Text>
        <TextInput
          style = {styles.inputbox}
          placeholder="Type task"
          onChangeText={(text) => {
            this.setState({task: text});
            console.log(this.state.task);
          }}
          onEndEditing={()=>this.addTask()}
        />
        {this.renderList(this.state.tasks)}
      </View>
    )
  }
})


const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  task: {
    height:60,
    borderBottomWidth:1,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center'
  },
  header:{
    margin:30,
    marginTop:40,
    textAlign: 'center',
    fontSize: 18
  },
  inputbox:{
    height: 60,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'black',
    textAlign: 'center'
  }
})
