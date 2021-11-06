import React from 'react';
import {
  Text,
  View,
  Image
} from 'react-native';
import Badge from '../../atoms/Badge/badge';
import userListStyle from './userListCardDetailsStyle';

const UserCard = (props: any) => {
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
            uri: props.image,
          }}
        />

      </View>
      <View style={{ flex: 1, flexDirection: 'column', padding: 10 }} >
        <Text style={[userListStyle.textStyle, { marginLeft: 10, }]}>{props.name}</Text>

      </View>
    </View>
  );
}


export default UserCard;