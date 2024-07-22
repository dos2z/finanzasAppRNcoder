import { StyleSheet, Text, View, Pressable, ScrollView, Modal } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useState } from 'react';



const IconPicker = ({ colorChosed, iconId, setIconId, setIconName, iconColection }) => {

    const [modlaShow, setModalShow] = useState(false)

    const handleSelectIcon = (id, name) => {
        setIconId(id)
        setIconName(name)
        setModalShow(false)
    }

    const handleShowIconList = () => {
        setModalShow(true)

    }



/*     let length = iconColection.length()
        let resto = length % 9
        let colectionPiece = (length - resto) / 9

    for(let i = 0; i <= resto; i++ ){
        let 

    }


    iconColection.forEach(icon => {
        
        

    }); */





    return (
        <View>
            <Text style={{
                fontWeight: 'bold',
                fontSize: 16
            }}>Símbolos</Text>
            <View style={styles.iconPickerContainer}>
                <View>
                    <View style={styles.iconContainer}>
                        {iconColection.map(icon => {
                            return (
                                <Pressable key={icon.id} style={[styles.newAccountIcon, icon.id != iconId ? { backgroundColor: 'grey', }
                                    : {
                                        backgroundColor: colorChosed,
                                        shadowColor: "#000000",
                                        shadowOffset: {
                                            width: 0,
                                            height: 2,
                                        },
                                        shadowOpacity: 0.17,
                                        shadowRadius: 2.54,
                                        elevation: 3,
                                    }]} onPress={() => handleSelectIcon(icon.id, icon.name)}>
                                    <MaterialCommunityIcons name={icon.name} size={48} color="white" />
                                </Pressable>
                            )
                        })}

                    </View>
                </View>

                {
                    iconColection.length > 9 &&
                    <Pressable style={{ alignItems: 'center' }}
                        onPress={handleShowIconList}>
                        <MaterialCommunityIcons name="plus-circle" size={36} color="black" />
                    </Pressable>
                }


            </View>


        </View>
    )
}

export default IconPicker

const styles = StyleSheet.create({

    iconPickerContainer: {
        overflow: 'hidden',
        width: 250,
    },

    iconContainer: {
        margin: 20,
        width: 250,
        height: 220,
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 20,
        overflow: 'hidden',
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