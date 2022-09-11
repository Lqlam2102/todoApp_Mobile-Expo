import { View, Text } from 'react-native'
import React from 'react'
import styles from './style'

const Header = ({title}) => {
  return (
    <Text style = {styles.title}>{title}</Text>
  )
}

export default Header