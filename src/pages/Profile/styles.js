import styled from 'styled-components'

export const Container = styled.View`
    display: flex;
`

export const NameContainer = styled.View`
    width: 60%;
`

export const Name = styled.Text`
    color: #333;
    font-weight: bold;
`

export const Header = styled.View`
    padding: 15px;
    flex-direction: row-reverse;
    align-items: center;
`

export const AvatarContainer = styled.View`
    width: 40%;
    justify-content: center;
    align-items: center;
`

export const Avatar = styled.Image`
    width: 100px;
    height: 100px;
    border-radius: 50px;
`

export const Loading = styled.ActivityIndicator.attrs({
    size: 'small',
    color: '#999'
})`
    margin: 30px 0;

`

export const GridImage = styled.Image`
    width: ${Math.floor(100 / 3)+'%'};
    aspect-ratio: ${props => props.ratio};
    flex-wrap: wrap;
    margin: 0.666666666666672px;
`

export const Grid = styled.View`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    width: 100%;
`
export const Info = styled.View`
    width: 100%;
    height: 10%;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 2% 0;
`

export const InfoHeader = styled.Text`
    font-size: 16px;
    font-weight: bold;
`

export const InfoText = styled.Text`
    font-size: 12px;
`

export const InfoBlock = styled.View`
    width: 33%;
    justify-content: center;
    align-items: center;
`