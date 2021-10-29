export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
  PlayerScreen: undefined;
};

export type BottomTabParamList = {
  Home: undefined;
  Search: undefined;
  Library: undefined;
  Premium: undefined;
};

export type TabOneParamList = {
  HomeScreen: undefined;
  AlbumScreen: undefined;
  PlayerScreen: undefined;
};

export type TabTwoParamList = {
  TabTwoScreen: undefined;
};

export type Album = {
  id: string;
  name: string;
  by: string;
  numberOfLikes: number;
  imageUri: string;
  artistsHeadline: string;
  songs: [Song];
};

export type Song = {
  id: string;
  imageUri: string;
  title: string;
  artist: string;
  uri: string;
};

export type AlbumHeaderType = {
  id: string;
  name: string;
  by: string;
  numberOfLikes: number;
  imageUri: string;
};
