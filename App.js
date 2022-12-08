import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, TextInput, ScrollView } from "react-native";
import { useState, useEffect } from 'react'

export default function App() {


  const [textInput, setTextInput] = useState('')
  const [todos, setTodos] = useState([])

  console.log(textInput)
  console.log(todos)

  const deleteTask = (taskId) => {

    console.log('todosArray', todos)

    // const deletedTask = todos.filter((todo, i) => {
    //   if (todo.id === taskId) {
    //     return todo
    //   }
    // })
    // setTodos(deletedTask)

    // let deletedTodos = []
    // for (let i = 0; i < todos.length; i++) {
    //   if (i === taskId) {
    //     console.log('tests', todos)

    //   }
    // }
  }
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput}
          placeholder="Walk Dog at 12PM"
          onChangeText={setTextInput}
          value={textInput}
        />
        <Button
          title="Add Task"
          onPress={() => {
            setTodos([...todos, textInput])
            setTextInput('')
          }} />
      </View>
      <View style={styles.goalContainer}>
        <Text >List of Todos: </Text>
        <ScrollView>
          {todos.map((todo, i) => {
            return (
              <View key={i + "Todos"} style={styles.todoLists}>
                <Text>{i}. {todo} </Text>
                <Button title="delete" onPress={() => { deleteTask(i) }} />
              </View>
            )
          })}
        </ScrollView>

      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 50,
    borderWidth: 2,
    borderColor: "blue",
    height: "100%"
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // alignItems: 'flex-start',
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    // borderColor: "green",
    marginBottom: 16,
    width: "100%",
    // padding: 16,
    paddingBottom: 16,

  },
  textInput: {
    borderWidth: 1,
    borderColor: 'black',
    width: '60%',
    // marginRight: 5,
    padding: 5,
    // alignItems: "center"
  },
  goalContainer: {
    width: "100%",
    height: "90%",
    borderWidth: 2,
    borderColor: "black",
    padding: 5,
  },
  todoLists: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: 'red',
    margin: 3,
  }

});
