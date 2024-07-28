import { StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import BottomTabNavigation from './BottomTabNavigation'
import AuthStackNavigation from './AuthStackNavigation'
import { useSelector } from 'react-redux'

const Navigator = () => {
  const { user } = useSelector((state) => state.authReducer.value)

  return (
    <NavigationContainer>
      {user ? <BottomTabNavigation />
        : <AuthStackNavigation />}
    </NavigationContainer>
  )
}

export default Navigator

const styles = StyleSheet.create({})