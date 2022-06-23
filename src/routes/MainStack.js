import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const Stacks = createStackNavigator();
export default () => {
  return (
    <Stacks.Navigator>
      <Stacks.Screen name="sigin" component={sigInScreen} />
      <Stacks.Screen name="sigup" component={sigUpScreen} />
      <Stacks.Screen name="recupere" component={recupereScreen} />
      <Stacks.Screen name="main" component={mainScreen} />
    </Stacks.Navigator>
  );
};
