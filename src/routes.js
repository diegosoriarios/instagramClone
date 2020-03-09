import React from 'react'
import { Image, TouchableOpacity, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'


const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

import logo from './assets/instagram.png'

import Feed from './pages/Feed/'
import Profile from './pages/Profile'
import Camera from './pages/Camera';

let focus = 'HomePage'

const HomePage = () => (
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
                        <Image source={require('./assets/icons/camera.png')} style={{ width: 25, height: 25, marginLeft: 15}} />
                    </TouchableOpacity>
                ),
            })}
        />
        <Stack.Screen 
            name="Profile" 
            component={Profile} 
            options={({ navigation }) => ({
                headerTitle: props => <Text>Profile</Text>,
                headerLeft: () => (focus != 'Me' &&
                    <TouchableOpacity
                        onPress={() => {focus = 'HomePage'; navigation.navigate('Feed')}}
                    >
                        <Image source={require('./assets/icons/back.png')} style={{ width: 25, height: 25, marginLeft: 15}} />
                    </TouchableOpacity>
                ),
            })}
        />
        <Stack.Screen name="Camera" component={Camera} />
    </Stack.Navigator>
)

function Routes() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route, navigation }) => ({
                    title: "",
                    tabBarIcon: () => {
                        let iconName;
            
                        if (route.name === 'HomePage') {
                            iconName = focus == 'HomePage'
                            ? require("./assets/icons/home.png")
                            : require("./assets/icons/home_outlined.png")
                        } else if (route.name === 'Me') {
                            iconName = focus == 'Me'
                            ? require("./assets/icons/profile.png")
                            : require("./assets/icons/profile_outlined.png")
                        }
            
                        // You can return any component that you like here!
                        return ( 
                            <TouchableOpacity onPress={() => {
                                if (route.name == 'HomePage') {
                                    focus = 'HomePage'
                                    navigation.navigate('Feed')
                                } else {
                                    focus = 'Me'
                                    navigation.navigate('Profile', { id: 6 })
                                }
                            }}>
                                <Image source={iconName} style={{ tintColor: 'black' }} width={25} height={25} />
                            </TouchableOpacity>
                        )
                    },
                })}
                
            >
                <Tab.Screen name="HomePage" component={HomePage} />
                <Tab.Screen name="Me" component={Profile} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default Routes