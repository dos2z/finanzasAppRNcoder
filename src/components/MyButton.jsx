import { StyleSheet, Text, Pressable} from 'react-native'
import React from 'react'
import { colors } from '../global/colors'

const MyButton = ({ title, onPress, type }) => {

    const cancel = {
        borderColor: 'red',
    }
    const accept = {
        borderColor: colors.accept,
    }
    const regular = {
        borderColor: 'black'
    }
    let borderStyle
    if (type === 'accept'){
        borderStyle = accept
    }else if(type === 'cancel'){
        borderStyle = cancel
    }else{
        borderStyle = regular
    }


    return (
        <Pressable style={[styles.button, borderStyle]} onPress={onPress}>
            <Text style={styles.buttonText}>{title}</Text>
        </Pressable>
    )
}

export default MyButton

const styles = StyleSheet.create({
    button: {
        borderWidth: 2,
        borderRadius: 5,
        padding: 5,
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