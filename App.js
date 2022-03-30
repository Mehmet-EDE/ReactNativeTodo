import React, { useState } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Dimensions, FlatList } from 'react-native'
import Todo from './src/Todo'
function App() {
  const [todo, setTodo] = useState([
    {
      id: 1,
      title: 'asd',
      completed: true
    }
  ])
  const [todoText, setText] = useState('')
  const saveTodo = (e) => {
    if (todoText.trim()) {
      const newTodo = {
        id: Math.floor(Math.random() * 100),
        title: todoText,
        completed: false
      }
      setTodo([...todo, newTodo]);
      setText('');
    }
    renderItem
    setText('')
  }
  const onchangeInput = (text) => {
    setText(text)
  }
  const renderItem = ({ item }) => <Todo items={item} />
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Yapılacaklar</Text>
        <Text style={styles.title}>0</Text>
      </View>
      <FlatList
        data={todo}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      <View style={styles.innerContainer}>
        <TextInput
          style={styles.tInput}
          placeholder='Add Todo'
          value={todoText}
          onChangeText={onchangeInput} />
        <TouchableOpacity style={styles.saveBtn}
          onPress={saveTodo}>
          <Text>Kaydet</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5d677a',
  },
  innerContainer: {
    backgroundColor: '#23272e',
    margin: 5,
    padding: 10,
    borderRadius: 10,
  },
  tInput: {
    backgroundColor: '#404754',
    borderRadius: 10,
    marginBottom: 10,
    fontSize: 18,

  },
  saveBtn: {
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffa500',
    height: 35,
    borderRadius: 10,
    shadowColor: "red",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 1,
    shadowRadius: 8.30,

    elevation: 13,
  },
  titleContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  title: {
    color: '#ffa500',
    fontSize: 35,
    fontWeight: '900',
    letterSpacing: 2,
    padding: 5,
  },
  todoContainer: {
    flex: 1
  }
})

export default App