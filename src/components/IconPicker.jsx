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

    return (
        <View>
            <View>
                <Text style={{
                    fontWeight: 'bold',
                    fontSize: 16
                }}>Símbolo</Text>
               

            </View>
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
                                            width: 7,
                                            height: 6,
                                        },
                                        shadowOpacity: 0.17,
                                        shadowRadius: 2.54,
                                        elevation: 7,
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
                        <Text>Más íconos</Text>
                    </Pressable>
                }


            </View>
            <Modal
                visible={modlaShow}>
                <View style={styles.modalContainer}>
                    <View style={styles.iconModalContainer}>
                        {iconColection.map(icon => {
                            return (
                                <Pressable key={icon.id} style={[styles.newAccountIcon, icon.id != iconId ? { backgroundColor: 'grey', }
                                    : {
                                        backgroundColor: colorChosed,
                                        shadowColor: "#000000",
                                        shadowOffset: {
                                            width: 7,
                                            height: 6,
                                        },
                                        shadowOpacity: 0.17,
                                        shadowRadius: 2.54,
                                        elevation: 7,
                                    }]} onPress={() => handleSelectIcon(icon.id, icon.name)}>
                                    <MaterialCommunityIcons name={icon.name} size={48} color="white" />
                                </Pressable>
                            )
                        })}

                    </View>


                    <Pressable>
                        <Text style={{fontSize: 18}} onPress={() => setModalShow(false)}>Salir</Text>
                    </Pressable>
                </View>
            </Modal>


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
    modalContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    iconModalContainer: {
        margin: 20,
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 20,
    }

})