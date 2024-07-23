import { StyleSheet, Text, View, TextInput } from 'react-native'

const MyInputText = ({label, initialValue, onChange, keyboardType = 'text'}) => {
    return (
        <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>{label}</Text>
            <TextInput style={styles.input} value={initialValue} onChangeText={onChange} inputMode={keyboardType}/>
        </View>
    )
}

export default MyInputText

const styles = StyleSheet.create({
    inputContainer: {
        width: 250,
        flexDirection: 'row',
        gap: 5,
        justifyContent: 'flex-start',
        overflow: 'hidden',
        marginBottom: 20,
    },
    inputLabel: {
        fontSize: 20,
        
    },
    input: {
        borderBottomWidth: 1,
        borderColor: 'black',
        width: '100%',
        color: 'black',
        fontSize: 20,

    },
})