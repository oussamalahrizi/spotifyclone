import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 20,
    marginTop: 15,
  },
  image: {
    width: 200,
    height: 200,
    margin: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
  creatorContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  by: {
    color: "lightgray",
    margin: 5,
  },
  numberOfLikes: {
    color: "lightgray",
    margin: 5,
  },
  buttonContainer: {
    backgroundColor: "#1DB954",
    height: 50,
    width: 210,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 15,
    letterSpacing: 1,
  },
});

export default styles;
