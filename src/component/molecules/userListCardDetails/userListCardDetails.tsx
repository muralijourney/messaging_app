import React from 'react';
import {
  Text,
  View,
  Image
} from 'react-native';
import Badge from '../../atoms/Badge/badge';
import userListStyle from './userListCardDetailsStyle';
import Icon from 'react-native-vector-icons/MaterialIcons';

const UserListCardDetails = (props: any) => {
  console.log("props time >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>."+ props.time)
  return (
    <View style={{ flex: 1, flexDirection: 'row' }}>
      <View style={[userListStyle.circleView]}>
        <Image
          style={{
            width: 50,
            height: 50,
            borderRadius: 50 / 2,
            overflow: "hidden",
            borderWidth: 1,
            borderColor: "red"

          }}
          source={{
            uri: 'https://source.unsplash.com/random',
          }}
        />
      </View>
      <View style={{ flex: 1, flexDirection: 'column' }} >
        <View style={userListStyle.textflexDirection}>
          <Text style={userListStyle.textStyle}>{props.name}</Text>
          <Badge count={props.count} style={[userListStyle.badgeStyle, { alignSelf: 'flex-end' }]} />
        </View>
        <View style={userListStyle.textflexDirection}>
          <Text style={userListStyle.messageTextStyle}>{props.message}</Text>
          <Text style={[userListStyle.messageTextStyle, { textAlign: 'right' }]}>{props.time}</Text>
        </View>
      </View>
    </View>
  );
}


export default UserListCardDetails;