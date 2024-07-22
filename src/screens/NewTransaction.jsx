import { Pressable, StyleSheet, Text, View, KeyboardAvoidingView } from 'react-native'
import React, { useState } from 'react'
import CategoryPicker from '../components/CategoryPicker'
import Expenses from '../components/Expenses'
import Incomes from '../components/Incomes'

const NewAction = () => {

    const [isExpenses, setIsExpenses] = useState(true)




    return (
        <View>
            <View style={styles.headerButtonsContainer} >
                <Pressable style={[styles.headerButton, isExpenses && {backgroundColor: 'white'}]} onPress={() => setIsExpenses(true)}>
                    <Text style={styles.buttonText}>Gastos</Text>
                </Pressable>
                <Pressable style={[styles.headerButton, !isExpenses && {backgroundColor: 'white'}]} onPress={() => setIsExpenses(false)}>
                    <Text style={styles.buttonText}>Ingresos</Text>
                </Pressable>
            </View>

           

            {
                isExpenses ? <Expenses /> : <Incomes />
            }





        </View>
    )
}

export default NewAction

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerButtonsContainer: {
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
    }
})