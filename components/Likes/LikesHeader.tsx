import { View, Text, StyleSheet, Pressable } from "react-native";
import React, { useState } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const LikesHeader: React.FC = () => {
  const [activeFollowingBtn, setActiveFollowingBtn] = useState<boolean>(false);
  return (
    <View>
      <View style={styles.LikeHeaderContainer}>
        <View
          style={activeFollowingBtn ? styles.ActiveBttonDiv : styles.BttonDiv}
        >
          <Pressable onPress={() => setActiveFollowingBtn(true)}>
            <Text
              style={
                activeFollowingBtn ? styles.ActivetextStyle : styles.textStyle
              }
            >
              Following
            </Text>
          </Pressable>
        </View>
        <View
          style={!activeFollowingBtn ? styles.ActiveBttonDiv : styles.BttonDiv}
        >
          <Pressable onPress={() => setActiveFollowingBtn(false)}>
            <Text
              style={
                !activeFollowingBtn ? styles.ActivetextStyle : styles.textStyle
              }
            >
              You
            </Text>
          </Pressable>
        </View>
      </View>
      <View style={styles.FollowinTextContainer}>
        <Text style={styles.FollowingText}>Follow Requests</Text>
      </View>
    </View>
  );
};

export default LikesHeader;

const styles = StyleSheet.create({
  LikeHeaderContainer: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#e5e5e5",
    borderStyle: "solid",
    paddingTop: hp(1.2),
    paddingHorizontal: wp(1.5),
    justifyContent: "center",
    gap: 5,
    marginHorizontal: wp(1),
  },
  textStyle: {
    fontSize: hp(2),
    textAlign: "center",
    width: wp("40%"),
    paddingBottom: hp(1),
    fontWeight: "500",
    color: "rgba(0, 0, 0, 0.4)",
  },
  ActivetextStyle: {
    fontSize: hp(2),
    textAlign: "center",
    width: wp("40%"),
    paddingBottom: hp(1),
    fontWeight: "500",
    color: "#262626",
  },
  BttonDiv: {
    borderBottomWidth: 2,
    borderBottomColor: "transparent",
    borderStyle: "solid",
  },
  ActiveBttonDiv: {
    borderBottomWidth: 2,
    borderBottomColor: "#262626",
    borderStyle: "solid",
  },
  FollowingText: {
    fontSize: hp(2),
  },
  FollowinTextContainer: {
    paddingVertical: hp(1),
    paddingHorizontal: wp(1.5),
  },
});
