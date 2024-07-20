import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CategoryCreation = () => {
  return (
    <View style={styles.container}>
    <Text>Crear categoría</Text>

    <MyInputText label={'Nombre'} />

    <IconPicker colorChosed={colorChosed} iconId={iconId} setIconId={setIconId} setIconName={setIconName} iconColection={categoryIcons} />

    <ColorPicker colorChosed={colorChosed} setColorChosed={setColorChosed} />

    <View style={styles.buttonContainer}>
        <MyButton title={'Crear'} onPress={createCategory}/>
        <MyButton title={'Cancelar'} onPress={handleCancel} cancel={true}/>
    </View>


</View>
  )
}

export default CategoryCreation

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