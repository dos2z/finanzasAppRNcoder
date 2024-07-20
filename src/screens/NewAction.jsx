import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CategoryPicker from '../components/CategoryPicker'

const NewAction = () => {
    return (
        <View style={styles.container}>
            <Text>Movimiento</Text>
            <View>
                <Pressable>
                    <Text>Gastos
                    </Text>
                </Pressable>
                <Pressable>
                    <Text>Ingresos
                    </Text>
                </Pressable>
            </View>
            <View>
                <Pressable>
                    
                </Pressable>
            </View>

            

        </View>
    )
}

export default NewAction

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})