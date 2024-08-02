import { Modal, Pressable, FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import SelectAccount from '../components/SelectAccount'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { colors } from '../global/colors';
import MyButton from '../components/MyButton';
import CardTransaction from '../components/CardTransaction';
import ChartPieExpenses from '../components/ChartPieExpenses';
import ChartPieIncomes from '../components/ChartPieIncomes'



const Home = () => {

    const { expensesTransactions, incomesTransactions } = useSelector((state) => state.transactions.value)
    const { total, accounts } = useSelector((state) => state.accounts.value)

    const [myTransactions, setMyTransactions] = useState('')
    const [isExpenses, setIsExpenses] = useState(true)
    const [showSelectAccount, setShowSelectAccount] = useState(false)
    const [accountSelected, setAccountSelected] = useState(total)


    

    const handleShowTransactionList = (type) => {
        if (type === 'expenses') {
            setIsExpenses(true)
            setMyTransactions(expensesTransactions)
        } else {
            setIsExpenses(false)
            setMyTransactions(incomesTransactions)
        }
    }
    useEffect(() => {
        if (isExpenses) {
            setMyTransactions(expensesTransactions)
        } else {
            setMyTransactions(incomesTransactions)
        }
    }, [incomesTransactions, expensesTransactions])


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

                {isExpenses ?
                    <ChartPieExpenses isExpenses={isExpenses} /> :
                    <ChartPieIncomes />
                }

            </View>

            <View style={styles.btnContainer}>
                <MyButton title={'Gastos'} onPress={() => handleShowTransactionList('expenses')} type={isExpenses && 'select'} />
                <MyButton title={'Ingresos'} onPress={() => handleShowTransactionList('incomes')} type={!isExpenses && 'select'} />
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