import styled from 'styled-components'

export const Post = styled.View`
    margin-top: 10px;
`

export const Header = styled.TouchableOpacity`
    padding: 15px;
    flex-direction: row;
    align-items: center;
`

export const Avatar = styled.Image`
    width: 32px;
    height: 32px;
    border-radius: 16px;
    margin-right: 10px;
`

export const Name = styled.Text`
    color: #333;
    font-weight: bold;
    padding: 15px;
    line-height: 18px;
`

export const DescriptionText = styled.Text`
    color: #333;
    padding: 15px 0;
    line-height: 18px;
`

export const Description = styled.View`
    flex-direction: row;
    padding: 0 2%;
`

export const HeartBox = styled.TouchableOpacity`
    justify-content: center;
    align-self: center;
`

export const Heart = styled.Image`
    width: 20px;
    height: 20px;
`

export const ImageOverlay = styled.View`
    position: absolute; 
    align-items: center;
    justify-content: center;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
`