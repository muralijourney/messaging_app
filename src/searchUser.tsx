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
  Pressable
} from 'react-native';
import UserCard from './component/molecules/userListCardDetails/userCard';
import Colour from './utilis/color';
import { Divider } from 'react-native-elements';
import { useSelector } from "react-redux";
import { UserListInterface } from './utilis/type'


const cardRow = (item: UserListInterface, props: any,) => {
  return (
    <Pressable onPress={() => props.navigation.replace("ChatScreen", { selectedUser: item })}>
      <UserCard name={item.name} count={item.count} message={item.lastMessage} time={item.time} image={item.image} />
      <Divider />
    </Pressable >
  );
}

const SearchScreen = (props: any) => {
  const chat = useSelector((state: any) => state.chat)
  useEffect(() => {
    props.navigation.setOptions({ title: "Search User" });
  }, []);
  const data = chat.allUsers.filter((user: any) => user.id !== chat.currentUser.id)
  return (
    <SafeAreaView style={{ backgroundColor: Colour.WHITE }}>
      <FlatList
        style={{ height: '100%' }}
        data={data}
        renderItem={({ item }) => cardRow(item, props)}
        keyExtractor={(item: any) => item.id}
      />

    </SafeAreaView>
  );
};



export default SearchScreen;
