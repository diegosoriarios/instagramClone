import styled from 'styled-components'

export const Container = styled.View`
    display: flex;
`

export const Name = styled.Text`
    color: #333;
    font-weight: bold;
    margin-right: 30%;
`

export const Header = styled.View`
    padding: 15px;
    flex-direction: row-reverse;
    align-items: center;
`

export const Avatar = styled.Image`
    width: 100px;
    height: 100px;
    border-radius: 50px;
    margin-right: 20%;
`

export const Loading = styled.ActivityIndicator.attrs({
    size: 'small',
    color: '#999'
})`
    margin: 30px 0;

`