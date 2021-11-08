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
  Text,
  Pressable,
  TouchableOpacity
} from 'react-native';
import UserListCardDetails from './component/molecules/userListCardDetails/userListCardDetails';
import Colour from './utilis/color';
import { Divider } from 'react-native-elements';
import {useSelector } from "react-redux";
import Icon from 'react-native-vector-icons/MaterialIcons';
import { UserListInterface } from './utilis/type'
import moment from 'moment';


const cardRow = (item: UserListInterface, props: any,lastMessages:any) => {
  let obj = lastMessages.find((Obj:any)=>Obj.user == item.id)
  let lastMessage,time ="";
  if(obj){
    lastMessage = obj.lastmessage.text;
    time=moment(obj.lastmessage.createdAt).format('hh:mm:ss A')
  }
  return (
    <Pressable onPress={() => props.navigation.navigate("ChatScreen", { selectedUser: item })}>
      <UserListCardDetails name={item.name} count={item.count} message={lastMessage} time={time} image={item.image} />
      <Divider />
    </Pressable >
  );
}


const getChatUsers = (message: [],userId: string,allUsers:[]) => {
  let userIds: any = []
  message.map((msg: any) => {
    if (msg.key.includes(userId)) {
      userIds.push(Number(msg.key.split("-")[1]))
      userIds.push(Number(msg.key.split("-")[0]))
      }
  })
  let user_msg : any =[]
  userIds.map((user:any)=>{
    let exists:any = message.filter((item:any) => (item.key.includes(user)&& item.key.includes(userId)));
    if(exists.length > 0 && user != userId){
      let msglength = exists[0].messages.length;
      let msg = exists[0].messages[msglength-1]
      user_msg.push({"user":user,"lastmessage":msg});
    }
  })
  return {userIds,user_msg}
}



const HomeScreen = (props: any) => {
  const chat = useSelector((state: any) => state.chat)
  let data = getChatUsers(chat.message, chat.currentUser.id,chat.allUsers)
  let usersId = data.userIds;
  let user_msg = data.user_msg;

  useEffect(() => {
   chat.allUsers.filter((user: any) => user.id !== chat.currentUser.id && usersId.includes(user.id))
   props.navigation.setOptions({ title: "Messages" });
  }, []);

  return (
    <SafeAreaView style={{ backgroundColor: Colour.WHITE }}>
      <FlatList
        style={{ height: '100%' }}
         ListEmptyComponent={() =>
          <View style={{ marginTop: 300 }}>
            <Text style={{ alignSelf: 'center', fontSize: 30 }}>No Records</Text>
          </View>}
        data={chat.allUsers.filter((user: any) => user.id !== chat.currentUser.id && usersId.includes(user.id))}///current  2 user
        renderItem={({ item }) => cardRow(item, props,user_msg)}
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
