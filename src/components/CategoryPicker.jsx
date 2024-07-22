import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { myBillCategories } from '../data/categories'
import { MaterialCommunityIcons } from '@expo/vector-icons';


const CategoryPicker = ({ categorySelected, setCategorySelected }) => {

    const handleSelectCategory = (cat) => {
        setCategorySelected(cat)
    }

    return (



        <View style={styles.container}>
            <Text style={styles.title}>Seleccionar categoría</Text>
            <View style={styles.categoriesContainer}>
                {myBillCategories.map(category => {

                    return (
                        <Pressable key={category.id}
                            style={[styles.categoryContainer,
                            category.id != categorySelected.id ?
                                { backgroundColor: 'white' }
                                : { backgroundColor: category.categoryColor }]
                            }
                            onPress={() => handleSelectCategory(category)}>
                            <View style={[styles.iconContainer, { backgroundColor: category.categoryColor }]}>
                                <MaterialCommunityIcons name={category.categoryIcon} size={48} color="white" />

                            </View>
                            <Text
                                style={category.id != categorySelected.id ? { color: 'black' } : { color: 'white', fontWeight: 'bold' }}
                            >{category.categoryName}</Text>
                        </Pressable>
                    )
                })}
                <Pressable style={styles.addCategoryBtn}>
                    <MaterialCommunityIcons name='plus-circle' size={32} color={'black'} />
                    <Text>Crear</Text>
                </Pressable>
            </View>



        </View>
    )
}

export default CategoryPicker

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        padding: 10,

    },
    title: {
        fontWeight: 'bold',
        fontSize: 16,
        margin: 20,
    },
    categoriesContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 20,
        width: 250,
        height: 250,
    },
    categoryContainer: {
        padding: 5,
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 10,
    },
    iconContainer: {
        padding: 5,
        borderRadius: 60,
        alignItems: 'center',
        justifyContent: 'center',
    },
    addCategoryBtn:{
        alignItems: 'center',
        justifyContent: 'center',
    }
})