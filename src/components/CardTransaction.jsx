import { StyleSheet, Text, View, Pressable, Alert, Modal } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { deleteTransaction } from '../features/transactionsSlice';
import { useDispatch } from 'react-redux';
import { modifyAccount } from '../features/accountsSlice';

import { useSelector } from 'react-redux';
import { useState } from 'react';

const CardTransaction = ({ item }) => {
    const { accounts } = useSelector((state) => state.accountsReducer.value)
    const dispatch = useDispatch()
    const [isOkPressed, setIsOkPressed] = useState(false)
    



    handleUpdatedAccount = (transaction, accountToModify) => {
        let modifier
        transaction.type === 'expenses' ? modifier = 1 : modifier = -1
        const updatedAccountAmount = modifier * Number(transaction.amount) + Number(accountToModify.amount)
        const updatedAccount = { ...transaction.account, amount: Number(updatedAccountAmount) }
        dispatch(modifyAccount(updatedAccount))
    }


    


    const handleDelete = (transaction) => {
        
        
            const accountToModify = accounts.filter((account) => account.id = item.account.id)[0]
            handleUpdatedAccount(transaction, accountToModify)
            dispatch(deleteTransaction(transaction))
        

    }


    return (
        <Pressable
            style={styles.card}

        >
            <View style={[styles.iconContainer, { backgroundColor: item.category.color }]}>
                <MaterialCommunityIcons name={item.category.icon} size={32} color={item.category.color !== '#000001' ? 'black' : 'white'} />
            </View>
            <View style={{ gap: 10 }}>
                <Text style={{ fontSize: 16, fontStyle: 'italic' }}>{item.date}</Text>
                <View>
                    <Text style={{ fontSize: 16, fontWeight: 'bold' }}>$ {item.amount}</Text>
                    <Text>{item.comment}</Text>
                </View>
            </View>
            <Pressable style={{ padding: 20 }} onPress={() => handleDelete(item)}>
                <MaterialCommunityIcons name="delete-forever" size={24} color="red" />
            </Pressable>


        </Pressable>
    )
}

export default CardTransaction

const styles = StyleSheet.create({
    card: {
        width: '100%',
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 50,
        borderWidth: 1,
        borderBottomColor: 'grey',
        backgroundColor: 'white',

        width: '90%',
    },
    iconContainer: {
        width: 40,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
    }
})