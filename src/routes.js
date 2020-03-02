import React from 'react'
import { Image } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'


const Stack = createStackNavigator()

import logo from './assets/instagram.png'

import Feed from './pages/Feed/'
import Profile from './pages/Profile'

const Routes = () => (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{
            headerStyle: {
                backgroundColor: "#f5f5f5"
            }}
        }>
            <Stack.Screen 
                name="Feed" 
                component={Feed} 
                options={{ 
                    headerTitle: props => <Image source={logo} />,
                }}
            />
            <Stack.Screen name="Profile" component={Profile} />
        </Stack.Navigator>
    </NavigationContainer>
)

export default Routes