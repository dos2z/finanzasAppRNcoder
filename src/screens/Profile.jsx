import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React, { useState } from 'react'
import { colors } from '../global/colors'
import { useDispatch, useSelector } from 'react-redux'
import { useGetProfileImageQuery } from '../services/shopServices'
import { AntDesign } from '@expo/vector-icons';
import { clearUser } from '../features/user/userSlice'

const Profile = ({ navigation }) => {

  const dispatch = useDispatch()
  const [image, setImage] = useState(null)
  const { user } = useSelector((state) => state.authReducer.value)
  const { imageProfile, localId } = useSelector((state) => state.authReducer.value)
  const { data: imageFromBase } = useGetProfileImageQuery(localId)

  const handleExit = () => {
    dispatch(clearUser())
  }

  return (
    <View style={styles.container}>
      {<Text style={styles.title}>{user}</Text>}
      {imageFromBase || imageProfile ? (
        <>
          <Image
            source={{ uri: imageFromBase?.image || imageProfile }}
            style={styles.img}
            resizeMode="cover"
          />
          <Pressable
            onPress={() => navigation.navigate("imagePicker")}
            style={({ pressed }) => [styles.btn, { opacity: pressed ? 0.6 : 1 }]}
          >
            <Text style={{ fontSize: '16' }}>Modificar foto de perfil</Text>
          </Pressable>
        </>

      )
        : <>
          <View style={styles.img}>
            <AntDesign name="user" size={100} color="black" />
          </View>

          <Pressable
            onPress={() => navigation.navigate("imagePicker")}
            style={({ pressed }) => [styles.btn, { opacity: pressed ? 0.6 : 1 }]}
          >
            <Text style={{ fontSize: '16' }}>Tomar foto de perfil</Text>
          </Pressable>
        </>
      }


      <Pressable onPress={handleExit}>
        <Text>Salir</Text>
      </Pressable>

    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
    backgroundColor: colors.BGColor
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.mainColor,
  },
  img: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 200,
    width: 200,
    borderRadius: 100,
    backgroundColor: 'lightgrey',
  },
  btn: {
    marginTop: 10,
    backgroundColor: colors.BGbutton,
    width: "60%",
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    borderRadius: 5
  }
})