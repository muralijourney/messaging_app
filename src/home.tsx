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
import UserListCardDetails from './component/molecules/userListCardDetails/userListCardDetails';
import Colour from './utilis/color';
import { Divider } from 'react-native-elements';
import { useDispatch, useSelector } from "react-redux";
import Icon from 'react-native-vector-icons/MaterialIcons';


const cardRow = (item: any, props: any,) => {
  return (
    <Pressable onPress={() => props.navigation.navigate("ChatScreen", { selectedUser: item })}>
      <UserListCardDetails name={item.name} count={item.count} message={item.message} time={item.time} image={item.image} />
      <Divider />
    </Pressable >
  );
}


const getChatUsers = (message: any, userId: any) => {
  let userIds: any = []
  message.map((msg: any) => {
    // console.log( msg.array)
    if (msg.key.includes(userId)) {
      userIds.push(Number(msg.key.split(",")[1]))
      userIds.push(Number(msg.key.split(",")[0]))

    }
  })
  //console.log(lastMessage)
  return userIds
}


const HomeScreen = (props: any) => {
  const chat = useSelector((state: any) => state.chat)
  const usersId = getChatUsers(chat.message, chat.currentUser.id)

  useEffect(() => {
    console.log(usersId)
    chat.allUsers.filter((user: any) => user.id !== chat.currentUser.id && usersId.includes(user.id))
    props.navigation.setOptions({ title: "Messages" });

  }, []);

  return (
    <SafeAreaView style={{ backgroundColor: Colour.WHITE }}>
      <FlatList
        style={{ height: '100%' }}
        data={chat.allUsers.filter((user: any) => user.id !== chat.currentUser.id && usersId.includes(user.id))}///current  2 user
        renderItem={({ item }) => cardRow(item, props)}
        keyExtractor={(item: any) => item.id}
      />
      <TouchableOpacity
        onPress={() => props.navigation.navigate("SearchScreen")}
        activeOpacity={0.5}
        style={{
          width: 60,
          height: 60,
          borderRadius: 30,
          backgroundColor: '#ee6e73',
          position: 'absolute',
          justifyContent: 'center',
          alignItems: 'center',
          bottom: 30,
          right: 20,
        }} >
        <Icon name="message" size={30} color="#fff" />
      </TouchableOpacity>
    </SafeAreaView>
  );
};



export default HomeScreen;
