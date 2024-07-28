import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Profile from '../screens/Profile'
import ImagePicker from '../screens/ImagePicker'

const Stack = createNativeStackNavigator()

const ProfileStackNavigation = () => {
  return (
    <Stack.Navigator
    initialRouteName='profile'
    screenOptions={{
        headerShown: false,
    }}>
      <Stack.Screen name='profile' component={Profile} />
      <Stack.Screen name='imagePicker' component={ImagePicker} />
    </Stack.Navigator>
  )
}

export default ProfileStackNavigation

