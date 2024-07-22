import { Modal, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

import SelectAccount from '../components/SelectAccount'


const Home = () => {

    const [showSelectAccount, setShowSelectAccount] = useState(false)
    const [accountSelected, setAccountSelected] = useState('Total')


    return (



        <View style={styles.container}>
            <Text>{accountSelected.name || 'Total'}</Text>

            <Pressable onPress={()=>{setShowSelectAccount(true)}}>
                <Text>AAAAAA</Text>
            </Pressable>




            <View style={styles.graphicContainer}>
                <View style={styles.graphicView}>

                </View>
            </View>
            <Pressable style={styles.btn}>
                <Text>Detalle</Text>
            </Pressable>
            <Modal visible={showSelectAccount}
                transparent={true}>
                <SelectAccount accountSelected={accountSelected} 
                setAccountSelected={setAccountSelected} exit={setShowSelectAccount} 
                show={showSelectAccount} showTotal={true} />
            </Modal>

        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'

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
    btn: {
        borderWidth: 2,
        borderColor: 'black',
        borderRadius: 5,
        padding: 5,
    }
})