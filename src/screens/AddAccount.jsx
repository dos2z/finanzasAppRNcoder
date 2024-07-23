import { Pressable, StyleSheet, Text, View, Keyboard, ScrollView } from 'react-native'
import { useState } from 'react'
import MyButton from '../components/MyButton'
import { accountsIcons } from '../global/icons';
import MyInputText from '../components/MyInputText';
import ColorPicker from '../components/ColorPicker';
import IconPicker from '../components/IconPicker';

import { useDispatch } from 'react-redux';
import { addAccount } from '../features/accountsSlice';


const AddAccount = ({ navigation }) => {
    const [accountName, setAccountName] = useState('')
    const [accountInitialAmount, setAccountInitialAmount] = useState(0)
    const [iconId, setIconId] = useState('')
    const [iconName, setIconName] = useState('')
    const [colorChosed, setColorChosed] = useState('grey')
    const dispatch = useDispatch()

    const createNewAccount = () => {
        const newAccount = {
            name: accountName,
            amount: Number(accountInitialAmount),
            icon: iconName,
            color: colorChosed,
            id: new Date().toString()
        }
        dispatch(addAccount(newAccount))
    }


    const handleAddAccount = () => {
        if (!accountName || !iconId) {
                
        } else {
            createNewAccount();
            navigation.goBack()
        }

    }


    return (


        <Pressable onPress={Keyboard.dismiss} style={styles.container}>
            <ScrollView>
                <Text style={{
                    fontSize: 24,
                    marginTop: 20,
                }}>
                    Nueva Cuenta
                </Text>

                {!accountName && <Text style={{ color: 'red', }}>Introduzca un nombre para la cuenta</Text>}
                <MyInputText label={'Nombre'} initialValue={accountName} onChange={setAccountName} />

                <MyInputText label={'Monto Inicial  $'} initialValue={accountInitialAmount} onChange={setAccountInitialAmount} keyboardType={'decimal'} />

                <IconPicker colorChosed={colorChosed} iconId={iconId} setIconId={setIconId} setIconName={setIconName} iconColection={accountsIcons} />

                <ColorPicker colorChosed={colorChosed} setColorChosed={setColorChosed} />

                <View style={styles.buttonContainer}>
                    <MyButton title={'Agregar'} type={'accept'} onPress={handleAddAccount} />
                    <MyButton title={'Cancelar'} type={'cancel'} onPress={() => navigation.goBack()} />
                </View>
            </ScrollView>
        </Pressable>

    )
}

export default AddAccount

const styles = StyleSheet.create({
    container: {
        flex: 1,
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