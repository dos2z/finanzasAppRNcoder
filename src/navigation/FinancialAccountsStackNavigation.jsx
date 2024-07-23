import { StyleSheet } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import FinancialAccounts from '../screens/FinancialAccounts'
import AddAccount from '../screens/AddAccount'

const Stack = createNativeStackNavigator()

const FinancialAccountsStackNavigation = () => {
    return (
        <Stack.Navigator 
        initialRouteName='accounts'
        screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name='accounts' component={FinancialAccounts} />
            <Stack.Screen name='addAccount' component={AddAccount}/>
        </Stack.Navigator>
    )
}

export default FinancialAccountsStackNavigation

const styles = StyleSheet.create({
    
})