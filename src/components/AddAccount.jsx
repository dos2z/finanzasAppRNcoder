import { Pressable, StyleSheet, Text, View, TextInput } from 'react-native'
import { useState } from 'react'
import MyButton from '../components/MyButton'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { accountsIcons } from '../data/icons';
import { colorsPiccker } from '../global/colors';

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

    const handleSelectIcon = (id, name) => {
        setIconId(id)
        setIconName(name)

    }
    const handleSelectColor = (color) => {
        if (color != colorChosed) {
            setColorChosed(color)
        } else {
            setColorChosed('grey')
        }

    }



    return (
        <View style={styles.modaLContainer}>
            <Text style={{
                fontSize: 24,
                marginBottom: 20,
            }}>
                Nueva Cuenta
            </Text>

            <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>Nombre  </Text>
                <TextInput style={styles.input} value={accountName} onChangeText={setAccountName} />
            </View>


            <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>Monto inicial  $</Text>
                <TextInput style={styles.input} value={accountInitialAmount} onChangeText={setAccountInitialAmount} />
            </View>

            <View>
                <Text style={{
                    fontWeight: 'bold',
                    fontSize: 16
                }}>Símbolos</Text>
                <View style={styles.iconContainer}>
                    {accountsIcons.map(icon => {
                        return (
                            <Pressable key={icon.id} style={[styles.newAccountIcon, icon.id != iconId ? { backgroundColor: 'grey', } : { backgroundColor: colorChosed }]} onPress={() => handleSelectIcon(icon.id, icon.name)}>
                                <MaterialCommunityIcons name={icon.name} size={48} color="white" />
                            </Pressable>
                        )
                    })}
                </View>

            </View>

            <View >
                <Text style={{
                    fontWeight: 'bold',
                    fontSize: 16
                }}>Colores</Text>
                <View style={styles.colorPickerContainer}>
                    {colorsPiccker.map(color => {
                        return (
                            <Pressable key={color.color} style={[styles.colorPick, { backgroundColor: color.color }]} onPress={() => handleSelectColor(color.color)}>
                                <MaterialCommunityIcons name="check-bold" size={24} color={colorChosed != color.color ? color.color : 'white'} />
                            </Pressable>
                        )
                    })}
                </View>

            </View>

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
        fontWeight: 'bold',
    },
    input: {
        borderBottomWidth: 1,
        borderColor: 'black',
        width: '100%',
        color: 'black',
        fontSize: 20,

    },
    iconContainer: {
        margin: 20,
        width: 250,
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 20,
    },
    newAccountIcon: {
        padding: 5,
        borderRadius: 10,
    },
    colorPickerContainer: {
        margin: 20,
        width: 250,
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 20,
    },
    colorPick: {
        borderRadius: 30,
        width: 30,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalButtonContainer: {
        margin: 50,
        flexDirection: 'row',
        gap: 20,
    }
})