import { Modal, Pressable, FlatList, StyleSheet, Text, View, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import SelectAccount from '../components/SelectAccount'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { colors } from '../global/colors';
import MyButton from '../components/MyButton';




const Home = () => {
    const [myTransactions, setMyTransactions] = useState(expensesTransactions)
    const { total } = useSelector((state) => state.accountsReducer.value)
    const { expensesTransactions, incomesTransactions } = useSelector((state) => state.transactionsReducer.value)

    const [showSelectAccount, setShowSelectAccount] = useState(false)
    const [accountSelected, setAccountSelected] = useState(total)



    return (



        <View style={styles.container}>

            <ScrollView >




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
                    <View style={styles.graphicView}>

                    </View>
                </View>

                <View style={styles.btnContainer}>
                    <MyButton title={'Gastos'} onPress={() => setMyTransactions(expensesTransactions)} />
                    <MyButton title={'Ingresos'} onPress={() => setMyTransactions(incomesTransactions)} />
                </View>

                <FlatList />



                <Modal visible={showSelectAccount}
                    transparent={true}>
                    <SelectAccount accountSelected={accountSelected}
                        setAccountSelected={setAccountSelected} exit={setShowSelectAccount}
                        show={showSelectAccount} showTotal={true} />
                </Modal>
            </ScrollView>
        </View>
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
    selectZindex: {
        zIndex: 10,
    },

    amountsContainer: {
        zIndex: 1,

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
        backgroundColor: 'grey',
    },

    btnContainer: {
        width: '80%',
        margin: 10,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        gap: 10,

    },


})