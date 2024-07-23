import { StyleSheet, Text, View, Pressable, Keyboard, Modal, TextInput, ScrollView } from 'react-native'
import React, { useEffect } from 'react'

import { useState } from 'react'

import { colors } from '../global/colors'

import Transaction from '../components/Transaction'

import { useSelector } from 'react-redux'


const Incomes = ({ navigation }) => {
  
  const {incomesCategories: myCategories} = useSelector((state)=>state.categoriesReducer.value)
  const [comment, setComment] = useState('')

  const [isFocus, setIsFocus] = useState(false)



  useEffect(() => {
    Keyboard.addListener('keyboardDidHide', () => setIsFocus(false))
  }, [comment])

  return (

    <Pressable onPress={Keyboard.dismiss} >
      <ScrollView>
        <View style={styles.headerBtnContainer}>
          <Pressable style={styles.headerButton}
            onPress={() => navigation.navigate('expenses')}>
            <Text style={styles.buttonText}>Gastos</Text>
          </Pressable>
          <View style={[styles.headerButton, { backgroundColor: 'white' }]}>
            <Text style={styles.buttonText}>Ingresos</Text>
          </View>
        </View>
        <View style={styles.container}>
          <Transaction transactionType={'income'} navigation={navigation} myCategories={myCategories}/>
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
  headerBtnContainer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  headerButton: {
    width: '50%',
    padding: 10,
    alignItems: 'center',
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
  },
  buttonText: {
    fontSize: 20,
  },
  dateContainer: {
    height: 600,
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
  }
})