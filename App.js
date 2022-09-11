import { ScrollView, StatusBar, View } from 'react-native';
import styles from './App.components.style'
import Header from './components/Header';
import Task from './components/Task';
import Form from './components/Form';
import { useState } from 'react';

export default function App() {
  const [taskList, setTaskList] = useState([])
  const handleAddTask = (task) =>{
    setTaskList([...taskList,task
    ])
  }
  const handleRemoveTask = (number) =>{
    let taskListTmp = [...taskList]
    taskListTmp.splice(number,1)
    setTaskList(taskListTmp);
  }
  return (
    <View style = {styles.container}>
      <StatusBar/>
      <Header title = "Todo List"/>
      <ScrollView style = {styles.scrollView}>
        {taskList && taskList.map((task, index)=>{
          return <Task key = {index + 1} content = {task} number = {index + 1} onDeleteTask = {handleRemoveTask}/>
        })}
      </ScrollView>
      <Form onAddTask = {handleAddTask}/>
    </View>
  );
}

