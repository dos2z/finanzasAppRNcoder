import { StyleSheet, Text, View, Pressable, ScrollView, Keyboard } from 'react-native'

import Transaction from '../components/Transaction'

import { useSelector } from 'react-redux'
import { colors } from '../global/colors'



const Expenses = ({ navigation }) => {

  const {expensesCategories: myCategories } = useSelector((state)=>state.categoriesReducer.value)


  return (
    <Pressable onPress={Keyboard.dismiss}
    style={styles.container}>
      <ScrollView>
        <View style={styles.headerBtnContainer}>
          <View style={[styles.headerButton, { backgroundColor: 'white' }]}>
            <Text style={[styles.buttonText, {fontWeight: 'bold'}]}>Gastos</Text>
          </View>
          <Pressable style={styles.headerButton} onPress={() => navigation.navigate('incomes')}>
            <Text style={[styles.buttonText, {color: 'grey'}]}>Ingresos</Text>
          </Pressable>
        </View>

        <View style={styles.componentContainer}>
          <Transaction transactionType={'expenses'} navigation={navigation} myCategories={myCategories} />

        </View>
      </ScrollView>


    </Pressable>



  )
}

export default Expenses

const styles = StyleSheet.create({
  container:{
    backgroundColor: colors.BGColor,
  },
  componentContainer: {
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
})