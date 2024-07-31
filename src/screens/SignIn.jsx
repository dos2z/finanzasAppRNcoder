import { StyleSheet, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import Form from '../components/Form'
import { useSignInMutation } from '../services/authServices'
import { useDispatch } from 'react-redux'
import { setUser } from '../features/user/userSlice'

const SignIn = ({ navigation }) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const dispatch = useDispatch()
  const [triggerSignIn, result] = useSignInMutation()
  const [error, setError] = useState('')

  const goToSignUp = () => {
    navigation.navigate('signUp')
  }
  const onSubmit = () => {
    triggerSignIn({ email, password, returnSecureToken: true })
    setEmail('')
    setPassword('')
  }

  const invitedUserStart = () => {
    dispatch(setUser({
      email: 'empty',
      idToken: 'empty'
    }))
  }
  useEffect(() => {
    if (result.isSuccess) {
      dispatch(setUser({
        email: result.data.email,
        idToken: result.data.idToken,
        localId: result.data.localId,
      })) 
    }else if (result.error) {
      const errorMessage = result.error.data.error.errors[0].message;
      const errorToRead = errorMessage.replaceAll('_', ' ')
      setError(errorToRead)}
  }, [result])

  return (
    <View style={{ flex: 1 }}>
      <Form title='Iniciar Sesión'
        textBtnA='Iniciar'
        textBtnB='Registrarse'
        fnBtnA={onSubmit}
        fnBtnB={goToSignUp}
        fnBtnC={invitedUserStart}
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        setError={setError}
        error={error}
      />
    </View>
  )
}

export default SignIn

const styles = StyleSheet.create({})