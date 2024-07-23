import { StyleSheet, Text, View, Pressable, Keyboard, Modal, TextInput, ScrollView } from 'react-native'
import React, { useEffect } from 'react'
import MyInputText from './MyInputText'
import { useState } from 'react'
import CategoryPicker from './CategoryPicker'
import SelectAccount from './SelectAccount'
import { colors } from '../global/colors'
import SelectDate from './SelectDate'
import MyButton from './MyButton'
import { useDispatch } from 'react-redux'
import { addExpense, addIncome } from '../features/transactionsSlice'
import { modifyAccount } from '../features/accountsSlice'





const Transaction = ({ transactionType, navigation, myCategories }) => {
  const [transactionAmount, setTransactionAmount] = useState(0)
  const [categorySelected, setCategorySelected] = useState('')
  const [showModal, setShowModal] = useState(false)
  const [accountSelected, setAccountSelected] = useState('')
  const [dateSelected, setDateSelected] = useState('')
  const [comment, setComment] = useState('')
  const [isFocus, setIsFocus] = useState(false)

  const dispatch = useDispatch()

  const addNewTransaction = () => {
    const newTransaction = {
      amount: transactionAmount,
      type: transactionType,
      account: accountSelected,
      category: categorySelected,
      date: dateSelected,
      comment: comment,
      id: new Date().toString(),
    }
    if (transactionType === 'expenses') {
      const updatedAccountAmount = Number(newTransaction.account.amount) - Number(newTransaction.amount)
      const updatedAccount = { ...newTransaction.account, amount: updatedAccountAmount }
      dispatch(modifyAccount(updatedAccount))
      dispatch(addExpense(newTransaction))
    } else {
      const updatedAccountAmount = Number(newTransaction.account.amount) + Number(newTransaction.amount)
      const updatedAccount = { ...newTransaction.account, amount: updatedAccountAmount }
      dispatch(modifyAccount(updatedAccount))
      dispatch(addIncome(newTransaction))
    }
    
  }



  const handleAddTransaction = () => {
    if(!transactionAmount || ! categorySelected || !accountSelected){
      
    }else{
      addNewTransaction()
      navigation.navigate('home')
    }
    
  }



  useEffect(() => {
    Keyboard.addListener('keyboardDidHide', () => setIsFocus(false))
  }, [comment])

  return (
    <Pressable onPress={Keyboard.dismiss} >
      <ScrollView>
        <View style={styles.container}>


          {!transactionAmount && <Text style={{color: 'red'}}>Agregar Monto</Text>}
          <MyInputText label={'Monto $'} initialValue={transactionAmount} onChange={setTransactionAmount} keyboardType={"decimal"} />

          <Pressable onPress={() => setShowModal(!showModal)} style={{flexDirection: 'row', gap: 20, alignItems: 'center'}}>
            <Text style={{ fontSize: 20 }}>{accountSelected.name || 'Cuenta?'}</Text>
            {!accountSelected && <Text style={{color: 'red'}}>Agregar Cuenta</Text>}
          </Pressable>


          
          <CategoryPicker categorySelected={categorySelected}
            setCategorySelected={setCategorySelected}
            navigation={navigation}
            transactionType={transactionType}
            myCategories={myCategories} />



          <SelectDate setDateSelected={setDateSelected} />


          <View style={isFocus && styles.inputCommentContainer}>
            <View style={isFocus && styles.inputCommentCard}>
              {isFocus && <Text style={{ fontSize: 20 }}>Comentario</Text>}
              <TextInput style={styles.inputComment} placeholder='Comentario' onFocus={() => setIsFocus(true)} value={comment} onChangeText={setComment} />
            </View>

          </View>



          <Text>Foto ???</Text>

          <View style={styles.buttonContainer}>
            <MyButton title={'Confirmar'} onPress={handleAddTransaction} type={'accept'} />
          </View>



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

export default Transaction

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
    backgroundColor: 'white',
  },
  inputComment: {
    fontSize: 20,
    padding: 10,
    width: '90%',
    backgroundColor: 'white',
  },
  buttonContainer: {
    alignItems: 'center',
    margin: 10,
  }
})