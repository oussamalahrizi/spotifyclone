import React from "react";
import AlbumComponent from "../AlbumComponent";
import { View, Text, FlatList } from "react-native";
import { Album } from "../../types";
import styles from "./styles";

export type AlbumCategoryProps = {
  title: string;
  albums: [Album];
};

const AlbumCategory = (props: AlbumCategoryProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.title}</Text>
      <FlatList
        data={props.albums}
        renderItem={({ item }) => <AlbumComponent album={item} />}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        overScrollMode="never"
      />
    </View>
  );
};
export default AlbumCategory;
