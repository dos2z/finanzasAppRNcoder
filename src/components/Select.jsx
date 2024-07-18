import { Pressable, ScrollView, StyleSheet, Text, View, Modal } from 'react-native'
import React, { useState } from 'react'

const Select = ({ title = 'Select' }) => {
    const [modalVisible, setModalVisible] = useState(false)
    const [optionName, setOptionName] = useState('')
    //Cuentas Fake - probar despues con un assyncMok
    const options = ['Total', 'Cuenta 1', 'Cuenta 2', 'Cuenta 3']

    const handleModalShow = () => {
        setModalVisible(!modalVisible)
    }
    const handleSelectOption = (option) => {
        setOptionName(option)
        setModalVisible(false)
    }

    return (
        <View style={styles.selectContainer}>
            <Pressable onPress={handleModalShow} style={styles.selectBtn}>
                <Text style={styles.selectTitle}>{title}: {optionName}</Text>
            </Pressable>
            <Modal
                visible={modalVisible}
                transparent={true}
            >
                <View style={styles.optionsContainer}>
                    <ScrollView>
                        {options.map((option) => {
                            return (
                                <Pressable style={styles.option} onPress={() => handleSelectOption(option)}>
                                    <Text style={styles.optionText}>{option}</Text>
                                </Pressable>
                            )
                        })}
                    </ScrollView>
                </View>
            </Modal>
            <View style={styles.amountsContainer}>
                <Text style={styles.amountText}>Total$xxx</Text>
                <Text style={styles.amountText}>Gastos$xxx</Text>
            </View>


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
    amountText: {
        fontSize: 20,
        margin: 5,
    },
    optionsContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    },
    option: {
        margin: 5,
        padding: 3,
    },
    optionText: {
        fontSize: 16,
    }


})