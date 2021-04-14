import { StyleSheet } from "react-native";
import { COLORS } from "Utils";
import { heightPercentageToDP as hp } from "Utils/Helper";

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
    marginTop: hp(4),
    fontSize: 30,
    fontWeight: "bold",
    color: COLORS.LIGHT_BLUE,
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
});

export default styles;
