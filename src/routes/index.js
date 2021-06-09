import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import Search from '../screens/search/index'
import Display from '../screens/display/index'
const Stack = createStackNavigator()

export const Navigations = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Search" component={Search} />
                <Stack.Screen name="Display" component={Display} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}