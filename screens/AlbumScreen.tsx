import React, { useEffect } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { useRoute } from "@react-navigation/native";
import SongListItem from "../components/SongListItem";
import albumDetails from "../data/albumDetails";
import AlbumHeader from "../components/AlbumHeader";
import { AppContext } from "../appContext";

const AlbumScreen = () => {
  const route = useRoute();
  const { song } = React.useContext(AppContext);
  const bottom = song ? 65 : 0;
  useEffect(() => {
    console.log(route.params);
  }, []);
  return (
    <View style={[styles.container, { marginBottom: bottom }]}>
      <FlatList
        data={albumDetails.songs}
        renderItem={({ item }) => <SongListItem song={item} />}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        overScrollMode="never"
        ListHeaderComponent={() => <AlbumHeader album={albumDetails} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(33,33,33)",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
});

export default AlbumScreen;
