import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Select from '../components/Select'

const Home = () => {
    return (
        <View style={styles.container}>
            <Text>Inicio</Text>
            <Select style={styles.selectZindex} title='Cuentas' />


            <View style={styles.graphicContainer}>
                <View style={styles.graphicView}>

                </View>
            </View>
            <Pressable style={styles.btn}>
                <Text>Detalle</Text>
            </Pressable>

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

    amountsContainer:{
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