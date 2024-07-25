import { Pressable, StyleSheet, Text, View, Keyboard, ScrollView } from 'react-native'
import { useEffect, useState } from 'react'
import MyButton from '../components/MyButton'
import MyInputText from '../components/MyInputText';
import ColorPicker from '../components/ColorPicker';
import IconPicker from '../components/IconPicker';
import { categoryIcons } from '../global/icons';
import { useDispatch } from 'react-redux';
import { addExpensesCategory, addIncomeCategory } from '../features/categoriesSlice';
import { MaterialCommunityIcons } from '@expo/vector-icons';



const AddCategory = ({ navigation, route }) => {

    const [categoryName, setCategorytName] = useState('')
    const [iconId, setIconId] = useState('')
    const [iconName, setIconName] = useState('')
    const [colorChosed, setColorChosed] = useState('grey')



    const { transactionType } = route.params




    const dispatch = useDispatch()

    const createNewCategory = () => {
        const newCategory = {
            name: categoryName,
            type: transactionType,
            icon: iconName,
            color: colorChosed,
            id: new Date().toString()
        }

        if (transactionType === 'expenses') {
            dispatch(addExpensesCategory(newCategory))
        } else {
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


    return (
        <Pressable onPress={Keyboard.dismiss} style={styles.container}>
            <ScrollView
            showsVerticalScrollIndicator={false}>



                <Text style={{
                    fontSize: 24,
                    marginTop: 50,
                }}>
                    Crear categoria de {transactionType === 'expenses' ? 'Gastos' : 'Ingresos'}
                </Text>
                {!categoryName && <Text style={{color: 'red'}}>Introduzca el nombre de la categoria:</Text>}
                <MyInputText label={''} initialValue={categoryName} onChange={setCategorytName} />

                <View style={{ padding: 5 }}>
                    <MaterialCommunityIcons name={iconName} size={48} color={colorChosed} />
                </View>


                <IconPicker colorChosed={colorChosed} iconId={iconId} setIconId={setIconId} setIconName={setIconName} iconColection={categoryIcons} />

                <ColorPicker colorChosed={colorChosed} setColorChosed={setColorChosed} />



                <View style={styles.buttonContainer}>
                    <MyButton title={'Agregar'} type={'accept'} onPress={handleAddCategory} />
                    <MyButton title={'Cancelar'} type={'cancel'} onPress={() => navigation.goBack()} />
                </View>


            </ScrollView>

        </Pressable>

    )
}

export default AddCategory

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 10,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
    },
    buttonContainer: {
        margin: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 20,
    }
})