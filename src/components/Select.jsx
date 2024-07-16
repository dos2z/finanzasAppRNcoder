import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

const Select = ({ title = 'Select' }) => {
    const [show, setShow] = useState(false)
    const [optionName, setOptionName] = useState('')

    const options = ['Total', 'Cuenta 1', 'Cuenta 2', 'Cuenta 3']

    const handleShow = () => {
        setShow(!show)
    }
    const handleSelectOption = (option) => {
        setOptionName(option)
        setShow(false)
    }

    return (
        <View style={styles.selectContainer}>
            <Pressable onPress={handleShow} style={styles.selectBtn}>
                <Text style={styles.selectTitle}>{title}: {optionName}</Text>
            </Pressable>

            <View style={styles.amountsContainer}>
                <Text style={styles.amountText}>Total$xxx</Text>
                <Text style={styles.amountText}>Gastos$xxx</Text>
            </View>
            {show && <View style={styles.optionsContainer}>
                <ScrollView>
                    {options.map((option) => {
                        return (
                            <Pressable style={styles.option} onPress={() => handleSelectOption(option)}>
                                <Text style={styles.optionText}>{option}</Text>
                            </Pressable>
                        )
                    })}
                </ScrollView>

            </View>}

        </View>
    )
}

export default Select

const styles = StyleSheet.create({
    selectContainer: {
        width: 200,
        margin: 50,
    },
    selectTitle: {
        fontSize: 16,
        fontWeight: 'bold',
    },

    amountsContainer: {
        margin: 10,
    },
amountText:{
    fontSize: 20, 
    margin: 5,
},
    optionsContainer: {

        position: 'absolute',
        top: 0,
        width: '100%',
        height: 120,
        backgroundColor: 'white',
        padding: 10,
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,

    },
    option: {
        margin: 5,
        padding: 3,
    },
    optionText: {
        fontSize: 16,
    }


})