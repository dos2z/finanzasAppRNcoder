import { StyleSheet, Text, View } from 'react-native'
import { useEffect, useState } from 'react'
import Form from '../components/Form'
import { useSignUpMutation } from '../services/authServices'
import { useDispatch } from 'react-redux'
import { setUser } from '../features/user/userSlice'
import { signupSchema } from '../validations/signupSchema'

const SignUp = ({ navigation }) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [checkPassword, setCheckPassword] = useState("")
    const [error, setError] = useState('')
    const dispatch = useDispatch()
    const [triggerSignUp, result] = useSignUpMutation()


    const onSubmit2 = () => {

        triggerSignUp({ email, password, returnSecureToken: true })
        setEmail('')
        setPassword('')
    }

    const onSubmit = () => {
        setError('')
        try { console.log('entra al try');
            console.log(email);
            signupSchema.validateSync({ email, password, checkPassword })
            triggerSignUp({ email, password, returnSecureToken: true })
            console.log('paso el trigger');
        } catch (error) {
            console.log('entra al catch');
            console.log(error);
            switch (error.path) {
                case "email":
                    setError(error.message);
                case "password":
                    setError(error.message);
                case "checkPassword":
                    setError(error.message);
                default:
                    break;
            }

        }
        console.log(error);
    }


    useEffect(() => {
        if (result.isSuccess) {
            dispatch(setUser({
                email: result.data.email,
                idToken: result.data.idToken,
                localId: result.data.localId,
            }))
        }
    }, [result])

    const goToSingIn = () => {
        navigation.navigate('signIn')
    }
    return (
        <View style={{ flex: 1 }}>
            <Form title='Crear Cuenta'
                textBtnA='Crear cuenta'
                textBtnB='Ya tengo Cuenta'
                signUp={true}
                fnBtnA={onSubmit}
                fnBtnB={goToSingIn}

                email={email}
                setEmail={setEmail}
                password={password}
                setPassword={setPassword}
                checkPassword={checkPassword}
                setCheckPassword={setCheckPassword}
                error={error}
            />
        </View>
    )
}

export default SignUp

const styles = StyleSheet.create({})