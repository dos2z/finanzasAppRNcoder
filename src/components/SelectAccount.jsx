import { StyleSheet, Text, View, Pressable, ScrollView } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { colors } from '../global/colors';
import MyButton from './MyButton';
import { useSelector } from 'react-redux';

const SelectAccount = ({ accountSelected, setAccountSelected, exit, show, showTotal = false }) => {

    const { accounts: myAccounts, total } = useSelector((state) => state.accountsReducer.value)

    const totalAccount = {
        name: 'Total',
        amount: Number(total),
        icon: 'account-cash',
        color: 'gold',
        id: `total${this.icon}${this.color}`
    }
    if(accountSelected === 'Total' && showTotal){
        setAccountSelected(totalAccount)
    }

    const handleSelectAccount = (acc) => {
        setAccountSelected(acc)
        exit(!show)
    }

    return (
        <View style={styles.modalContainer}>

            <View style={styles.content}>
                <View style={styles.accountsContainer}>
                    <ScrollView >

                       {showTotal && <Pressable
                            style={styles.card}
                            onPress={() => handleSelectAccount(totalAccount)}>

                            <View style={[styles.checkBox, totalAccount.id === accountSelected.id && { backgroundColor: totalAccount.color }]}>
                                <MaterialCommunityIcons name="check" size={18} color={totalAccount.id != accountSelected.id ? 'white' : 'black'} />
                            </View>

                            <View style={[styles.iconContainer, { backgroundColor: totalAccount.color }]}>
                                <MaterialCommunityIcons name={totalAccount.icon} size={32} color='black' />
                            </View>
                            <View style={{ gap: 10 }}>
                                <Text style={{ fontSize: 16, fontStyle: 'italic' }}>Total</Text>
                                <Text style={{ fontSize: 16, fontWeight: 'bold' }}>$ {total}</Text>
                            </View>
                        </Pressable>}



                        {myAccounts.map(account => {
                            return (
                                <Pressable key={account.id}
                                    style={styles.card}
                                    onPress={() => handleSelectAccount(account)}>

                                    <View style={[styles.checkBox, account.id === accountSelected.id && { backgroundColor: account.color }]}>
                                        <MaterialCommunityIcons name="check" size={18} color={account.id != accountSelected.id ? 'white' : 'black'} />
                                    </View>

                                    <View style={[styles.iconContainer, { backgroundColor: account.color }]}>
                                        <MaterialCommunityIcons name={account.icon} size={32} color='black' />
                                    </View>
                                    <View style={{ gap: 10 }}>
                                        <Text style={{ fontSize: 16, fontStyle: 'italic' }}>{account.name}</Text>
                                        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>$ {account.amount}</Text>
                                    </View>


                                </Pressable>
                            )

                        })}
                    </ScrollView>
                </View >

                <MyButton title={'Cancelar'} onPress={() => { exit(!show) }} cancel={true} />

            </View>


        </View>
    )
}

export default SelectAccount

const styles = StyleSheet.create({

    modalContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,

        backgroundColor: colors.BGtranslucid,
    },
    content: {
        backgroundColor: colors.BGColor,
        width: '90%',
        alignItems: 'center',
        paddingVertical: 50,
        paddingHorizontal: 10,
        borderRadius: 20,
    },

    accountsContainer: {
        width: '100%',
        height: 300,

    },
    card: {
        margin: 10,
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 50,
        backgroundColor: 'white',
        borderRadius: 10,
        width: '90%',
        borderWidth: 1,
        borderColor: '#acacac',
    },
    checkBox: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 20,
        height: 20,
        borderRadius: 20,
        borderWidth: 1,
    },
    iconContainer: {
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
    },

})