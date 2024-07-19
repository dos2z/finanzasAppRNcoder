import { StyleSheet, Text, View, TextInput } from 'react-native'
import React, { useState } from 'react'
import MyInputText from './MyInputText'

const Bills = () => {
const [categoryName, setCategoryName] = useState('')


  return (
    <View>
      <Text>Bills</Text>

      <MyInputText label={'Nombre de Categoria'} initialValue={categoryName} onChange={setCategoryName}/>

    </View>
  )
}

export default Bills

const styles = StyleSheet.create({})