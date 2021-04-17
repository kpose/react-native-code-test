import { StyleSheet } from "react-native";
import { COLORS } from "Utils";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "Utils/Helper";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: wp(90),
    marginBottom: hp(3),
    borderRadius: 10,
    elevation: 24,
  },
  image: {
    height: hp(22),
    width: "100%",
    resizeMode: "cover",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  title: {
    marginTop: hp(1),
    marginBottom: hp(1),
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
  titleHeader: {
    backgroundColor: COLORS.LIGHT_BLUE,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
});

export default styles;
