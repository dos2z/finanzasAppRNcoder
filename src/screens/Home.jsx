import { Modal, Pressable, FlatList, StyleSheet, Text, View, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import SelectAccount from '../components/SelectAccount'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { colors } from '../global/colors';
import MyButton from '../components/MyButton';
import CardTransaction from '../components/CardTransaction';
import ChartPie from '../components/ChartPie';
import { useGetAccountsQuery, useGetCategoriesQuery, useGetTransactionsQuery, usePostAccountsMutation, usePostCategoryMutation, usePostTransactionMutation } from '../services/shopServices';
import { getAccountsFromDB } from '../features/financialAccounts/accountsSlice';
import { addExpensesCategory, addIncomesCategory } from '../features/categories/categoriesSlice';
import { addExpense, addIncome } from '../features/transactions/transactionsSlice';


const Home = () => {
    const { expensesCategories, incomesCategories } = useSelector((state) => state.categories.value)
    const { expensesTransactions, incomesTransactions, totalExpenses, totalIncomes } = useSelector((state) => state.transactions.value)
    const { accounts, total } = useSelector((state) => state.accounts.value)


    const [myTransactions, setMyTransactions] = useState(expensesTransactions)
    const [isExpenses, setIsExpenses] = useState(true)
    const [showSelectAccount, setShowSelectAccount] = useState(false)
    const [accountSelected, setAccountSelected] = useState(total)
    const [myCategories, setMyCategories] = useState(expensesCategories)
    const [totalTransactions, setTotalTransactions] = useState(totalExpenses)
    const { localId } = useSelector((state) => state.auth.value)
    const { data: dataAccounts } = useGetAccountsQuery({ localId })
    const { data: dataCategories } = useGetCategoriesQuery(localId)
    const { data: dataTransactions } = useGetTransactionsQuery(localId)


    const [triggerPostAccounts, resultPostAccounts] = usePostAccountsMutation()
    const [triggerPostCategories, resultPostCategories] = usePostCategoryMutation()
    const [triggerPostTransactions, resultPostTransactions] = usePostTransactionMutation()
    const dispatch = useDispatch()


    dispatch(getAccountsFromDB(dataAccounts))


    if (dataCategories) {
        dataCategories.forEach((category) => {
            switch (category.type) {
                case 'expense':
                    dispatch(addExpensesCategory(category));
                case 'income':
                    dispatch(addIncomesCategory(category))
                default:
                    break
            }
        })
    }
    if (dataTransactions) {
        dataTransactions.forEach((transaction) => {
            switch (transaction.type) {
                case 'expense':
                    dispatch(addExpense(transaction));
                case 'income':
                    dispatch(addIncome(transaction));
                default:
                    break

            }
        })
    }


    const handleShowTransactionList = (type) => {
        if (type === 'expenses') {
            setIsExpenses(true)
            setMyTransactions(expensesTransactions)
            setMyCategories([...expensesCategories])
            setTotalTransactions(totalExpenses)
        } else {
            setIsExpenses(false)
            setMyTransactions(incomesTransactions)
            setMyCategories([...incomesCategories])
            setTotalTransactions(totalIncomes)
        }
    }

    useEffect(() => {

        if (isExpenses) {
            setMyTransactions([...expensesTransactions])
            setMyCategories([...expensesCategories])

        } else {
            setMyTransactions([...incomesTransactions])
            setMyCategories([...incomesCategories])

        }

        const allCategories = [...expensesCategories, ...incomesCategories]
        const allTransactions = [...expensesTransactions, ...incomesTransactions]
        if (accounts && accounts.length > 0) {
            triggerPostAccounts({ accounts, localId })
        }
        if (allCategories && allCategories.length > 0) {
            triggerPostCategories({ categories: allCategories, localId })
        }
        if (allTransactions && allTransactions.length > 0) {
            triggerPostTransactions({ transactions: allTransactions, localId })
        }

    }, [accounts])


    return (



        <View View style={styles.container} >

            <Pressable style={styles.selectAccountBtn} onPress={() => { setShowSelectAccount(true) }}>
                <View style={[styles.iconContainer, { backgroundColor: accountSelected.color }]}>
                    <MaterialCommunityIcons name={accountSelected.icon} size={48} color={accountSelected.color !== '#000001' ? 'black' : 'white'} />
                </View>
                <View>
                    <Text style={{ fontSize: 20 }}>{accountSelected.name || 'Total'}</Text>
                    <Text style={{ fontSize: 24, fontWeight: 'bold' }}>{accountSelected.amount || total.amount}</Text>
                </View>
            </Pressable>

            <View style={styles.graphicContainer}>
                {!myTransactions.length && <View style={styles.graphicView}>

                </View>}
                <ChartPie myCategories={myCategories} myTransactions={myTransactions} total={totalTransactions} />
            </View>

            <View style={styles.btnContainer}>
                <MyButton title={'Gastos'} onPress={() => handleShowTransactionList('expenses')} type={isExpenses && 'accept'} />
                <MyButton title={'Ingresos'} onPress={() => handleShowTransactionList('incomes')} type={!isExpenses && 'accept'} />
            </View>

            <FlatList
                style={styles.flatList}
                showsVerticalScrollIndicator={false}
                data={myTransactions}
                keyExtractor={item => item.id}
                renderItem={({ item }) => <CardTransaction item={item} />} />



            <Modal visible={showSelectAccount}
                transparent={true}>
                <SelectAccount accountSelected={accountSelected}
                    setAccountSelected={setAccountSelected} exit={setShowSelectAccount}
                    show={showSelectAccount} showTotal={true} />
            </Modal>

        </View >
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingVertical: 50,
        backgroundColor: colors.BGColor,

    },
    selectAccountBtn: {
        flexDirection: 'row',
        gap: 20,
        margin: 10,
    },
    iconContainer: {
        width: 56,
        height: 56,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        shadowColor: "#000000",
        shadowOffset: {
            width: 2,
            height: 4,
        },
        shadowOpacity: 0.17,
        shadowRadius: 2.54,
        elevation: 7,
    },


    graphicContainer: {
        width: '100%',
        height: 300,
        alignItems: 'center',
        justifyContent: 'center'
    },
    graphicView: {
        width: 250,
        height: 250,
        borderRadius: 250,
        backgroundColor: 'lightgrey',
    },
    flatList: {
        width: '90%',
    },

    btnContainer: {
        width: '80%',
        margin: 10,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        gap: 10,

    },


})