/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { useEffect } from 'react';
import {
  SafeAreaView,
  FlatList,
  View,
  Pressable,
  StyleSheet
} from 'react-native';
import UserListCardDetails from './component/molecules/userListCardDetails/userListCardDetails';
import Colour from './utilis/color';
import { Divider } from 'react-native-elements';
import { useDispatch, useSelector } from "react-redux";


const cardRow = (item: any, props: any,) => {
  return (
    <Pressable onPress={() => props.navigation.navigate("ChatScreen", { selectedUser: item })}>
      <UserListCardDetails name={item.name} count={item.count} message={item.message} />
      <Divider />
    </Pressable >
  );
}

const HomeScreen = (props: any) => {
  const chat = useSelector((state: any) => state.chat)
  props.navigation.setOptions({ title: chat.currentUser.name });

  return (
    <SafeAreaView style={{ backgroundColor: Colour.WHITE }}>
      <FlatList
        data={chat.allUsers.filter((user: any) => user.id !== chat.currentUser.id)}///current  2 user
        renderItem={({ item }) => cardRow(item, props)}
        keyExtractor={(item: any) => item.id}
      />
    </SafeAreaView>
  );
};



export default HomeScreen;
