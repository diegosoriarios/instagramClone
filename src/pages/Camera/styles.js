import styled from 'styled-components';

export const ImageContainer = styled.View`
    flex: 1;
    align-content: center;
`

export const SaveButton = styled.TouchableOpacity`
    position: absolute;
    top: 25px;
    right: 25px;
`

export const SaveButtonText = styled.Text`
    font-weight: bold;
    color: #fff;   
`

/*export const SaveButton = styled.TouchableOpacity`
    position: absolute;
    bottom: 50px;
    left: 0;
    right: 0;
    justify-content: center;
    align-items: center;
    
`

export const SaveButtonText = styled.Text`
    font-weight: bold;
    color: #fff;
    border: 2px solid white;
    width: 100px;
    height: 100px;
    border-radius: 50px;
`*/

export const CancelButton = styled.TouchableOpacity`
    position: absolute;
    top: 25px;
    left: 25px;
`

export const TakePicture = styled.TouchableOpacity`
    width: 50%;
    justify-content: flex-start;
`

export const TakePictureText = styled.Text`
    font-weight: bold;
    color: #fff;
    border: 2px solid white;
    width: 100px;
    height: 100px;
    border-radius: 50px;
    margin-left: -50px;
`

export const ChoosePhoto = styled.TouchableOpacity`
    width: 50%;
    justify-content: center;
    align-items: center;
`

export const ActionsBox = styled.View`
    flex: 0;
    flex-direction: row;
    align-items: center;
    position: absolute;
    bottom: 0;
`