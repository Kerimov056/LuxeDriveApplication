import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Page/Home/Home.jsx';
// import About from './page/Home/About.jsx';

const Tab = createBottomTabNavigator();

const mainBackColor = "#262425";
const commonHeaderStyle = {
    height: 0,
    backgroundColor: mainBackColor,
    borderBottomWidth: 0,
};


const BottomTabNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name='Home' component={Home} options={{
                headerShown: false,
                headerShadowVisible: false,
                headerStyle: commonHeaderStyle,
                headerTitleStyle: {
                    color: 'white',
                },
            }} />
            {/* <Tab.Screen name='About' component={About} options={{
                headerShown: false,
                headerShadowVisible: false,
                headerStyle: commonHeaderStyle,
                headerTitleStyle: {
                    color: 'white',
                },
            }} /> */}
        </Tab.Navigator>
    )
}

export default BottomTabNavigator