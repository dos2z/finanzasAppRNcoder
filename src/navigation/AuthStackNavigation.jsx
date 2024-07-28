import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SingIn from '../screens/SignIn'
import SignUp from '../screens/SignUp'
import AddAccount from '../screens/AddAccount'

const Stack = createNativeStackNavigator()

const AuthStackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='signIn' component={SingIn} />
      <Stack.Screen name='signUp' component={SignUp} />
      <Stack.Screen name='addAccount' component={AddAccount} />
    </Stack.Navigator>
  )
}

export default AuthStackNavigation

const styles = StyleSheet.create({})