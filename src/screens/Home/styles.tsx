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
});

export default styles;
