import { View, Text, Pressable, Image, StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import React from "react";
import { useRouter } from "expo-router";

const Header = () => {
  const router=useRouter();
  const handlePageRouting=()=>{
    console.log("helloe")
    return router.push("/post/homepost")
  }
  return (
    <View style={styles.headerView}>
      <View>
        <Pressable onPress={handlePageRouting }>
          <Image
            source={require("@/assets/images/Camera Icon.png")}
            width={105}
            height={28}
            style={styles.logoDem}
          />
        </Pressable>
      </View>
      <View style={styles.logoContainer}>
        <Pressable>
          <Image
            source={require("@/assets/images/Instagram Logo.png")}
            width={105}
            height={28}
            style={styles.logoDem}
          />
        </Pressable>
      </View>

      <View style={styles.ImageStyle}>
        <Pressable>
          <Image
            source={require("@/assets/images/IGTV.png")}
            width={105}
            height={28}
            style={styles.logoDem}
          />
        </Pressable>
        <Pressable>
          <Image
            source={require("@/assets/images/Messanger.png")}
            width={105}
            height={28}
            style={styles.logoDem}
          />
        </Pressable>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerView: {
    paddingHorizontal: wp(1.5),
    paddingVertical: 20,
    justifyContent: "space-between",
    alignContent: "center",
    flexDirection: "row",
    gap: 2,
    borderBottomWidth: 1,
    borderBottomColor: "#E5E5E5",
    borderStyle: "solid",
  },
  logoContainer: {
    marginRight: -50,
  },
  logoDem: {
    resizeMode: "contain",
    alignSelf: "center",
  },
  ImageStyle: {
    flexDirection: "row",
    gap: 20,
    alignItems: "center",
  },
});
