import { StyleSheet, View } from 'react-native'
import { useEffect, useState } from 'react'
import Form from '../components/Form'
import { useSignUpMutation } from '../services/authServices'
import { useDispatch } from 'react-redux'
import { setUser } from '../features/user/userSlice'
import { signupSchema } from '../validations/signupSchema'
import { useGetAccountsQuery } from '../services/shopServices'
import { getAccountsFromDB } from '../features/financialAccounts/accountsSlice'

const SignUp = ({ navigation }) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [checkPassword, setCheckPassword] = useState("")
    const [error, setError] = useState('')
    const dispatch = useDispatch()
    const [triggerSignUp, result] = useSignUpMutation()
    const [newLocalId, setNewLocalId] =useState('')
    const {data : dataAccounts} = useGetAccountsQuery(newLocalId)


    const onSubmit = () => {
        setError('')
        try { 
            signupSchema.validateSync({ email, password, checkPassword })
            triggerSignUp({ email, password, returnSecureToken: true })
           
        } catch (error) {
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
     
    }


    useEffect(() => {
        if (result.isSuccess) {
            setNewLocalId(result.data.localId)
            getAccountsFromDB(dataAccounts)
            console.log('localid singIn', newLocalId);
            console.log('dataAccounts', dataAccounts);
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