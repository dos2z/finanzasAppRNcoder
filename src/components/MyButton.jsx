import { StyleSheet, Text, Pressable} from 'react-native'
import React from 'react'
import { colors } from '../global/colors'
import { baseUrl } from '../database/realTimeDataBase'

const MyButton = ({ title, onPress, type }) => {

    const cancel = {
        borderColor: 'red',
    }
    const accept = {
        borderColor: colors.accept,
    }
    const disabled = {
        borderWidth: 0,
        backgroundColor: 'lightgrey',
        opacity: 0.6
    }
    const regular = {
        borderWidth: 0,
    }
    let borderStyle
    if (type === 'accept'){
        borderStyle = accept
    }else if(type === 'cancel'){
        borderStyle = cancel
    }else if(type === 'disabled'){
        borderStyle = disabled
    }
    else{
        borderStyle = regular
    }


    return (
        <Pressable style={({pressed})=>[styles.button, borderStyle, {opacity: pressed ? 0.6 : 1}]} onPress={onPress}>
            <Text style={styles.buttonText}>{title}</Text>
        </Pressable>
    )
}

export default MyButton

const styles = StyleSheet.create({
    button: {
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        backgroundColor: colors.BGbutton,
    },
    accept: {
        borderColor: colors.accept,
    },
    cancel: {
        borderColor: 'red',
    },
    buttonText: {
        fontSize: 20,
        fontWeight: 'bold',
    }

})