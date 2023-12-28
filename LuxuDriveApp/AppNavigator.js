// AppNavigator.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Slider from './Page/Slider/Slider';
import Register from './Page/Register/Register';

const Stack = createStackNavigator();
const mainBackColor = "#262425";


const AppNavigator = () => {
    return (
        <Stack.Navigator initialRouteName='Slider' >
            <Stack.Screen name='Slider' component={Slider}
                options={{
                    title: null,
                    headerStyle: {
                        height: 0,
                        backgroundColor: mainBackColor,
                        borderBottomWidth: 0,
                    },
                    headerTitleStyle: {
                        color: 'white'
                    },
                    headerShadowVisible: false,
                    headerLeft: null
                }} />
            <Stack.Screen name='Register' component={Register}
                options={{
                    title: null,
                    headerStyle: {
                        height: 0,
                        backgroundColor: mainBackColor,
                        borderBottomWidth: 0,
                    },
                    headerTitleStyle: {
                        color: 'white'
                    },
                    headerShadowVisible: false,
                    headerLeft: null
                }} />
        </Stack.Navigator>
    );
};


export default AppNavigator;