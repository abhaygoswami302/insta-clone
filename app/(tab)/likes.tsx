import { View, Text, StyleSheet } from "react-native";
import React from "react";
import LikesHeader from "@/components/Likes/LikesHeader";

const Likes = () => {
  return (
    <View style={styles.LikeMainContainer}>
      <LikesHeader />
    </View>
  );
};

export default Likes;

const styles = StyleSheet.create({
  LikeMainContainer: {
    
  },
});
