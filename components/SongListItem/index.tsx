import React, { useContext } from "react";

import { View, Text, Image, TouchableOpacity } from "react-native";
import { Song } from "../../types";
import styles from "./styles";
import { AppContext } from "../../appContext";

export type SongListItemProps = {
  song: Song;
};

const SongListItem = (props: SongListItemProps) => {
  const { song } = props;
  const { setSong } = useContext(AppContext);
  const ChangeSong = () => {
    setSong(song);
  };
  return (
    <TouchableOpacity onPress={ChangeSong}>
      <View style={styles.container}>
        <Image source={{ uri: song.imageUri }} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{song.title}</Text>
          <Text style={styles.artist}>{song.artist}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default SongListItem;
