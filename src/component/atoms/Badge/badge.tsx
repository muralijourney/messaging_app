import React from "react";
import {StyleSheet} from "react-native";
import { Badge } from 'react-native-elements';


const BadgeScreen = (props:any)=>{
    return (
       <Badge status="error" value={props.count}  badgeStyle={badgeStyle.textStyle} />
    );
};


const badgeStyle = StyleSheet.create({
    textStyle:{
        marginTop:10,
        width:25,
        height:25
    }
});
export default BadgeScreen;