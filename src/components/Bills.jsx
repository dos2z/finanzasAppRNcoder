import { StyleSheet, Text, View, TextInput } from 'react-native'
import React, { useState } from 'react'
import MyInputText from './MyInputText'
import { myAccounts } from '../data/accounts'


const Bills = () => {
const [billAmount, setBillAmount] = useState(0)


  return (
    <View>
      <Text>Bills</Text>

      <MyInputText label={'Monto'} initialValue={billAmount} onChange={setBillAmount}/>

      <Text>Cuenta: </Text>
      
      <Text>Categoria</Text>

      <Text>Fecha</Text>

      <MyInputText label={'comentario'}/>






    </View>
  )
}

export default Bills

const styles = StyleSheet.create({})