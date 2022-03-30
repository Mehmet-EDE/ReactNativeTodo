import React, { useState } from 'react'
import { View, Text } from 'react-native'
import styles from './Todo.style'
function Todo({ items }) {
  const [changeStatu, setChangeStatu] = useState('')
  const changeComplete = () => {
    setChangeStatu(!items.completed)
    items.completed = !items.completed
  }
  return (
    <View>
      <View style={changeStatu ? styles.todo : styles.todoCompleted} key={items.id}>
        <Text style={changeStatu ? styles.todoTitle : styles.todoTitleComplete} onPress={changeComplete}>{items.title}</Text>
      </View>
    </View>
  )
}

export default Todo