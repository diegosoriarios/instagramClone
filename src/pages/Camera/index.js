import React, { useState } from 'react'
import { View, TouchableOpacity, Text, StyleSheet, Button, Image, Dimensions } from 'react-native'
import { RNCamera } from 'react-native-camera';
import ImagePicker from 'react-native-image-picker'
import { 
  ImageContainer, 
  SaveButton, 
  CancelButton, 
  SaveButtonText, 
  TakePicture, 
  TakePictureText,
  ChoosePhoto,
  ActionsBox
} from './styles'


function Camera() {
  const [photo, setPhoto] = useState(null)

    async function takePicture() {
        if (this.camera) {
          const options = { quality: 0.5, base64: true };
          const data = await this.camera.takePictureAsync(options)
          alert(data.uri);
        }
    }

    function handleChoosePhoto() {
      const options = {
        noData: true,
      }
      ImagePicker.launchImageLibrary(options, response => {
        if (response.uri) {
          setPhoto(response)
        }
      })
    }

    if (photo) {
      return (
        <ImageContainer>
          <Image source={photo} style={{ width: '100%', height: '100%' }}/>
          <CancelButton onPress={() => setPhoto(null)}>
            <Text>X</Text>
          </CancelButton>
          <SaveButton onPress={() => setPhoto(null)}>
            <SaveButtonText>+</SaveButtonText>
          </SaveButton>
        </ImageContainer>
      )
    }

    return (
        <>
            <RNCamera
                style = {styles.preview}
                type={RNCamera.Constants.Type.back}
                autoFocus={RNCamera.Constants.AutoFocus.on}
                flashMode={RNCamera.Constants.FlashMode.off}
                androidCameraPermissionOptions={{ title: 'Permission to use camera', message: 'We need your permission to use your camera phone'}}
            />
            <ActionsBox>
                <ChoosePhoto title="Choose Photo" onPress={() => handleChoosePhoto()} middle={Math.round(Dimensions.get('window').width)}>
                  <Image source={require('../../assets/icons/add_photo.png')} style={{ tintColor: "#fff", width: 25, height: 25 }}/>
                </ChoosePhoto>
                <TakePicture onPress={() => takePicture} >
                    <TakePictureText style={{ fontSize: 14 }}> </TakePictureText>
                </TakePicture>
            </ActionsBox>
        </>
    )
}

export default Camera

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: 'black',
    },
    preview: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    capture: {
      flex: 0,
      backgroundColor: '#fff',
      borderRadius: 5,
      padding: 15,
      paddingHorizontal: 20,
      alignSelf: 'center',
      margin: 20,
    },
  });