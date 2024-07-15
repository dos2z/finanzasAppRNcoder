import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const NewAction = () => {
    return (
        <View>
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

const styles = StyleSheet.create({})