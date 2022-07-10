import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("home");
    }, 3000);
  }, [navigation]);

  return (
    <SafeAreaView className="flex items-center flex-1 justify-center bg-white">
      <StatusBar hidden />
      <Image
        source={{
          uri: "http://assets.stickpng.com/images/580b57fcd9996e24bc43c520.png",
        }}
        className="w-52 h-52"
      />
    </SafeAreaView>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({});
