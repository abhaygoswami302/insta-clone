import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Pressable,
  Image,
} from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
// import LinearGradient from "react-native-linear-gradient";
import { LinearGradient } from "expo-linear-gradient";
import { storyData } from "@/jsonData/storeData";
import SingleStoryComp from "./SingleStoryComp";

const Stories = () => {
  return (
    <View style={styles.storieContainer}>
      <FlatList
        data={storyData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <SingleStoryComp item={item} />}
        horizontal
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={styles.seperator} />}
      />
    </View>
  );
};

export default Stories;

const styles = StyleSheet.create({
  storieContainer: {
    borderBottomWidth: 1,
    borderBottomColor: "#E5E5E5",
    borderStyle: "solid",
    paddingBottom: 8,
    paddingHorizontal: wp(1.5),
  },
  seperator: {
    width: 5,
  },
});
