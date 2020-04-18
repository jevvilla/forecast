import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Home, Details } from '../screens';
import * as routes from '../navigation/routes';

const RootStack = createStackNavigator();

const RootStackNav = () => (
  <RootStack.Navigator>
    <RootStack.Screen name={routes.HOME} component={Home} />
    <RootStack.Screen name={routes.DETAILS} component={Details} />
  </RootStack.Navigator>
);

export default () => {
  return (
    <NavigationContainer>
      <RootStackNav />
    </NavigationContainer>
  );
};
