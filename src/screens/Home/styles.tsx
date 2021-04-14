import { StyleSheet } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "Utils/Helper";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  touch: {
    height: hp(4),
    width: wp(40),
    backgroundColor: "red",
  },
  switchContainer: {
    position: "absolute",
    right: wp(5),
    top: hp(1),
    marginBottom: hp(1),
  },
});

export default styles;
