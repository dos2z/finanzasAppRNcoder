import { Platform, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import BottomTabNavigation from './BottomTabNavigation'
import AuthStackNavigation from './AuthStackNavigation'
import { useDispatch, useSelector } from 'react-redux'
import { getSession } from '../persistence'
import { setUser } from '../features/user/userSlice'

const Navigator = () => {
  const { user } = useSelector((state) => state.auth.value)
  const dispatch = useDispatch()


  useEffect(() => {
    (async () => {
      try {
        if (Platform.OS !== 'web') {
          const response = await getSession()
        }
        if (response.rows.length) {
          const user = response.rows._array[0]
          dispatch(setUser({
            email: user.email,
            localId: user.localId,
            token: user.token
          }))
        } else {
          dispatch(setUser({
            email: user.email,
            localId: user.localId,
            token: user.token
          }))
        }
      } catch (error) {

      }
    })
  }, [])

  return (
    <NavigationContainer>
      {user ? <BottomTabNavigation />
        : <AuthStackNavigation />}
    </NavigationContainer>
  )
}

export default Navigator

const styles = StyleSheet.create({})