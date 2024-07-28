import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React, { useState } from 'react'
import { colors } from '../global/colors'
import { MaterialIcons } from '@expo/vector-icons';

import * as ImagePicker from 'expo-image-picker'
import { useDispatch, useSelector } from 'react-redux';
import { setProfileImage } from '../features/user/userSlice';
import { usePostProfileImageMutation } from '../services/shopServices';

const ImageSelector = ({ navigation }) => {
  const [image, setImage] = useState(null)
  const [triggerPostImage, result] = usePostProfileImageMutation()
  const dispatch = useDispatch()
  const {localId} = useSelector((state)=> state.authReducer.value)

  console.log(localId);

  const verifyCameraPermission = async () => {
    console.log('request camera');
    const { status } = await ImagePicker.requestCameraPermissionsAsync()
    if (!status) {
      return false
    }
    return true
  }

  const takePhoto = async () => {
    console.log('picki');
    const isCameraOk = await verifyCameraPermission()
    if (isCameraOk) {
      let result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [1, 1],
        base64: true,
        quality: 0.2,
      });
      if (!result.canceled) {
        setImage(`data:image/jpeg;base64,${result.assets[0].base64}`);
      }
    }

  }

  const pickImage = async () => {
    console.log('picki');
    const isCameraOk = await verifyCameraPermission()
    if (isCameraOk) {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [1, 1],
        base64: true,
        quality: 0.2,
      });
      if (!result.canceled) {
        setImage(`data:image/jpeg;base64,${result.assets[0].base64}`);
      }
    }
  }

  const confirmImage = () => {
    dispatch(setProfileImage(image))
    triggerPostImage({image, localId})
    navigation.goBack()
  }


  return (
    <View style={styles.container}>

      {image ?
        <>
          <Image
            style={styles.img}
            resizeMode='contain'
            source={{ uri: image }}
          />
          <Pressable
            onPress={takePhoto}
            style={({ pressed }) => [styles.btn, { opacity: pressed ? 0.6 : 1 }]}
          >
            <MaterialIcons name="add-a-photo" size={24} color="black" />
            <Text style={{ fontSize: '16' }}>Sacar otra foto</Text>
          </Pressable>

          <Pressable
            onPress={pickImage}
            style={({ pressed }) => [styles.btn, { opacity: pressed ? 0.6 : 1 }]}
          >
            <MaterialIcons name="photo-library" size={24} color="black" />
            <Text style={{ fontSize: '16' }}>Galeria</Text>
          </Pressable>

          <Pressable
            onPress={confirmImage}
            style={({ pressed }) => [styles.btn, { opacity: pressed ? 0.6 : 1 }]}
          >
            <MaterialIcons name="check" size={24} color="black" />
            <Text style={{ fontSize: '16' }}>Usar Foto</Text>
          </Pressable>
        </> :
        <>
          <View>
            <Text>No hay foto para mostrar...</Text>

          </View>

          <Pressable
            onPress={() => takePhoto()}
            style={({ pressed }) => [styles.btn, { opacity: pressed ? 0.6 : 1 }]}
          >
            <MaterialIcons name="add-a-photo" size={24} color="black" />
            <Text style={{ fontSize: '16' }}>Abrir cámara</Text>
          </Pressable>
          <Pressable
            onPress={() => pickImage()}
            style={({ pressed }) => [styles.btn, { opacity: pressed ? 0.6 : 1 }]}
          >
            <MaterialIcons name="photo-library" size={24} color="black" />
            <Text style={{ fontSize: '16' }}>Galeria</Text>
          </Pressable>

          <Pressable onPress={() => navigation.goBack()}>
            <Text>Volver...</Text>
          </Pressable>
        </>

      }



    </View>
  )
}

export default ImageSelector

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.BGColor,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 50,

  },
  img: {
    margin: 20,
    width: 200,
    height: 200,
    borderRadius: 200,
  },

  btn: {
    marginTop: 10,
    backgroundColor: colors.BGbutton,
    width: "60%",
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    borderRadius: 5,
    flexDirection: 'row',
    gap: 20,
  }
})