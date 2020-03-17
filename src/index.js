import React, { useEffect } from 'react'
import { StatusBar } from 'react-native'
import SplashScreen from 'react-native-splash-screen'

import Routes from './routes'

export default function App() {

    useEffect(() => {
        SplashScreen.hide()
    }, [])

    return (
        <>
            <StatusBar barStyle="dark-content" backgroundColor="#f5f5f5" />
            <Routes />
        </>
    )
}
