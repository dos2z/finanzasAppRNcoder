import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MyButton from './MyButton'

const Alert = ({title, message, okButton, cancelButton, setShowModal}) => {

const handleOkPress = ()=>{
    okButton()
    setShowmodal(false)
}
const handleCancelPress = ()=>{
    cancelButton()
    setShowModal(false)
}

  return (
    <View style={styles.container}>
      <Text>{title}</Text>
      <Text>{message}</Text>
      <View style={styles.btnContainer}>
        <MyButton title={'OK'} onPress={handleOkPress}/>
        <MyButton title={'cancelar'} onPress={handleCancelPress}/>
      </View>
    </View>
  )
}

export default Alert

const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        justifyContent: 'center',

    },
    btnContainer: {
        flexDirection: 'row',

    }

})