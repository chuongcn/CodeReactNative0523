import React from 'react'
import { Text, View, TextInput, TouchableOpacity, } from 'react-native'

import styles from './style'

const Form = () => {
  return (

    <View style={styles.addTask}>
      <TextInput style={styles.input} placeholder='Your task' />
      <TouchableOpacity>
        <View style={styles.iconWrapper}>
          <Text style={styles.icon}>+</Text>
        </View>
      </TouchableOpacity>
    </View>

  )
}

export default Form



