import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Button, StyleSheet, Text, TextInput, View, FlatList } from 'react-native';

export default function App() {

  // useState is used to handle state or event
  const [newTask, setNewTask] = useState('');

  // here is the taskInputhandler
  const taskInputHandler = (enteredText) => {
    setNewTask(enteredText)
  }

  // to handle the button-clicks; we'll state.
  const [appTasks, setAppTask] = useState([]);
  // for every state there is a handler for this button event is
  const addTaskHandler = () => {
    setAppTask( currentTask => [...currentTask, newTask])
    console.log(newTask);
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Task List"
          // you register the textInputHandler in the "TextInputHandler"
          onChangeText={taskInputHandler}
          style = {styles.input}
          value={newTask}
        />
        <Button title="+"
        // this is how you register the event to the button
        onPress={addTaskHandler}
        />
      </View>
      <View>
        {appTasks.map((task) => <Text>{task}</Text>)}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input:{
    borderColor:'#fff',
    borderWidth:1,
    padding:20,
  },
  inputContainer: {
    flexDirection:'row',
    justifyContent:'space-between',
    alignContent:'center',
    bottom:20
  }
});
