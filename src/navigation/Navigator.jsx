import { StyleSheet } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import BottomTabNavigation from './BottomTabNavigation'

const Navigator = () => {
  return (
  <NavigationContainer>
    <BottomTabNavigation />
  </NavigationContainer>
  )
}

export default Navigator

const styles = StyleSheet.create({})