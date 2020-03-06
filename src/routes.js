import React from 'react'
import { Image, TouchableOpacity, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'


const Stack = createStackNavigator()

import logo from './assets/instagram.png'

import Feed from './pages/Feed/'
import Profile from './pages/Profile'
import Camera from './pages/Camera/index';

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
                options={({ navigation }) => ({
                    headerTitle: props => <Image source={logo} />,
                    headerLeft: () => (
                        <TouchableOpacity
                          onPress={() => navigation.navigate('Camera')}
                        >
                            <Text>Button</Text>
                        </TouchableOpacity>
                    ),
                })}
            />
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="Camera" component={Camera} />
        </Stack.Navigator>
    </NavigationContainer>
)

export default Routes