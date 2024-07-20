import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'


const CategoryPicker = () => {
    



    return (



        <View style={styles.container}>
            <Text>Seleccionar categoría</Text>
            <View>
                {}
            </View>
            
            


        </View>
    )
}

export default CategoryPicker

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    buttonContainer: {
        justifyContent: 'center',
        flexDirection: 'row',
        gap: 20,
    }
})