import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import sigInScreen from '../screens/stack/sigInScreen';
import sigUpScreen from '../screens/stack/sigUpScreen';
import recupereScreen from '../screens/stack/recupereScreen';
import drawerScreen from './drawerScreen';

const Stacks = createStackNavigator();

export default () => {
    return (
        <Stacks.Navigator
            initialRouteName="sigin"
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stacks.Screen name="sigin" component={sigInScreen} />
            <Stacks.Screen name="sigup" component={sigUpScreen} />
            <Stacks.Screen name="recupere" component={recupereScreen} />
            <Stacks.Screen name="main" component={drawerScreen} />
        </Stacks.Navigator>
    );
};
