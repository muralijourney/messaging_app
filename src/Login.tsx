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
import UserListCardDetails from './component/molecules/userListCardDetails/userListCardDetails';
import Colour from './utilis/color';
import { Divider, Text } from 'react-native-elements';

var userListDetails = [
  {
    name: "Murali",
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


const UserRow = (item: any, props: any) => {
  return (
    <Pressable onPress={() => props.navigation.replace("HomeScreen", { selectedUser: item })}>
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
            uri: 'https://source.unsplash.com/random',
          }}
        />
        <Text style={{ fontSize: 15, alignSelf: 'center', padding: 10 }}>{item.name}</Text>
      </View>
    </Pressable >
  );
}

const LoginScreen = (props: any) => {
  return (
    <SafeAreaView style={{ backgroundColor: Colour.WHITE, flex: 1 }} >
      <FlatList
        style={{ alignSelf: 'center' }}
        contentContainerStyle={{ alignSelf: 'center' }}
        horizontal={true}
        data={userListDetails}///current  2 user
        renderItem={({ item }) => UserRow(item, props)}
        keyExtractor={(item: any) => item.id}
      />
    </SafeAreaView >
  );
};



export default LoginScreen;
