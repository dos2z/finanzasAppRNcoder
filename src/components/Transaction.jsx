import { StyleSheet, Text, View, Pressable, Keyboard, Modal, TextInput, ScrollView } from 'react-native'
import React, { useEffect } from 'react'
import MyInputText from './MyInputText'
import { useState } from 'react'
import CategoryPicker from './CategoryPicker'
import SelectAccount from './SelectAccount'
import { colors } from '../global/colors'
import SelectDate from './SelectDate'
import MyButton from './MyButton'
import { useDispatch, useSelector } from 'react-redux'
import { addExpense, addIncome } from '../features/transactions/transactionsSlice'
import { modifyAccount } from '../features/financialAccounts/accountsSlice'
import { usePostAccountsMutation, usePostTransactionMutation } from '../services/shopServices'





const Transaction = ({ transactionType, navigation, myCategories }) => {
  const [transactionAmount, setTransactionAmount] = useState(0)
  const [categorySelected, setCategorySelected] = useState('')
  const [showModal, setShowModal] = useState(false)
  const [accountSelected, setAccountSelected] = useState('')
  const [dateSelected, setDateSelected] = useState(new Date())
  const [comment, setComment] = useState('')
  const [isFocus, setIsFocus] = useState(false)
  const { accounts } = useSelector((state) => state.accounts.value)
  const { expensesTransactions, incomesTransactions } = useSelector((state) => state.transactions.value)
  const { localId } = useSelector((state) => state.auth.value)
  const [triggerPostTransactions, resultPostTransactions] = usePostTransactionMutation()
  const [triggerPostAccounts, resultPostAccounts] = usePostAccountsMutation()

  const allTransactions = [...expensesTransactions, ...incomesTransactions]
  

  const updateAccountsAmounts = (accounts, updateAccount) => {
    const filteredAccounts = accounts.filter(account => account.id !== updateAccount.id)    
    filteredAccounts.push(updateAccount)  
    triggerPostAccounts({accounts: filteredAccounts, localId})
  }
 


  const dispatch = useDispatch()


  const addNewTransaction = () => {
    const newTransaction = {
      amount: transactionAmount,
      type: transactionType,
      account: accountSelected,
      category: categorySelected,
      date: dateSelected.toLocaleDateString(),
      comment: comment,
      id: new Date().toString(),
      index: dateSelected.getDate() + dateSelected.getMonth() + dateSelected.getFullYear()
    }
    allTransactions.push(newTransaction)
    triggerPostTransactions({ transactions: allTransactions, localId })

    if (transactionType === 'expenses') {
      const updatedAccountAmount = Number(newTransaction.account.amount) - Number(newTransaction.amount)
      const updatedAccount = { ...newTransaction.account, amount: updatedAccountAmount }
      updateAccountsAmounts(accounts, updatedAccount)
      
      dispatch(modifyAccount(updatedAccount))
      dispatch(addExpense(newTransaction))
    } else {
      const updatedAccountAmount = Number(newTransaction.account.amount) + Number(newTransaction.amount)
      const updatedAccount = { ...newTransaction.account, amount: updatedAccountAmount }
      updateAccountsAmounts(accounts, updatedAccount)
      
      dispatch(modifyAccount(updatedAccount))
      dispatch(addIncome(newTransaction))
    }
    
    setTransactionAmount('')
    setAccountSelected('')
    setCategorySelected('')
    setComment('')
  }




  const handleAddTransaction = () => {
    if (!transactionAmount || !categorySelected || !accountSelected || !dateSelected) {
      return;
    } else {
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

          {!transactionAmount && <Text style={{ color: 'red' }}>Agregar Monto</Text>}
          <MyInputText label={'$'} initialValue={transactionAmount} onChange={setTransactionAmount} keyboardType={"decimal"} />

          <Pressable onPress={() => setShowModal(!showModal)} style={{ flexDirection: 'row', gap: 20, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 20 }}>Cuenta: {accountSelected.name}</Text>
            {!accountSelected && <Text style={{ color: 'red' }}>Seleccionar Cuenta</Text>}
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