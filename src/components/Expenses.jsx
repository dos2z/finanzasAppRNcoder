import { StyleSheet, Text, View, Modal, Pressable, TextInput, Keyboard } from 'react-native'
import React, { useState } from 'react'
import MyInputText from './MyInputText'
import CategoryPicker from './CategoryPicker'
import SelectAccount from './SelectAccount'
import { colors } from '../global/colors'


const Expenses = () => {
  const [expensesAmount, setExpensesAmount] = useState(0)
  const [categorySelected, setCategorySelected] = useState({})
  const [showModal, setShowModal] = useState(false)
  const [accountSelected, setAccountSelected] = useState('')



  return (
    
      <Pressable onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          

          <MyInputText label={'Monto'} initialValue={expensesAmount} onChange={setExpensesAmount} keyboardType={"decimal"} />
          <Pressable onPress={() => setShowModal(!showModal)}>
          <Text style={{fontSize: 20}}>{accountSelected.name || 'Cuenta?'}</Text>
          </Pressable>


          <CategoryPicker categorySelected={categorySelected} setCategorySelected={setCategorySelected} />





      
          <MyInputText label={'comentario'} />



          <Text>Fecha</Text>


          <Text>Foto ???</Text>

          <Modal
            visible={showModal}
            transparent={true}>
            <SelectAccount
              accountSelected={accountSelected}
              setAccountSelected={setAccountSelected}
              exit={setShowModal}
              show={showModal}
            />

          </Modal>





        </View>
      </Pressable>
    
  )
}

export default Expenses

const styles = StyleSheet.create({
  container: {
    padding: 24,
    justifyContent: 'center',
    backgroundColor: 'white',
  }
})