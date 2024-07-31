import { Pressable, StyleSheet, Text, View, Keyboard, ScrollView } from 'react-native'
import { useEffect, useState } from 'react'
import MyButton from '../components/MyButton'
import { accountsIcons } from '../global/icons';
import MyInputText from '../components/MyInputText';
import ColorPicker from '../components/ColorPicker';
import IconPicker from '../components/IconPicker';
import { MaterialCommunityIcons } from '@expo/vector-icons';


import { useDispatch, useSelector } from 'react-redux';
import { addAccount } from '../features/financialAccounts/accountsSlice';
import { usePostAccountsMutation } from '../services/shopServices';


const AddAccount = ({ navigation }) => {
    const [accountName, setAccountName] = useState('')
    const [accountInitialAmount, setAccountInitialAmount] = useState(0)
    const [iconId, setIconId] = useState('')
    const [iconName, setIconName] = useState('')
    const [colorChosed, setColorChosed] = useState('grey')
    const { localId } = useSelector((state) => state.auth.value)
    const { accounts } = useSelector((state) => state.accounts.value)
    const [triggerPostAccounts, result] = usePostAccountsMutation()
    const dispatch = useDispatch()

    const updatedAccounts = [...accounts]


    const createNewAccount = () => {
        const newAccount = {
            type: 'account',
            name: accountName,
            amount: Number(accountInitialAmount),
            icon: iconName,
            color: colorChosed,
            id: new Date().toString()
        }

        updatedAccounts.push(newAccount)
        triggerPostAccounts({ accounts: updatedAccounts, localId })

        dispatch(addAccount(newAccount))

    }


    const handleAddAccount = () => {
        if (!accountName || !iconId) {
            return
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
                <MyInputText label={''} initialValue={accountName} onChange={setAccountName} />

                <MyInputText label={'Monto Inicial  $'} initialValue={accountInitialAmount} onChange={setAccountInitialAmount} keyboardType={'decimal'} />

                <View style={{ padding: 5 }}>
                    <MaterialCommunityIcons name={iconName} size={48} color={colorChosed} />
                </View>

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
        margin: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 20,
    }
})