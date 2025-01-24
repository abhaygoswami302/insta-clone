import { View, Text, Pressable, Image, StyleSheet } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

interface mediaItemProps {
  item: {
    id: string;
    name: string;
    mediaURL: string;
    StorieViewed: boolean;
  };
}
const SingleStoryComp = ({ item }: mediaItemProps) => {
  const { id, name, mediaURL, StorieViewed } = item;
  return (
    <View key={id} style={styles.Items}>
      <Pressable onPress={() => {}}>
        <LinearGradient
          // colors={StorieViewed?["#FBAA47", "#D91A46", "#A60F93"]:["#f2f2f2","#f5f5f5","#f7f7f7"]}
          colors={["#FBAA47", "#D91A46", "#A60F93"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          locations={[0, 0.52, 1]} // This will control where the colors start (0%, 52%, 100%)
          shouldRasterizeIOS
          style={styles.ImageRoundedLinear}
        >
          <Image
            source={{ uri: mediaURL }}
            style={styles.image}
            className="rounded-full w-7 h-7"
          />
        </LinearGradient>
      </Pressable>
      <Text style={styles.ItemsTitle}>{name}</Text>
    </View>
  );
};

export default SingleStoryComp;

const styles = StyleSheet.create({
  Items: {
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: hp(1),
  },
  ItemsTitle: {
    fontSize: hp(1.7),
    color: "#101010",
    textAlign: "center",
    fontWeight: "500",
    textTransform: "capitalize",
  },
  ImageRoundedLinear: {
    borderRadius: wp("100%"),
    padding: wp(0.5),
  },
  image: {
    height: 70,
    width: 70,
    borderRadius: 99999,
    objectFit: "cover",
    backgroundColor: "#ffffff",
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: "#f5f5f5",
  },
});
