import { StyleSheet, Text, View, Pressable, Alert, Modal } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { deleteTransaction } from '../features/transactions/transactionsSlice';
import { useDispatch } from 'react-redux';
import { modifyAccount } from '../features/financialAccounts/accountsSlice';

import { useSelector } from 'react-redux';
import { usePostAccountsMutation, usePostTransactionMutation } from '../services/shopServices';

const CardTransaction = ({ item }) => {
    const { accounts } = useSelector((state) => state.accounts.value)
    const { expensesTransactions, incomesTransactions } = useSelector((state) => state.transactions.value)
    const {localId} = useSelector((state) => state.auth.value)
    const [triggerPostTransactions] = usePostTransactionMutation()
    const [triggerPostAccounts] = usePostAccountsMutation()
    const dispatch = useDispatch()

    handleUpdatedAccount = (transaction, accountToModify) => {
        let modifier
        transaction.type === 'expenses' ? modifier = 1 : modifier = -1
        const updatedAccountAmount = modifier * Number(transaction.amount) + Number(accountToModify.amount)
        const updatedAccount = { ...transaction.account, amount: Number(updatedAccountAmount) }
        const myAccounts = accounts.filter(account => account.id !== transaction.account.id)
        myAccounts.push(updatedAccount)
        triggerPostAccounts({accounts: myAccounts, localId})
        dispatch(modifyAccount(updatedAccount))
    }

    const handleDelete = (transaction) => {
        const myTransactions = [...expensesTransactions, ...incomesTransactions]
        const accountToModify = accounts.find((account) => account.id = item.account.id)
        const updatedTransactions = myTransactions.filter((trans) => trans.id !== transaction.id)
        triggerPostTransactions({transactions: updatedTransactions, localId})
        handleUpdatedAccount(transaction, accountToModify)
        dispatch(deleteTransaction(transaction))
    }


    return (
        <Pressable style={styles.card}>
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