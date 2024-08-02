import { StyleSheet, Text, View, TextInput, Pressable, Keyboard, KeyboardAvoidingView, Platform } from 'react-native'
import React, { useState } from 'react'
import { colors } from '../global/colors'
import MyButton from './MyButton';

const Form = ({
    title = "Titulo",
    textBtnA = "Aceptar",
    textBtnB = "Cancelar",
    fnBtnA,
    fnBtnB,
    fnBtnC,
    signUp = false,
    email,
    setEmail,
    password,
    setPassword,
    checkPassword,
    setCheckPassword,
    error
}) => {



    

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.kav}>
            <Pressable onPress={Keyboard.dismiss} style={{justifyContent: 'space-around'}}>
                <View style={styles.container}>
                    <Text style={styles.title}>{title}</Text>

                    <Text style={{color: 'red', fontSize: 16}}>{error}</Text>

                    <View style={styles.inputContainer}>

                        <TextInput style={styles.input} textContentType={'emailAddress'} placeholder={'email'} value={email} onChangeText={setEmail} />

                        <TextInput style={styles.input} 
                        textContentType={'password'} 
                        placeholder={'password'} 
                        value={password} 
                        onChangeText={setPassword} 
                        secureTextEntry={true}
                        autoCapitalize='none' />

                        {signUp &&
                            <>
                                {password !== checkPassword &&
                                    <Text style={{ color: 'red' }}>Las contraseñas no coinciden</Text>
                                }

                                <TextInput style={styles.input} 
                                textContentType={'password'} 
                                placeholder={'repeat password'} 
                                value={checkPassword} 
                                onChangeText={setCheckPassword} 
                                secureTextEntry={true} 
                                autoCapitalize='none'/>

                            </>
                        }
                    </View>
                    <View style={styles.btnContainer}>
                        {password !== checkPassword && signUp ? 
                            <MyButton title={textBtnA} onPress={()=>{}} type={'disabled'}/> :
                            <MyButton title={textBtnA} onPress={fnBtnA} /> 
                            }

                        <Pressable style={styles.btnB} onPress={fnBtnB}>
                            <Text style={styles.btnText}>
                                {textBtnB}
                            </Text>
                        </Pressable>
                    </View>

                    {!signUp &&
                        <Pressable onPress={fnBtnC} style={styles.anonimusStartBtn}>
                            <Text style={[styles.btnText, { color: "grey" }]}>
                                Usar sin registrarme
                            </Text>
                        </Pressable>
                    }
                </View>
            </Pressable>
        </KeyboardAvoidingView>

    )
}

export default Form

const styles = StyleSheet.create({
    kav: {
        flex: 1,
        justifyContent: 'center',
    },
    container: {

        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 58,
        fontWeight: 'bold',
        color: colors.mainColor,
    },
    input: {
        width: 250,
        margin: 10,
        padding: 10,
        borderRadius: 5,
        backgroundColor: colors.BGColor,

    },
    btnContainer: {
        gap: 10,
    },
    btnA: {
        padding: 10,
        marginBottom: 5,
        backgroundColor: colors.BGbutton,

    },
    btnB: {
        padding: 5,
        borderWidth: .5,
        borderColor: 'grey',
        borderRadius: 5,

    },
    btnText: {
        fontWeight: 'bold',
    },
    anonimusStartBtn: {
        borderWidth: .5,
        borderColor: "grey",
        padding: 3,
        marginTop: 50,
        borderRadius: 10,
    }
})