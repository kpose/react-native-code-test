import { StyleSheet } from "react-native";
import { COLORS } from "Utils";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "Utils/Helper";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    height: hp(24),
    width: wp(95),
    backgroundColor: COLORS.SECONDARY_BACKGROUND,
    marginBottom: hp(3),
    borderRadius: wp(2),

    /* shadowColor: "yellow",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11, */

    elevation: 14,
  },
  image: {
    height: hp(20),
    width: "100%",
    borderRadius: wp(2),
    resizeMode: "cover",
  },
  title: {
    marginTop: hp(1),
    marginBottom: hp(1),
    fontSize: 20,
    fontWeight: "bold",
    color: COLORS.WHITE,
  },
});

export default styles;
