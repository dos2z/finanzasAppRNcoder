import { StyleSheet } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../screens/Home'
import NewTransaction from '../screens/NewTransaction'
import { MaterialIcons } from '@expo/vector-icons';
import { colors } from '../global/colors'
import FinancialAccountsStackNavigation from './FinancialAccountsStackNavigation'
import ProfileStackNavigation from './ProfileStackNavigation'
import { useEffect, useState } from 'react';
import { useGetAccountsQuery } from '../services/shopServices';
import { useGetCategoriesQuery } from '../services/shopServices';
import { useGetTransactionsQuery } from '../services/shopServices';
import { useDispatch, useSelector } from 'react-redux';
import { getAccountsFromDB } from '../features/financialAccounts/accountsSlice';
import { addExpense, addIncome } from '../features/transactions/transactionsSlice';
import { addExpensesCategory, addIncomesCategory } from '../features/categories/categoriesSlice';



const Tab = createBottomTabNavigator()


const BottomTabNavigation = () => {
    const { localId } = useSelector((state) => state.auth.value)
    const { expensesCategories} = useSelector((state) => state.categories.value)
    const { data: dataAccounts, isLoading: isLoadingAccounts } = useGetAccountsQuery(localId)
    const { data: dataCategories, isloading: isLoadingCategories } = useGetCategoriesQuery(localId)
    const { data: dataTransactions, isloading: isLoadingTransactions } = useGetTransactionsQuery(localId)
    const dispatch = useDispatch()


    const getAccounts = (data) => {
        console.log(data);
        dispatch(getAccountsFromDB(data))
    }


    const getTransactions = (data) => {
        let transactions = data ?? []
        transactions.forEach((transaction) => {
            if (transaction) {
                switch (transaction.type) {
                    case 'expenses':
                        dispatch(addExpense(transaction));

                    case 'incomes':
                        dispatch(addIncome(transaction))
                    default:
                        break
                }
            }

        })
    }

    const getCategories = (data) => {
        let categories = data ?? []
        categories.forEach((category) => {
            if (category) {
                switch (category.type) {
                    case 'expenses':
                        dispatch(addExpensesCategory(category));
                    case 'incomes':
                        dispatch(addIncomesCategory(category));
                    default:
                        break
                }
            }
        })

    }


    useEffect(() => {
        if (localId) {
            if (dataAccounts, dataTransactions, dataCategories) {
                getAccounts(dataAccounts)
                getTransactions(dataTransactions)
                getCategories(dataCategories)
            }
        }
    }, [isLoadingAccounts, isLoadingCategories, isLoadingTransactions, dataAccounts, dataTransactions, dataCategories])


    return (
        <Tab.Navigator
            initialRouteName='home'
            screenOptions={{

                tabBarShowLabel: false,
                tabBarActiveTintColor: colors.mainColor,
                tabBarStyle: {
                    height: 90,
                }

            }}
        >
            <Tab.Screen name='home' component={Home}
                options={{
                    tabBarIcon: ({ color, focused }) => {
                        return (
                            <MaterialIcons name="home" size={!focused ? 32 : 48} color={color} />
                        )
                    }
                }}
            />
            <Tab.Screen name='Cuentas' component={FinancialAccountsStackNavigation}
                options={{
                    tabBarIcon: ({ color, focused }) => {
                        return (
                            <MaterialIcons name="account-balance" size={!focused ? 32 : 48} color={color} />
                        )
                    }
                }} />
            <Tab.Screen name='Agregar movimiento' component={NewTransaction}
                options={{
                    tabBarIcon: ({ color, focused }) => {
                        return (
                            <MaterialIcons name="add-circle" size={!focused ? 40 : 48} color={color} />
                        )

                    }
                }} />

            <Tab.Screen name='Usuario' component={ProfileStackNavigation}
                options={{
                    tabBarIcon: ({ color, focused }) => {
                        return (
                            <MaterialIcons name="account-circle" size={!focused ? 32 : 48} color={color} />
                        )
                    }
                }} />
        </Tab.Navigator>
    )
}

export default BottomTabNavigation

const styles = StyleSheet.create({})