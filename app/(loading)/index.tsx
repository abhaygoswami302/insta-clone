import {
  View,
  Text,
  StyleSheet,
  Image,
  ActivityIndicatorComponent,
  Animated,
  Easing,
} from "react-native";
import React, { useEffect, useRef } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
// import LottieView from "lottie-react-native";

const Home = () => {
  const spinValue = useRef(new Animated.Value(0));

  return (
    <View style={styles.Banner}>
      <View></View>
      <View style={styles.logoContainer}>
        <Image
          source={require("@/assets/images/logo.png")}
          style={styles.logoImg}
        />
        <Image source={require("@/assets/images/Foodies.png")} />
      </View>
      <View>
        {/* <ActivityIndicatorComponent  size={hp(1)}/> */}
        {/* <Image
          className="animate-spin"
          width={wp(1)}
          height={hp(1)}
          source={require("@/assets/images/loading.png")}
          alt="loading"
          style={styles.loading}
        /> */}
        {/* <LottieView
          source={require("@/assets/lottie/home-loading.json")}
          style={{ width: "100%", height: "100%" }}
          autoPlay
          loop
        /> */}
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  Banner: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#1E1E1E",
    paddingVertical: 3,
  },
  logoContainer: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: hp(1.4),
  },

  logoImg: {
    width: wp(50),
    height: hp(15),
    resizeMode: "contain",
  },
  loading: {
    width: wp(10),
    height: hp(10),
    resizeMode: "contain",
  },
});
