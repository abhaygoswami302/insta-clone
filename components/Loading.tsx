import { View, Text } from "react-native";
// import LottieView from "lottie-react-native";
import { useEffect, useRef } from "react";
interface sizePorps{
    size:number
}
const Loading = ({ size }:sizePorps) => {

  return (
    <View style={{ height: size, aspectRatio: 1 }}>
      {/* <LottieView
        style={{ flex: 1 }}
        source={require("../assets/lottie/loading.json")}
        loop
        autoPlay
      /> */}
    </View>
  );
};
export default Loading;
