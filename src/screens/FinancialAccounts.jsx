import { StyleSheet, Text, View, ScrollView, Modal, Pressable } from 'react-native'
import { useState } from 'react'
import MyButton from '../components/MyButton'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { myAccounts } from '../data/accounts';
import AddAccount from '../components/AddAccount';


const FinancialAccounts = () => {
  const [showAddAccount, setShowAddAccount] = useState(false)

  const handleShowAddAccount = () => {
    setShowAddAccount(!showAddAccount)
  }


  return (
    <View style={styles.container}>
      
      <ScrollView style={styles.accountsContainer}>

        {myAccounts.map(account => {
          return (
            <Pressable style={styles.card} >
              <View style={[styles.iconContainer, {backgroundColor: account.accountColor}]}>
                <MaterialCommunityIcons name={account.accountIcon} size={32} color="black" />
              </View>
              <View style={{gap: 10}}>
                <Text style={{fontSize: 16, fontStyle: 'italic'}}>{account.accountName}</Text>
                <Text style={{fontSize: 16, fontWeight: 'bold'}}>$ {account.accountAmount}</Text>
              </View>


            </Pressable>
          )

        })}


      </ScrollView>

      <View style={styles.buttonsContainer}>
        <MyButton title={'Transferencias'} />

        <MyButton title={'Agregar Cuenta'} onPress={handleShowAddAccount} />
      </View>



      <Modal
        visible={showAddAccount}>
        <AddAccount handleShow={setShowAddAccount} show={showAddAccount} />

      </Modal>
    </View>
  )
}

export default FinancialAccounts

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 50,
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