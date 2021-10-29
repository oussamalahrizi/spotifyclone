import React, { useContext, useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Song } from "../types";
import { AppContext } from "../appContext";
import {
  AntDesign,
  Entypo,
  SimpleLineIcons,
  Ionicons,
  MaterialIcons,
} from "@expo/vector-icons";
import { RotationGestureHandler } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const PlayerScreen = () => {
  const [music, setMusic] = useState<Song | null>(null);
  const { song } = useContext(AppContext);
  const navigate = useNavigation();
  const [play, setPlay] = useState<boolean>(false);
  useEffect(() => {
    setMusic(song);
    setPlay(true);
  }, [song]);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => {
            navigate.goBack();
          }}
        >
          <AntDesign name="down" size={20} color="white" />
        </TouchableOpacity>

        <View>
          <Text style={styles.headerTitle}>Playing From </Text>
          <Text style={styles.playlistTitle}>Favorites</Text>
        </View>

        <Entypo name="dots-three-vertical" size={20} color="white" />
      </View>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{ uri: "https://source.unsplash.com/random" }}
        />
      </View>
      <View style={styles.contentDetails}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View>
            <Text style={styles.songTitle}>{music?.title}</Text>
            <Text style={styles.songArtist}>{music?.artist}</Text>
          </View>
          <SimpleLineIcons
            name="heart"
            size={24}
            color={"white"}
            style={{ marginTop: 5 }}
          />
        </View>
        <View style={styles.progressContainer}>
          <View style={[styles.progress, { width: "100%" }]} />
          <View style={styles.dotBar} />
        </View>
        <View style={styles.timers}>
          <Text style={{ color: "lightgray", fontSize: 12 }}>3:00</Text>
          <Text style={{ color: "lightgray", fontSize: 12 }}>3:00</Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <Ionicons name="shuffle" size={30} color="lightgray" />

        <View style={styles.middleButtonContainer}>
          <Ionicons name="play-skip-back" size={30} color="white" />
          <View style={styles.playButton}>
            <TouchableOpacity onPress={() => setPlay(!play)}>
              <MaterialIcons
                name={play === true ? "pause" : "play-arrow"}
                size={32}
                color="black"
              />
            </TouchableOpacity>
          </View>
          <Ionicons name="play-skip-forward" size={30} color="white" />
        </View>

        <Ionicons name="repeat-outline" size={30} color="lightgray" />
      </View>
    </View>
  );
};

export default PlayerScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(33,33,33)",
    padding: 15,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 30,
  },
  headerTitle: {
    color: "white",
    fontWeight: "200",
  },
  image: {
    height: 275,
    width: 275,
    resizeMode: "cover",
  },
  imageContainer: {
    alignItems: "center",
    marginTop: 15,
  },
  playlistTitle: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
  },
  progress: {
    height: 3,
    backgroundColor: "white",
    borderRadius: 1,
  },
  progressContainer: {
    flexDirection: "row",
    marginTop: 20,
    alignItems: "center",
  },
  dotBar: {
    borderRadius: 50,
    borderWidth: 3,
    borderColor: "white",
    marginLeft: -3,
  },
  songTitle: {
    color: "white",
    fontWeight: "bold",
    paddingLeft: 20,
    fontSize: 20,
    left: -20,
  },
  songArtist: {
    color: "lightgray",
    paddingLeft: 20,
    fontSize: 15,
    left: -20,
  },
  timers: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 5,
  },
  contentDetails: {
    paddingHorizontal: 15,
    marginTop: 10,
  },
  buttonContainer: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    alignItems: "center",
  },
  middleButtonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "60%",
    alignItems: "center",
  },
  playButton: {
    backgroundColor: "white",
    borderRadius: 200,
    padding: 15,
    alignItems: "center",
  },
});
