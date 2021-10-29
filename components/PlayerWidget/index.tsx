import React, { useState, useEffect, useContext } from "react";
import { AppContext } from "../../appContext";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Dimensions,
} from "react-native";
import { Song } from "../../types";
import styles from "./styles";
import {
  SimpleLineIcons,
  FontAwesome,
  MaterialIcons,
  FontAwesome5,
} from "@expo/vector-icons";
import { Sound } from "expo-av/build/Audio/Sound";
import { ScrollView } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import PlayerScreen from "../../screens/PlayerScreen";
import HomeScreen from "../../screens/HomeScreen";

const PlayerWidget = () => {
  // const [sound, setSound] = useState<Sound | null>(null);
  // const [IsPlaying, setIsPlaying] = useState<boolean>(false);
  // const [duration, setDuration] = useState<number | null>(null);
  // const [position, setPosition] = useState<number | null>(null);
  const { song } = useContext(AppContext);
  const [music, setMusic] = useState<Song | null>(null);

  const nav = useNavigation();
  useEffect(() => {
    setMusic(song);
  }, [song]);

  const musicTitleWidth = (title: string) => {
    return title.length >= 20 ? title.substr(0, 20) + " ..." : title;
  };
  if (!music) {
    return null;
  }
  return (
    <View style={styles.container}>
      <View style={[styles.progress, { width: "100%" }]} />
      <TouchableWithoutFeedback
        onPress={() => {
          nav.navigate("PlayerScreen");
        }}
      >
        <View style={styles.row}>
          <Image source={{ uri: music.imageUri }} style={styles.image} />
          <View style={styles.rightContainer}>
            <View style={styles.nameContainer}>
              <Text style={styles.title}>{musicTitleWidth(music.title)} </Text>
              <Text style={styles.artist}>{music.artist}</Text>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
      <View style={styles.iconsContainer}>
        <TouchableOpacity>
          <SimpleLineIcons name="heart" size={24} color={"white"} />
        </TouchableOpacity>
        <TouchableOpacity>
          <MaterialIcons name="play-arrow" size={34} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PlayerWidget;

// const getProgress = () => {
//   if (sound === null || position === null || duration === null) return 0;
//   return (position / duration) * 100;
// };

// const onPlayBackStatusUpdate = (status: any) => {
//   setIsPlaying(status.isPlaying);
//   setDuration(status.durationMillis);
//   setPosition(status.positionMillis);
//   console.log(status);
// };

// const playCurrentSong = async () => {
//   if (sound) await sound.unloadAsync();
//   const { sound: newSound } = await Sound.createAsync(
//     { uri: song.uri },
//     { shouldPlay: false },
//     onPlayBackStatusUpdate
//   );
//   setSound(newSound);
// };

// const PlayPauseHandler = async () => {
//   if (!sound) return;
//   if (IsPlaying) await sound.pauseAsync();
//   else await sound.playAsync();
// };
