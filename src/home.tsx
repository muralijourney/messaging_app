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
  StyleSheet
} from 'react-native';
import UserListCardDetails from './component/molecules/userListCardDetails/userListCardDetails';
import Colour from './utilis/color';
import { Divider } from 'react-native-elements';

var userListDetails = [
  {
    name: "MuraliTharan",
    message: 'Hi Murali',
    count: 1,
    id: 0
  },
  {
    name: "Mukesh",
    message: 'Hi Mukesh',
    count: 3,
    id: 1
  },
  {
    name: "Chris",
    message: 'Hi Chirs',
    count: 3,
    id: 2
  }
]


const cardRow = (item: any, props: any) => {
  return (
    <Pressable onPress={() => props.navigation.navigate("ChatScreen", { selectedUser: item })}>
      <UserListCardDetails name={item.name} count={item.count} message={item.message} />
      <Divider />
    </Pressable >
  );
}

const HomeScreen = (props: any) => {
  return (
    <SafeAreaView style={{ backgroundColor: Colour.WHITE }}>
      <FlatList
        data={userListDetails}///current  2 user
        renderItem={({ item }) => cardRow(item, props)}
        keyExtractor={(item: any) => item.id}
      />
    </SafeAreaView>
  );
};



export default HomeScreen;
