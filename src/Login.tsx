/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  FlatList,
  View,
  Pressable,
  Image,
} from 'react-native';
import Colour from './utilis/color';
import { Text } from 'react-native-elements';
import { useDispatch, useSelector } from "react-redux";
import { loggedInUser } from './redux/slices/chatslice';
import { UserListInterface } from './utilis/type'


const UserRow = (item: UserListInterface, props: any, OnLogin: any, index: number) => {
  return (
    <Pressable testID={'row' + index} onPress={() => OnLogin(item)}>
      <View style={{ padding: 10, flexDirection: 'column' }}>
        <Image
          style={{
            width: 100,
            height: 100,
            borderRadius: 100 / 2,
            overflow: "hidden",
            borderWidth: 3,
            borderColor: "red"

          }}
          source={{
            uri: item.image,
          }}
        />
        <Text style={{ fontSize: 15, alignSelf: 'center', padding: 10 }}>{item.name}</Text>
      </View>
    </Pressable >
  );
}

const LoginScreen = (props: any) => {

  const dispatch = useDispatch();
  const chat = useSelector((state: any) => state.chat)
  const loginUser = (user: any) => {
    dispatch(loggedInUser(user))
    props.navigation.replace("HomeScreen")
  }
  return (
    <SafeAreaView style={{ backgroundColor: Colour.WHITE, flex: 1 }} >
      <FlatList
        testID={'userList'}
        style={{ alignSelf: 'center' }}
        numColumns={3}
        contentContainerStyle={{ alignSelf: 'center' }}
        data={chat.allUsers}///current  2 user
        renderItem={({ item, index }) => UserRow(item, props, loginUser, index)}
        keyExtractor={(item: any) => item.id}
      />
    </SafeAreaView >
  );
};



export default LoginScreen;
