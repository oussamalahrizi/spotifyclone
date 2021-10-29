import React from "react";
import { Song } from "./types";

export const AppContext = React.createContext({
  song: null,
  setSong: (song: Song) => {},
});
