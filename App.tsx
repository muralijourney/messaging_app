/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/home';
import LoginScreen from './src/Login';
import ChatScreen from './src/chat';
import SearchScreen from './src/searchUser';
import { Provider } from "react-redux"
import { Store } from "./src/redux/store"
import { Text } from 'react-native'

type RootStackParamList = {
  HomeScreen: undefined;
  ChatScreen: undefined;
  Login: undefined;
  SearchScreen: undefined;
};

const RootStack = createStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <RootStack.Navigator initialRouteName="Login" >
          <RootStack.Screen name="Login" component={LoginScreen} />
          <RootStack.Screen name="HomeScreen" component={HomeScreen} />
          <RootStack.Screen name="SearchScreen" component={SearchScreen} />
          <RootStack.Screen options={{ headerLeft: () => { return null; }, headerShown: false }} name="ChatScreen" component={ChatScreen} />
        </RootStack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
