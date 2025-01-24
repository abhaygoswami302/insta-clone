import React from "react";
import { View } from "react-native";
import Stories from "@/components/Home/Stories";
import Header from "@/components/Home/Header";
import HomePost from "@/components/Home/HomePost";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
function Home() {
  return (
    <View>
      <Header />
      <Stories />
      <HomePost />
    </View>
  );
}

export default Home;
