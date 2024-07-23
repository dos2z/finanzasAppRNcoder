import { Pressable, StyleSheet, Text, View, Keyboard } from 'react-native'
import { useState } from 'react'
import MyButton from '../components/MyButton'
import MyInputText from '../components/MyInputText';
import ColorPicker from '../components/ColorPicker';
import IconPicker from '../components/IconPicker';
import { categoryIcons } from '../global/icons';
import { useDispatch } from 'react-redux';
import { addExpensesCategory, addIncomeCategory } from '../features/categoriesSlice';

const AddCategory = ({navigation, route}) => {

    const [categoryName, setCategorytName] = useState('')
    const [iconId, setIconId] = useState('')
    const [iconName, setIconName] = useState('')
    const [colorChosed, setColorChosed] = useState('grey')

    const {transactionType} = route.params

    const dispatch = useDispatch()

    const createNewCategory = () => {
        const newCategory = {
            name: categoryName,
            type: transactionType,
            icon: iconName,
            color: colorChosed,
            id: new Date().toString()
        }
        
        if(transactionType === 'expenses'){
            dispatch(addExpensesCategory(newCategory))
        }else{
            dispatch(addIncomeCategory(newCategory))
        }
    }


    const handleAddCategory = () => {
        if (!categoryName || !iconId) {
            console.log('Falta agregar algo');
        } else {
            createNewCategory();
            navigation.goBack()
        }

    }


  return( 
  <Pressable onPress={Keyboard.dismiss} style={styles.container}>
      <Text style={{
          fontSize: 24,
          margin: 20,
      }}>
          Crear categoria de {transactionType === 'expenses' ? 'Gastos' : 'Ingresos'}
      </Text>

      <MyInputText label={'Nombre'} initialValue={categoryName} onChange={setCategorytName} />

      <IconPicker colorChosed={colorChosed} iconId={iconId} setIconId={setIconId} setIconName={setIconName} iconColection={categoryIcons} />

      <ColorPicker colorChosed={colorChosed} setColorChosed={setColorChosed} />



      <View style={styles.buttonContainer}>
          <MyButton title={'Agregar'} onPress={handleAddCategory} />
          <MyButton title={'Cancelar'} cancel={true} onPress={()=>navigation.goBack()} />
      </View>


  </Pressable>

)
}

export default AddCategory

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
    },
    buttonContainer: {
        margin: 50,
        flexDirection: 'row',
        gap: 20,
    }
})