import React from "react";

import { View, Text, Image, TouchableWithoutFeedback } from "react-native";
import { Album } from "../../types";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";

export type AlbumProps = {
  album: Album;
};

const AlbumComponent = (props: AlbumProps) => {
  const { artistsHeadline, imageUri } = props.album;
  const navigation = useNavigation();
  const albumPress = () => {
    navigation.navigate("AlbumScreen", { id: props.album.id });
  };
  const headlineStyle = (text: string) =>
    text.length >= 30 ? text.substr(0, 28) + " ...." : text;
  return (
    <TouchableWithoutFeedback onPress={albumPress}>
      <View style={styles.container}>
        <Image source={{ uri: imageUri }} style={styles.Image} />
        <Text style={styles.ArtistHeadline}>
          {headlineStyle(artistsHeadline)}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
};
export default AlbumComponent;
