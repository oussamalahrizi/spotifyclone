import React from "react";

import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./styles";
import { AlbumHeaderType } from "../../types";

export type AlbumHeaderProps = {
  album: AlbumHeaderType;
};
const AlbumHeader = (props: AlbumHeaderProps) => {
  const { album } = props;
  return (
    <View style={styles.container}>
      {/* image*/}
      <Image source={{ uri: album.imageUri }} style={styles.image} />
      {/* title*/}
      <Text style={styles.title}>{album.name}</Text>
      {/*  view contains by and #_likes*/}
      <View style={styles.creatorContainer}>
        <Text style={styles.by}>By {album.by}</Text>
        <Text style={styles.numberOfLikes}>
          {album.numberOfLikes > 1000
            ? album.numberOfLikes / 1000 + "K"
            : album.numberOfLikes}{" "}
          Likes
        </Text>
      </View>
      {/* Button*/}
      <TouchableOpacity>
        <View style={styles.buttonContainer}>
          <Text style={styles.buttonText}>SHUFFLE PLAY</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default AlbumHeader;
