import * as React from "react";
import { StyleSheet, FlatList, View } from "react-native";
import AlbumCategory, { AlbumCategoryProps } from "../components/AlbumCategory";
import albums from "../data/albums";
import HomeHeader from "../components/HomeHeader";
import { AppContext } from "../appContext";
import { useNavigation } from "@react-navigation/native";

export default function HomeScreen() {
  const { song } = React.useContext(AppContext);
  const bottom = song ? 65 : 0;
  return (
    <View style={[styles.container, { marginBottom: bottom }]}>
      <FlatList
        data={albums}
        renderItem={({ item }) => (
          <AlbumCategory title={item.title} albums={item.albums} />
        )}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        overScrollMode="never"
        ListHeaderComponent={() => <HomeHeader />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgb(33,33,33)",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
