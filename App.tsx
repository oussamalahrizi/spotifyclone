import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import Navigation from "./navigation";
import PlayerWidget from "./components/PlayerWidget";
import albumDetails from "./data/albumDetails";
import { AppContext } from "./appContext";
import { Song } from "./types";
import { View } from "./components/Themed";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
  const [song, setSong] = useState<Song | null>(null);

  const ContextValue = {
    song,
    setSong: (song: Song) => setSong(song),
  };
  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <AppContext.Provider value={ContextValue}>
          <Navigation colorScheme={colorScheme} />
          <StatusBar translucent backgroundColor="transparent" />
        </AppContext.Provider>
      </SafeAreaProvider>
    );
  }
}
