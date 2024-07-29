import { StyleSheet } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../screens/Home'
import NewTransaction from '../screens/NewTransaction'
import ExchangeRates from '../screens/ExchangeRates'
import { MaterialIcons } from '@expo/vector-icons';
import { colors } from '../global/colors'
import FinancialAccountsStackNavigation from './FinancialAccountsStackNavigation'
import ProfileStackNavigation from './ProfileStackNavigation'


const Tab = createBottomTabNavigator()

const BottomTabNavigation = () => {
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
                            <MaterialIcons name="home" size={!focused?32:48} color={color} />
                        )
                    }
                }}
            />
            <Tab.Screen name='Cuentas' component={FinancialAccountsStackNavigation}
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
            <Tab.Screen name='Usuario' component={ProfileStackNavigation}
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