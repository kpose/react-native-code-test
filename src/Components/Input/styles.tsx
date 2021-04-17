import { StyleSheet } from "react-native";
import { COLORS } from "../../Utils";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "../../Utils/Helper";

const styles = StyleSheet.create({
  container: {},
  input: {
    width: wp(75),
    //height: hp(6),
    //borderRadius: wp(10),
    textAlign: "center",
    marginTop: hp(2),
    borderWidth: wp(0.3),
  },
  errorText: {
    alignSelf: "center",
    marginTop: hp(0.5),
    color: COLORS.WARNING,
    fontWeight: "bold",
  },
});

export default styles;
