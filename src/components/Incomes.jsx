import { StyleSheet, Text, View, Pressable, Keyboard, Modal, TextInput, ScrollView } from 'react-native'
import React, { useEffect } from 'react'
import MyInputText from './MyInputText'
import { useState } from 'react'
import CategoryPicker from './CategoryPicker'
import SelectAccount from './SelectAccount'
import { colors } from '../global/colors'



const Incomes = () => {
  const [incomeAmount, setIncomeAmount] = useState(0)
  const [categorySelected, setCategorySelected] = useState({})
  const [showModal, setShowModal] = useState(false)
  const [accountSelected, setAccountSelected] = useState('')
  const [comment, setComment] = useState('')

  const [isFocus, setIsFocus] = useState(false)



  useEffect(() => {
    Keyboard.addListener('keyboardDidHide', () => setIsFocus(false))
  }, [comment])

  return (
    
      <Pressable /* onPress={Keyboard.dismiss} */>
        <ScrollView>
        <View style={styles.container}>


          <MyInputText label={'Monto'} initialValue={incomeAmount} onChange={setIncomeAmount} keyboardType={"decimal"} />
          <Pressable onPress={() => setShowModal(!showModal)}>
            <Text style={{fontSize: 20}}>{accountSelected.name || 'Cuenta?'}</Text>
          </Pressable>


          <CategoryPicker categorySelected={categorySelected} setCategorySelected={setCategorySelected} />





          <View style={isFocus && styles.inputCommentContainer}>
            <View style={isFocus && styles.inputCommentCard}>
              {isFocus && <Text style={{ fontSize: 20 }}>Comentario</Text>}
              <TextInput style={styles.inputComment} placeholder='Comentario' onFocus={()=>setIsFocus(true)} value={comment} onChangeText={setComment} />
            </View>

          </View>

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
        </ScrollView>
      </Pressable>
    




  )
}

export default Incomes

const styles = StyleSheet.create({
  container: {
    padding: 24,
    justifyContent: 'center',
    backgroundColor: 'white',

  },
  inputCommentContainer: {
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    position: 'absolute',
    width: '150%',
    height: '300%',
    marginBottom: 200,
    alignItems: 'center',
    backgroundColor: colors.BGtranslucid,
  },
  inputCommentCard: {
    padding: 40,
    width: '95%',
    height: 250,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: colors.BGColor,
  },
  inputComment: {
    fontSize: 20,
    padding: 10,
    width: '90%',
    backgroundColor: 'white',
  }
})