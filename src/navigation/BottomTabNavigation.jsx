import { StyleSheet, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../screens/Home'
import FinancialAccounts from '../screens/FinancialAccounts'
import NewTransaction from '../screens/NewTransaction'
import ExchangeRates from '../screens/ExchangeRates'
import Profile from '../screens/Profile'
import { MaterialIcons } from '@expo/vector-icons';
import { colors } from '../global/colors'


const Tab = createBottomTabNavigator()

const BottomTabNavigation = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: false,
                tabBarActiveTintColor: colors.mainColor,
               
            }}
        >
            <Tab.Screen name='Inicio' component={Home}
                options={{
                    tabBarIcon: ({ color, focused }) => {
                        return (
                            <MaterialIcons name="home" size={!focused?32:48} color={color} />
                        )
                    }
                }}
            />
            <Tab.Screen name='Cuentas' component={FinancialAccounts}
                options={{
                    tabBarIcon: ({ color, focused }) => {
                        return (
                            <MaterialIcons name="account-balance" size={!focused?32:48} color={color} />
                        )
                    }
                }} />
            <Tab.Screen name='Agregar movimiento' component={NewTransaction}
                options={{
                    tabBarIcon: ({ color, focused }) => {
                        return (
                            <MaterialIcons name="add-circle" size={!focused?32:48} color={color} />
                        )

                    }
                }} />
            <Tab.Screen name='Tipos de Cambio' component={ExchangeRates}
                options={{
                    tabBarIcon: ({ color, focused }) => {
                        return (
                            <MaterialIcons name="currency-exchange" size={!focused?32:48} color={color} />
                        )
                    }
                }} />
            <Tab.Screen name='Usuario' component={Profile}
                options={{
                    tabBarIcon: ({ color, focused }) => {
                        return (
                            <MaterialIcons name="account-circle" size={!focused?32:48} color={color} />
                        )
                    }
                }} />
        </Tab.Navigator>
    )
}

export default BottomTabNavigation

const styles = StyleSheet.create({})