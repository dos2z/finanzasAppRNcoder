import { StyleSheet, Text, View, Pressable} from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';


const IconPicker = ({colorChosed, iconId, setIconId, setIconName, iconColection}) => {

    const handleSelectIcon = (id, name) => {
        setIconId(id)
        setIconName(name)
    }



  return (
    <View>
    <Text style={{
        fontWeight: 'bold',
        fontSize: 16
    }}>Símbolos</Text>
    <View style={styles.iconContainer}>
        {iconColection.map(icon => {
            return (
                <Pressable key={icon.id} style={[styles.newAccountIcon, icon.id != iconId ? { backgroundColor: 'grey',} 
                : { backgroundColor: colorChosed,
                    shadowColor: "#000000",
                    shadowOffset: {
                      width: 0,
                      height: 2,
                    },
                    shadowOpacity:  0.17,
                    shadowRadius: 2.54,
                    elevation: 3,
                 }]} onPress={() => handleSelectIcon(icon.id, icon.name)}>
                    <MaterialCommunityIcons name={icon.name} size={48} color="white" />
                </Pressable>
            )
        })}
    </View>

</View>
  )
}

export default IconPicker

const styles = StyleSheet.create({
    
    iconContainer: {
        margin: 20,
        width: 250,
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 20,
    },
    iconSelected: {
        
        borderWidth: .1,
        borderColor: 'black',
    },

    newAccountIcon: {
        padding: 5,
        borderRadius: 10,
    },
})