// AppNavigator.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Slider from './Page/Slider/Slider';
import Home from './Page/Home/Home';
import Register from './Page/Auth/Register/Register';
import Login from './Page/Auth/Login/Login';
import Search from './Page/Search/Search';
// import Login from './Page/Login/Login';

const Stack = createStackNavigator();
const mainBackColor = "#262425";


const AppNavigator = () => {
    return (
        <Stack.Navigator initialRouteName='Search' >
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
            <Stack.Screen name='Home' component={Home}
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
            <Stack.Screen name='Search' component={Search}
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
            <Stack.Screen name='Login' component={Login}
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