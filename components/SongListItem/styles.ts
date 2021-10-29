import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    margin: 10,
    marginVertical: 5,
  },
  image: {
    width: 70,
    height: 70,
  },
  textContainer: {
    justifyContent: "space-around",
    marginLeft: 10,
  },
  title: {
    color: "white",
    fontSize: 18,
  },
  artist: {
    color: "lightgray",
    fontSize: 13,
  },
});
export default styles;
