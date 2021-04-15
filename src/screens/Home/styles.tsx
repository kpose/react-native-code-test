import { StyleSheet } from "react-native";
import { COLORS } from "Utils";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "Utils/Helper";
import { CustomStyles } from "Utils/Style";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    //backgroundColor: COLORS.DARK_GRAY,
  },
  touch: {
    height: hp(4),
    width: wp(40),
    backgroundColor: "red",
  },
  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
    right: wp(5),
    marginBottom: 15,
  },
  welcomeText: {
    fontSize: 20,
    fontWeight: "700",
    color: COLORS.LIGHT_PURPLE,

    padding: 5,
  },
});

export default styles;
