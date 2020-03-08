import React, { useState } from 'react'
import { View, TouchableOpacity, Text, StyleSheet, Button } from 'react-native'
import { RNCamera } from 'react-native-camera';
import ImagePicker from 'react-native-image-picker'


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

    return (
        <>
            <RNCamera
                style = {styles.preview}
                type={RNCamera.Constants.Type.back}
                autoFocus={RNCamera.Constants.AutoFocus.on}
                flashMode={RNCamera.Constants.FlashMode.off}
                androidCameraPermissionOptions={{ title: 'Permission to use camera', message: 'We need your permission to use your camera phone'}}
            />
            <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
            <Button title="Choose Photo" onPress={() => handleChoosePhoto} />
                <TouchableOpacity onPress={() => takePicture} style={styles.capture}>
                    <Text style={{ fontSize: 14 }}> SNAP </Text>
                </TouchableOpacity>
            </View>
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