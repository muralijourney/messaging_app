import React from 'react';
import {
  Text,
  View,
} from 'react-native';
import Badge from '../../atoms/Badge/badge';
import userListStyle from './userListCardDetailsStyle';
import Icon from 'react-native-vector-icons/MaterialIcons';

const UserListCardDetails = (props:any) =>{
    return(
       <View style={{flex:1,flexDirection:'row'}}>
        <View style={[userListStyle.circleView]}>
          <Icon name="zoom-out-map" size={30} color="#000" />
        </View>
        <View style={{flex:1,flexDirection:'column'}} >
          <View style={userListStyle.textflexDirection}>
           <Text style={userListStyle.textStyle}>{props.name}</Text>
           <Badge count={props.count} style={[userListStyle.badgeStyle,{alignSelf:'flex-end'}]}/>
          </View>
          <View style={userListStyle.textflexDirection}>
           <Text style={userListStyle.messageTextStyle}>{props.message}</Text>
           <Text style={[userListStyle.messageTextStyle,{textAlign:'right'}]}>{new Date().getHours()+':'+new Date().getMinutes()}</Text>
         </View>
     </View>  
   </View>
  );
}


export default UserListCardDetails;