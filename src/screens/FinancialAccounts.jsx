import { StyleSheet, Text, View, ScrollView, Modal} from 'react-native'
import { useState } from 'react'
import MyButton from '../components/MyButton'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { accountsIcons } from '../global/icons';
import { colorsPiccker } from '../global/colors';
import AddAccount from '../components/AddAccount';


const FinancialAccounts = () => {
  const [showAddAccount, setShowAddAccount] = useState(false)

  const handleShowAddAccount = () => {
    setShowAddAccount(!showAddAccount)
  }





  return (
    <View style={styles.container}>
      <Text>Cuentas</Text>
      <ScrollView style={styles.accountsContainer}>
        <View style={styles.card}>
          <Text>Banco Santander</Text>
          <Text>$200.000</Text>

        </View>

        <View style={styles.card}>
          <View>

            <Text>Efectivo</Text>
          </View>

          <Text>$55.300</Text>

        </View>


      </ScrollView>

      <View style={styles.buttonsContainer}>
        <MyButton title={'Transferencias'} />

        <MyButton title={'Agregar Cuenta'} onPress={handleShowAddAccount} />
      </View>



      <Modal
        visible={showAddAccount}>
        <AddAccount handleShow={setShowAddAccount} show={showAddAccount}/>

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
    backgroundColor: 'white',
    borderRadius: 20,
    width: '90%',
  },
  buttonsContainer: {
    gap: 10,
  },
//Estilos del Modal
  modaLContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  inputContainer: {
    width: 250,
    flexDirection: 'row',
    gap: 5,
    justifyContent: 'flex-start',
    overflow: 'hidden',
    marginBottom: 20,
  },
  inputLabel: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  input: {
    borderBottomWidth: 1,
    borderColor: 'black',
    width: '100%',
    color: 'black',

  },
  iconContainer: {
    margin: 20,
    width: 250,
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 20,
  },
  newAccountIcon: {
    padding: 5,
    borderRadius: 10,
  },
  colorPickerContainer: {
    margin: 20,
    width: 250,
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 20,
  },
  colorPick: {
    borderRadius: 30,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalButtonContainer: {
    margin: 50,
    flexDirection: 'row',
    gap: 20,
  }


})