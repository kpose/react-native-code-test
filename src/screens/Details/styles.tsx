import { StyleSheet } from "react-native";
import { COLORS } from "Utils";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "Utils/Helper";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 9999,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red",
  },
  scrollContainer: {
    padding: 16,
  },
  title: {
    textAlign: "center",
    flexWrap: "wrap",
    marginLeft: wp(4),
    fontSize: 30,
    fontWeight: "bold",
    color: COLORS.LIGHT_BLUE,
  },
  animatedIcon: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: hp(4),
  },

  titleee: {
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
    bottom: 16,
    left: 16,
    fontSize: 30,
    fontWeight: "bold",
    color: COLORS.LIGHT_BLUE,
  },
  backIcon: {
    position: "absolute",
    zIndex: 1,
    left: wp(5),
    top: hp(3),
  },

  image: {
    height: hp(22),
    width: "100%",
    borderRadius: wp(2),
    resizeMode: "cover",
  },
});

export default styles;
