import { Pressable, StyleSheet, Text, View } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';




const CategoryPicker = ({ categorySelected, setCategorySelected, navigation, transactionType, myCategories }) => {
   
   

  
   

    const handleSelectCategory = (cat) => {
        setCategorySelected(cat)
    }

    return (



        <View style={styles.container}>
            <Text style={styles.title}>Seleccionar categoría</Text>
            <View style={styles.categoriesContainer}>
                {myCategories.map(category => {

                    return (
                        <Pressable key={category.id}
                            style={[styles.categoryContainer,
                            category.id != categorySelected.id ?
                                { backgroundColor: 'white' }
                                : { backgroundColor: category.color }]
                            }
                            onPress={() => handleSelectCategory(category)}>
                            <View style={[styles.iconContainer, { backgroundColor: category.color }]}>
                                <MaterialCommunityIcons name={category.icon} size={48} color="white" />

                            </View>
                            <Text
                                style={category.id != categorySelected.id ? { color: 'black' } : { color: 'white', fontWeight: 'bold' }}
                            >{category.name}</Text>
                        </Pressable>
                    )
                })}
                <Pressable style={styles.addCategoryBtn}
                onPress={()=>navigation.navigate('addCategory', {transactionType})}>
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
        alignItems: 'flex-start',
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