import {
  View,
  Text,
  StyleSheet,
  Image,
  ActivityIndicatorComponent,
  Animated,
  Easing,
  Pressable,
} from "react-native";
import React, { useEffect, useRef } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Link } from "expo-router";


const index = () => {
    const handleAddToCart =(id)=>{
        
        alert(id)
    }
  return (
    <View style={styles.Banner}>
      <Text style={styles.textIn}>Index</Text>
      <Pressable onPress={(id)=>handleAddToCart("dsfsdfdsdsgdsg")}><Text>Add to cart</Text></Pressable>
      <Link style={styles.button} href={"/(loading)/index"}>
        Home Page{" "}
      </Link>
    </View>
  );
};

export default index;

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
  button: {
    fontSize: 18,
    color: "#ffffff",
  },
  textIn:{
    fontSize:7,
    color:"#fffffff"
  }
});
