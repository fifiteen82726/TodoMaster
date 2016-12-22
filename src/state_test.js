import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
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
      tasks.map((task, index) => {
        return(
          <View key={task} style={styles.task}>
            <Text>
              {task}
            </Text>
            <TouchableOpacity
              onPress={() => this.completeTask(index)}
            >
              <Text>
                &#10003;
              </Text>
            </TouchableOpacity>
          </View>
        )
      })
    )
  },

  completeTask(index){
    console.log('complete task', this.state.tasks[index]);
    let tasks = this.state.tasks;
    tasks = tasks.slice(0, index).concat(tasks.slice(index + 1));
    console.log(tasks);
    this.setState({tasks});
  },

  addTask(){
    // 產生新的 array 會更新state
    let tasks = this.state.tasks.concat([this.state.task]);
    this.setState({tasks: tasks});

    // won't work
    // let newTask = this.state.task;
    // this.state.tasks.push(newTask);

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
