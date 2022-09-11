import { View, Text, TouchableOpacity, Alert } from 'react-native'
import React from 'react'
import styles from './style'

const Task = (props) => {
  const  {number} = props
  const numberText = number < 10 ? `0${number}` : `${number}`
  const itemBg = number%2 === 0 ? styles.even : styles.odd
  const handleLongPress = ()=>{
    Alert.alert(
      "Thông báo",
      "Bạn có muốn xóa công việc này?",
      [
        { text: "OK", onPress: () => {
          props.onDeleteTask(number-1)
        } },
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        }
      ]
    );
  }
  return (
    <TouchableOpacity
    onLongPress={handleLongPress}
    >
      <View style={styles.item}>
        <View style={[styles.square, itemBg]}>
          <Text style={styles.index}>{numberText}</Text>
        </View>
        <Text style={styles.content}>{props.content}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default Task