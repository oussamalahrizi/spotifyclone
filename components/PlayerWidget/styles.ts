import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 49,
    backgroundColor: "#131313",
    width: "100%",
    borderBottomWidth: 1.5,
    maxHeight: 70,
  },
  progress: {
    height: 1.75,
    backgroundColor: "#bcbcbc",
  },
  row: {
    flexDirection: "row",
  },
  image: {
    width: 65,
    height: 65,
    marginRight: 10,
  },
  rightContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  nameContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconsContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: 90,
    justifyContent: "space-around",
    position: "absolute",
    right: 0,
    marginTop: 15,
  },
  title: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
  },
  artist: {
    color: "lightgray",
    fontSize: 15,
  },
});
export default styles;
