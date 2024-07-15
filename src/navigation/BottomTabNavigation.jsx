import { StyleSheet, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../screens/Home'
import FinancialAccounts from '../screens/FinancialAccounts'
import NewAction from '../screens/NewAction'
import ExchangeRates from '../screens/ExchangeRates'
import Profile from '../screens/Profile'
import { MaterialIcons } from '@expo/vector-icons';


const Tab = createBottomTabNavigator()

const BottomTabNavigation = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: false,
            }}
        >
            <Tab.Screen name='Inicio' component={Home}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View>
                                <MaterialIcons name="home" size={focused ? 36 : 24} color={focused ? 'tomato' : 'grey'} />
                            </View>)
                    }
                }}
            />
            <Tab.Screen name='Cuentas' component={FinancialAccounts}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View>
                                <MaterialIcons name="account-balance" size={focused ? 36 : 24} color={focused ? 'tomato' : 'grey'} />
                            </View>)
                    }
                }} />
            <Tab.Screen name='Agregar movimiento' component={NewAction}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View>
                                <MaterialIcons name="add-circle" size={focused ? 48 : 24} color={focused ? 'tomato' : 'grey'} />
                            </View>)

                    }
                }} />
            <Tab.Screen name='Tipos de Cambio' component={ExchangeRates}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View>
                                <MaterialIcons name="currency-exchange" size={focused ? 36 : 24} color={focused ? 'tomato' : 'grey'} />
                            </View>)
                    }
                }} />
            <Tab.Screen name='Usuario' component={Profile}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View>
                                <MaterialIcons name="account-circle" size={focused ? 36 : 24} color={focused ? 'tomato' : 'grey'} />
                            </View>)
                    }
                }} />
        </Tab.Navigator>
    )
}

export default BottomTabNavigation

const styles = StyleSheet.create({})