import { StatusBar } from "expo-status-bar";
import { useEffect, useRef, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Socket, io } from "socket.io-client";

export default function App() {
  const socketRef = useRef<Socket | null>(null);

  useEffect(() => {
    const socket = (socketRef.current = io(process.env.API || ""));
    socket.emit("message", JSON.stringify(new Date()));
  }, []);

  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
