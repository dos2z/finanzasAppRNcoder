import { Pressable, StyleSheet, Text, View, TextInput } from 'react-native'
import { useState } from 'react'
import MyButton from '../components/MyButton'
import { accountsIcons } from '../global/icons';
import MyInputText from './MyInputText';
import ColorPicker from './ColorPicker';
import IconPicker from './IconPicker';

const AddAccount = ({ handleShow, show }) => {
    const [accountName, setAccountName] = useState('')
    const [accountInitialAmount, setAccountInitialAmount] = useState(0)
    const [iconId, setIconId] = useState('')
    const [iconName, setIconName] = useState('')
    const [colorChosed, setColorChosed] = useState('grey')

    const createNewAccount = () => {
        const newAccount = {
            accountName,
            accountAmount: accountInitialAmount,
            accountIcon: iconName,
            accountColor: colorChosed,
        }
        console.log(newAccount)
    }


    const handleAddAccount = ()=>{
        if(!accountName || !accountInitialAmount || !iconId){
            console.log('Falta agregar algo');
        }else{
           createNewAccount(); 
            //Lógica del reduce
            handleShow(!show)
        }

    }


    const handleShowAddAccount = () => {
        handleShow(!show)
    }



    return (
        <View style={styles.modaLContainer}>
            <Text style={{
                fontSize: 24,
                marginBottom: 20,
            }}>
                Nueva Cuenta
            </Text>
           
            <MyInputText label={'Nombre'} initialValue={accountName} onChange={setAccountName}/>

            <MyInputText label={'Monton Inicial  $'} initialValue={accountInitialAmount} onChange={setAccountInitialAmount}/>

            <IconPicker colorChosed={colorChosed} iconId={iconId} setIconId={setIconId} setIconName={setIconName} iconColection={accountsIcons}/>

            <ColorPicker colorChosed={colorChosed} setColorChosed={setColorChosed} />

           

            <View style={styles.modalButtonContainer}>
                <MyButton title={'Agregar'} onPress={handleAddAccount}/>
                <MyButton title={'Cancelar'} cancel={true} onPress={handleShowAddAccount} />
            </View>


        </View>
    )
}

export default AddAccount

const styles = StyleSheet.create({
    modaLContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
    },
    modalButtonContainer: {
        margin: 50,
        flexDirection: 'row',
        gap: 20,
    }
})