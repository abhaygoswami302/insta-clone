import { View, TextInput, StyleSheet, Image } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const SearchHeader = () => {
  return (
    <View style={styles.searchHeaderContainer}>
      <View style={styles.searchBox}>
        <FontAwesome name="search" color={"rgba(60, 60, 67, 0.6)"} size={16} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search.."
          keyboardType="default"
          placeholderTextColor={"rgba(60, 60, 67, 0.6)"}
        />
      </View>
      <View>
        <Image source={require("@/assets/images/Live.png")} alt="Live Icon" />
      </View>
    </View>
  );
};

export default SearchHeader;

const styles = StyleSheet.create({
  searchHeaderContainer: {
    paddingHorizontal: hp(1.5),
    paddingTop: hp(1.5),
    paddingBottom:hp(0.5),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 2,
  },
  searchBox: {
    backgroundColor: "rgba(118, 118, 128, 0.12);",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    borderRadius: 8,
    paddingHorizontal: hp(1),
  },
  searchInput: {
    width: wp("78%"),
    color: "#262626",
    fontSize: hp(1.7),
    fontWeight: "500",
  },
});
