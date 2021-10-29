import React, { useState, useCallback, useEffect } from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { GiftedChat } from '../lib/react-native-gifted-chat';
import { Store } from '../src/redux/store'
import { useDispatch, useSelector } from "react-redux";
import { addMessage, selectedName, setLastMessage } from './redux/slices/chatslice'
import { Text } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialIcons';

const ChatScreen = (props: any) => {
  const dispatch = useDispatch();
  const [message, setMessage] = useState([])
  const selectedUser = props.route.params.selectedUser;
  const chat = useSelector((state: any) => state.chat)

  console.log("chat >>>>>>>>>>>>>>>>>>>" + JSON.stringify(chat));


  useEffect(() => {
    const state = Store.getState();
    const { message } = state.chat;
    var object: any = [];
    message.map(function (val, index) {
      if (message[index].payload.key == chat.currentUser.id + "," + selectedUser.id || message[index].payload.key == selectedUser.id + "," + chat.currentUser.id) {
        object.push(message[index].payload.array);
      }
    });
    setMessage(object.reverse());
  }, [])

  const handleSend = useCallback((messages = []) => {
    var messageObject = { "key": chat.currentUser.id + "," + selectedUser.id, "array": messages[0] };  /// later we will add login 
    var lastMessageObject = { "id": selectedUser.id, "message": messages[0] };/// store user last message 
    dispatch(addMessage(messageObject));
    dispatch(setLastMessage(lastMessageObject));
    setMessage(previousMessages => GiftedChat.append(previousMessages, messages))
  }, [message])

  const handleBackButtonClick = () => {
    props.navigation.goBack(null);
  }

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.header}>
        <View style={styles.container}>
          <TouchableOpacity onPress={handleBackButtonClick}>
            <Icon name="arrow-back" size={16} color="#000" />
          </TouchableOpacity>
          <Image
            style={styles.circleView}
            source={{
              uri: selectedUser.image,
            }} />
          <Text style={styles.textalign}>{selectedUser.name}</Text>
        </View>
      </View>
      <GiftedChat
        messages={message}
        isKeyboardInternallyHandled={false}
        keyboardShouldPersistTaps='never'
        inverted={true}
        renderUsernameOnMessage={true}
        onSend={newMessage => handleSend(newMessage)}
        user={{ _id: chat.currentUser.id, name: chat.currentUser.name }}
      />
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row'
  },
  circleView: {
    width: 40,
    height: 40,
    marginHorizontal: 5,
    borderRadius: 40 / 2,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "red",
    alignItems: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  header: {
    paddingHorizontal: 10,
    backgroundColor: '#f8f8f8',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    height: "11%",
    paddingTop: "15%",
    paddingBottom: "5%",
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  },
  textalign: {
    fontSize: 15,
    marginLeft: 5
  }
});


export default ChatScreen;
