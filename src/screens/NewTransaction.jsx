import { StyleSheet} from 'react-native'

import Expenses from './Expenses'
import Incomes from './Incomes'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import AddCategory from './AddCategory'

const NewAction = () => {



    const Stack = createNativeStackNavigator()



    return (
     

        <Stack.Navigator
        screenOptions={{
            headerShown: false
        }}> 
            <Stack.Screen name='expenses' component={Expenses} />
            <Stack.Screen name='incomes' component={Incomes}/>
            <Stack.Screen name='addCategory' component={AddCategory} />
        </Stack.Navigator>
    )
}

export default NewAction

const styles = StyleSheet.create({
   

})