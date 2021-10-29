import React from "react";
import { View, Text } from "react-native";
import { Feather } from "@expo/vector-icons";
import styles from "./styles";
const HomeHeader = () => {
  const d = new Date();
  const time = d.getHours();
  const greetingMessage = (time: number) =>
    time < 12 && time > 4
      ? "Morning"
      : time < 17 && time > 12
      ? "Afternoon"
      : "Evening";
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Good {greetingMessage(time)}</Text>
      <Feather name="settings" style={styles.icon} size={24} color="white" />
    </View>
  );
};

export default HomeHeader;
