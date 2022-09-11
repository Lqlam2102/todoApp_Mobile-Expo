import { View, Text, TouchableOpacity, TextInput, Keyboard } from 'react-native'
import React, { useState } from 'react'
import styles from './style'

const Form = (props) => {
  const [value, setValue] = useState('')
  const handlePress = ()=>{
    if(value=== ''){
      alert('Vui lòng nhập công việc')
      return
    }
    else{
      props.onAddTask(value)
      setValue('')
      Keyboard.dismiss()
    }
  }
  return (
      <View style={styles.footer}>
        <TextInput
        style = {styles.input}
        placeholder='Your task'
        value = {value}
        onChangeText={(text)=>{setValue(text)}}
        />
        <TouchableOpacity 
        style = {styles.buttonAdd}
        onPress = {handlePress}
        >
          <Text style = {{
            color: 'white',
            fontWeight: 'bold',
            fontSize:24,
        }}>+</Text>
        </TouchableOpacity>
      
      </View>

  )
}

export default Form