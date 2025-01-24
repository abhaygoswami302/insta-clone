import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  Pressable,
  Alert,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import LoginImage from "@/assets/images/login.jpg";
import { Octicons } from "@expo/vector-icons";
// import LottieView, { LottieViewProps } from "lottie-react-native";
import { useEffect, useState } from "react";
import Loading from "@/components/Loading";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Link, useRouter } from "expo-router";
import { useRef } from "react";
import CustomKeyboardView from "@/components/CustomKeyboardView";
import { useAuth } from "@/context/AuthContext";
const signin = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { register } = useAuth();
  const router = useRouter();
  const emialRef = useRef("");
  const passwordRef = useRef("");

  // const animationRef = useRef<LottieView>();
  // useEffect(() => {
  //   animationRef.current?.play();
  //   animationRef.current?.play(30, 120);
  // }, []);

  const handleLogin = async () => {
    setIsLoading(true);
    try {
      if (!emialRef.current || !passwordRef.current) {
        Alert.alert("Sign In", "Please fill all input fields carefully!!");
        setIsLoading(false);
        return;
      }
      // await register(emialRef.current, passwordRef.current);
      //   setIsLoading(false);
      //   Login process start here
    } catch (error) {
      //   setIsLoading(false);
      console.log(error);
    }
  };
  return (
    <CustomKeyboardView>
      <View className="flex-1">
        <StatusBar style="dark" />
        <View
          className="flex-1 gap-8"
          style={{ paddingTop: hp(8), paddingHorizontal: wp(3) }}
        >
          <View className="items-center">
            {/* <Image
            source={LoginImage}
            resizeMode="contain"
            style={{ height: hp(30), width: wp(80) }}
          /> */}
            {/* <LottieView
            style={{ height: hp(40), width: wp(90) }}
            ref={animationRef}
            source={require("../assets/lottie/signup.json")}
          />
        </View> */}
            <View className="gap-5">
              <Text
                className="font-semibold mt-2 text-blue-700 text-center"
                style={{ fontSize: wp(6) }}
              >
                Sign In
              </Text>
              <View className="flex-row items-center gap-4 px-4 py-1 rounded-lg bg-gray-100">
                <Octicons name="mail" size={hp(2.7)} color={"blue"} />
                <TextInput
                  onChangeText={(value) => (emialRef.current = value)}
                  style={{ fontSize: hp(2) }}
                  className=""
                  placeholder="Enter your email"
                  placeholderTextColor={"gray"}
                  keyboardType="email-address"
                />
              </View>
              <View className="gap-3">
                <View className="flex-row items-center gap-4 px-4 py-1 rounded-lg bg-gray-100">
                  <Octicons name="lock" size={hp(2.7)} color={"blue"} />
                  <TextInput
                    onChangeText={(value) => (passwordRef.current = value)}
                    style={{ fontSize: hp(2) }}
                    className=""
                    placeholder="Enter your password"
                    placeholderTextColor={"gray"}
                    secureTextEntry
                  />
                </View>
                <Pressable onPress={() => router.replace("/forget-password")}>
                  <Text
                    style={{ fontSize: hp(1.4) }}
                    className="text-right text-sm capitalize font-semibold text-neutral-500"
                  >
                    forget password?
                  </Text>
                </Pressable>
              </View>
              <View className="flex-col">
                {isLoading ? (
                  <View className="flex-row justify-center items-center">
                    <Loading size={hp(10)} />
                  </View>
                ) : (
                  <TouchableOpacity
                    onPress={handleLogin}
                    className="bg-blue-800 rounded-xl px-4 py-3 text-center"
                  >
                    <Text
                      style={{ fontSize: hp(2.3) }}
                      className="text-white text-center font-semibold tracking-widest"
                    >
                      Log In
                    </Text>
                  </TouchableOpacity>
                )}
              </View>

              <View className="flex-row items-center justify-center gap-1">
                <Text
                  style={{ fontSize: hp(1.7) }}
                  className="font-semibold text-neutral-500"
                >
                  Don't have an account?
                </Text>
                <Pressable onPress={() => router.push("/signup")}>
                  <Text
                    style={{ fontSize: hp(1.7) }}
                    className="font-bold text-blue-500"
                  >
                    Sign Up
                  </Text>
                </Pressable>
              </View>
            </View>
          </View>
        </View>
      </View>
    </CustomKeyboardView>
  );
};

export default signin;
