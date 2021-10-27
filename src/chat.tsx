import React,{useState,useCallback,useEffect} from 'react';
import { View,Image,StyleSheet,TouchableOpacity,Dimensions} from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import {Store} from '../src/redux/store'
import { useDispatch, useSelector } from "react-redux";
import {addMessage,selectedName} from  './redux/slices/chatslice'
import { Text } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialIcons';

const ChatScreen = (props:any) => {
    const dispatch = useDispatch();
    const [message, setMessage] = useState([])

    useEffect(()=>{
        const state = Store.getState(); 
        const { message }= state.chat;
        setMessage(message)
    },[])

    const handleSend = useCallback((messages = []) => {
       dispatch(addMessage(messages));
       setMessage(previousMessages => GiftedChat.append(previousMessages, messages))
    }, [])



    const handleBackButtonClick = () => {
      props.navigation.goBack(null);
    }

  
  
  
    const selectedUser = props.route.params.selectedUser;  
    return (
        <View style={{flex:1}}>
          <View style={styles.header}>
            <View style={styles.container}>
            <TouchableOpacity onPress={handleBackButtonClick}>
               <Icon name="arrow-back" size={16} color="#000" />
            </TouchableOpacity>
            <View style={styles.circleView}>
                <Icon name="zoom-out-map" size={30} color="#000" />
            </View>
            <Text style={styles.textalign}>{selectedUser.name}</Text>
            </View>
          </View>
         <GiftedChat
          messages={message}
          isKeyboardInternallyHandled={false}
          keyboardShouldPersistTaps='never'
          inverted={true}
          onSend={newMessage => handleSend(newMessage)}
          user={{ _id: selectedUser.id ,name:selectedUser.name}}
        />
        </View>

      );
}

const styles = StyleSheet.create({
   container:{
     flex:1,
     flexDirection:'row'
   },
   circleView: { 
    borderWidth:1,
    borderColor:'rgba(0,0,0,0.2)',
    alignItems:'center',
    alignContent:'center',
    alignSelf:'center',
    justifyContent:'center',
    width:40,
    height:40,
    backgroundColor:'#fff',
    borderRadius:50,
    marginLeft:10
   },
   header:{
     backgroundColor:'#f8f8f8',
     justifyContent:'flex-start',
     alignItems:'flex-start',
     height:"11%",
     paddingTop:"15%",
     paddingBottom:"5%",
     shadowColor:'black',
     shadowOffset:{width:0,height:2},
     shadowOpacity:0.2,
     elevation:2,
     position:'relative'
   },
   textalign:{
     fontSize:15,
     marginLeft:10
   }
});


export default ChatScreen;