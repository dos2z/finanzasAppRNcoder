import { StyleSheet, Text, View, Pressable } from 'react-native'
import { colorsPiccker } from '../global/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';


const ColorPicker = ({colorChosed, setColorChosed}) => {


    const handleSelectColor = (color) => {
        if (color != colorChosed) {
            setColorChosed(color)
        } else {
            setColorChosed('grey')
        }

    }

    return (
        <View >
            <Text style={{
                fontWeight: 'bold',
                fontSize: 16
            }}>Colores</Text>
            <View style={styles.colorPickerContainer}>
                {colorsPiccker.map(color => {
                    return (
                        <Pressable key={color.color} style={[styles.colorPick, { backgroundColor: color.color }]} onPress={() => handleSelectColor(color.color)}>
                            <MaterialCommunityIcons name="check-bold" size={24} color={colorChosed != color.color ? color.color : 'white'} />
                        </Pressable>
                    )
                })}
            </View>

        </View>
    )
}

export default ColorPicker

const styles = StyleSheet.create({
    colorPickerContainer: {
        margin: 20,
        width: 250,
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 20,
    },
    colorPick: {
        borderRadius: 30,
        width: 30,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
})