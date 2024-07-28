import { StyleSheet, Text, View, ScrollView, Pressable } from 'react-native'
import MyButton from '../components/MyButton'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { removeAccount } from '../features/financialAccounts/accountsSlice';


import { useSelector, useDispatch } from 'react-redux';
import { colors } from '../global/colors';


const FinancialAccounts = ({ navigation }) => {
  const {expensesTransactions, incomesTransactions} = useSelector((state)=>state.transactionsReducer.value)
  const { accounts: myAccounts, total } = useSelector((state) => state.accountsReducer.value)
  const dispatch = useDispatch()

  const deleteAccount = (account)=>{
    //Lógica que pregunta si hay transacciones asociadas y si realmente se quiere eliminar la cuenta


    dispatch(removeAccount(account))
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
                <MaterialCommunityIcons name={account.icon} size={32} color={account.color !== '#000001' ? 'black' : 'white'} />
              </View>
              <View style={{ gap: 10 }}>
                <Text style={{ fontSize: 16, fontStyle: 'italic' }}>{account.name}</Text>
                <Text style={{ fontSize: 16, fontWeight: 'bold' }}>$ {account.amount}</Text>
              </View>

              <Pressable 
              style={{marginHorizontal: 50}}
              onPress={()=>{deleteAccount(account)}}>
                <MaterialCommunityIcons name="delete-forever" size={24} color="red" />
              </Pressable>

            </Pressable>
          )

        })}


      </ScrollView>

      <View style={styles.buttonsContainer}>

        <MyButton title={'Agregar Cuenta'} onPress={() => navigation.navigate('addAccount')} />
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
    backgroundColor: colors.BGColor,
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
    justifyContent: 'space-between',
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