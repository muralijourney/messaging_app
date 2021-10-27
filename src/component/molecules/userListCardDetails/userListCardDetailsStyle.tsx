import { StyleSheet } from "react-native"
import Colour from "../../../utilis/color";

const userListStyle = StyleSheet.create({
  container: {
    backgroundColor: Colour.WHITE,
  },
  textStyle: {
    fontSize: 15,
    color: Colour.BLACK,
    paddingTop: 10,
    paddingBottom: 10,
    flex: 1,
  },

  messageTextStyle: {
    fontSize: 15,
    color: Colour.GREY,
    paddingTop: 5,
    paddingBottom: 5,
    flex: 1,
  },
  textflexDirection: {
    flexDirection: 'row',
    paddingLeft: 10,
    paddingRight: 10,
    flex: 1,
    position: 'relative'
  },
  badgeStyle: {
    width: 36,
    height: 36,
  },
  circleView: {
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.2)',
    alignItems: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    width: 40,
    height: 40,
    backgroundColor: '#fff',
    borderRadius: 50,
    marginLeft: 10
  },

});
export default userListStyle;