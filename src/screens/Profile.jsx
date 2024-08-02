import { StyleSheet, Text, View, Image, Pressable, Platform } from 'react-native'
import { colors } from '../global/colors'
import { useDispatch, useSelector } from 'react-redux'
import { useGetProfileImageQuery } from '../services/shopServices'
import { AntDesign } from '@expo/vector-icons';
import { clearUser } from '../features/user/userSlice'
import { truncateSession } from '../persistence';
import { useState } from 'react';

const Profile = ({ navigation }) => {

  const dispatch = useDispatch()
  const [message, setMessage] = useState('')

  const { user, imageProfile, localId } = useSelector((state) => state.auth.value)
  const { data: imageFromBase } = useGetProfileImageQuery(localId)






  const handleExit = async () => {
    try {
      if (Platform !== 'web') {
        const response = await truncateSession()
      }
      dispatch(clearUser())
    } catch (error) {
      setMessage(error)
    }
  }


  return (
    <View style={styles.container}>
      <Text>{message}</Text>
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
            style={({ pressed }) => [{ backgroundColor: colors.BGbutton }, { opacity: pressed ? 0.6 : 1 }]}
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