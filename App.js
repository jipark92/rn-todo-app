import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import { useState, useEffect } from 'react'

export default function App() {


  const [textInput, setTextInput] = useState('')
  const [todos, setTodos] = useState([])

  console.log(textInput)
  console.log(todos)
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
        {todos.map((todo, i) => {
          return (
            <View key={i + "Todos"} style={styles.todoLists}>
              <Text>{i}. {todo} </Text>
              <Button title="delete" />
            </View>
          )
        })}
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
