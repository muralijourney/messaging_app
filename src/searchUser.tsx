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
  TouchableOpacity
} from 'react-native';
import UserCard from './component/molecules/userListCardDetails/userCard';
import Colour from './utilis/color';
import { Divider } from 'react-native-elements';
import { useDispatch, useSelector } from "react-redux";
import Icon from 'react-native-vector-icons/MaterialIcons';



const shuffleArray = (array: any) => {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}



const cardRow = (item: any, props: any,) => {
  return (
    <Pressable onPress={() => props.navigation.replace("ChatScreen", { selectedUser: item })}>
      <UserCard name={item.name} count={item.count} message={item.message} time={item.time} />
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
        data={data}///current  2 user
        renderItem={({ item }) => cardRow(item, props)}
        keyExtractor={(item: any) => item.id}
      />

    </SafeAreaView>
  );
};



export default SearchScreen;
