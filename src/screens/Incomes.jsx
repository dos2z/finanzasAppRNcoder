import { StyleSheet, Text, View, Pressable, Keyboard,  ScrollView } from 'react-native'
import { colors } from '../global/colors'
import Transaction from '../components/Transaction'
import { useSelector } from 'react-redux'


const Incomes = ({ navigation }) => {
  
  const {incomesCategories: myCategories} = useSelector((state)=>state.categories.value)
  

  return (

    <Pressable onPress={Keyboard.dismiss} 
    style={styles.container}>
      <ScrollView>
        <View style={styles.headerBtnContainer}>
          <Pressable style={styles.headerButton}
            onPress={() => navigation.navigate('expenses')}>
            <Text style={[styles.buttonText, {color: 'grey'}]}>Gastos</Text>
          </Pressable>
          <View style={[styles.headerButton, { backgroundColor: 'white' }]}>
            <Text style={[styles.buttonText, {fontWeight: 'bold'}]}>Ingresos</Text>
          </View>
        </View>
        <View style={styles.componentContainer}>
          <Transaction transactionType={'income'} navigation={navigation} myCategories={myCategories}/>
        </View>
      </ScrollView>
    </Pressable>





  )
}

export default Incomes

const styles = StyleSheet.create({
container: {
  backgroundColor: colors.BGColor
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