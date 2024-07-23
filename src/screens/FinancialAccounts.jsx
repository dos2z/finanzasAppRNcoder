import { StyleSheet, Text, View, ScrollView, Modal, Pressable } from 'react-native'
import { useState } from 'react'

import MyButton from '../components/MyButton'
import { MaterialCommunityIcons } from '@expo/vector-icons';


import { useSelector } from 'react-redux';


const FinancialAccounts = ({navigation}) => {
  const [showAddAccount, setShowAddAccount] = useState(false)

  const { accounts: myAccounts, total } = useSelector((state) => state.accountsReducer.value)


  const handleShowAddAccount = ({navigation}) => {
    setShowAddAccount(!showAddAccount)
  }




  return (
    <View style={styles.container}>


      <Text style={styles.title}>Total: $ {total.amount}</Text>


      <ScrollView style={styles.accountsContainer}>

        {myAccounts.map(account => {
          return (
            <Pressable key={account.id}
              style={styles.card} 
              
              >
              <View style={[styles.iconContainer, { backgroundColor: account.color }]}>
                <MaterialCommunityIcons name={account.icon} size={32} color={account.color !== '#000001'? 'black': 'white'} />
              </View>
              <View style={{ gap: 10 }}>
                <Text style={{ fontSize: 16, fontStyle: 'italic' }}>{account.name}</Text>
                <Text style={{ fontSize: 16, fontWeight: 'bold' }}>$ {account.amount}</Text>
              </View>


            </Pressable>
          )

        })}


      </ScrollView>

      <View style={styles.buttonsContainer}>
        <MyButton title={'Transferencias'} />

        <MyButton title={'Agregar Cuenta'} onPress={()=>navigation.navigate('addAccount')} />
      </View>

    </View>
  )
}

export default FinancialAccounts

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 50,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  accountsContainer: {
    width: '100%',

  },
  card: {
    margin: 10,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 50,
    backgroundColor: 'white',
    borderRadius: 20,
    width: '90%',
  },
  iconContainer: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
  buttonsContainer: {
    gap: 10,
  },



})