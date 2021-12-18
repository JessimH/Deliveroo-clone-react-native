
import React, { Component } from 'react';
import Home from './Views/Home';
import Emporter from './Views/Emporter';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ header: () => null }}
        initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            animationEnabled: false,
          }}
        />
        <Stack.Screen
          name="Emporter"
          component={Emporter}
          options={{
            animationEnabled: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>

  );
}
