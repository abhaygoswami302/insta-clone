import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import LoginImage from "@/assets/images/login.jpg";
import { Octicons } from "@expo/vector-icons";
import { useRef, useEffect, useState, ChangeEvent } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Link, useRouter } from "expo-router";
import CustomKeyboardView from "@/components/CustomKeyboardView";
import Loading from "@/components/Loading";
import { useAuth } from "@/context/AuthContext";

interface InputDataProps {
  username: string;
  email: string;
  password: string;
}

const signup = () => {
  const router = useRouter();
  const { register } = useAuth();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [inputData, setInputData] = useState<InputDataProps>({
    username: "",
    email: "",
    password: "",
  });
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    console.log(value, name);
  };
  const handleRegisterForm = async () => {
    try {
      await register();
    } catch (error) {
      console.log((error as Error).message);
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
              loop
              autoPlay
              source={require("../assets/lottie/login-image.json")}
            /> */}
          </View>
          <View className="gap-5">
            <Text
              className="font-semibold mt-2 text-blue-700 text-center"
              style={{ fontSize: wp(6) }}
            >
              Sign Up
            </Text>
            <View className="flex-row items-center gap-4 px-4 py-1 rounded-lg bg-gray-100">
              <Octicons name="person" size={hp(2.7)} color={"blue"} />
              <TextInput
                style={{ fontSize: hp(2) }}
                className=""
                placeholder="Enter your username"
                placeholderTextColor={"gray"}
              />
            </View>
            <View className="flex-row items-center gap-4 px-4 py-1 rounded-lg bg-gray-100">
              <Octicons name="mail" size={hp(2.7)} color={"blue"} />
              <TextInput
                style={{ fontSize: hp(2) }}
                className=""
                placeholder="Enter your email"
                placeholderTextColor={"gray"}
              />
            </View>

            <View className="flex-row items-center gap-4 px-4 py-1 rounded-lg bg-gray-100">
              <Octicons name="lock" size={hp(2.7)} color={"blue"} />
              <TextInput
                style={{ fontSize: hp(2) }}
                className=""
                placeholder="Enter your password"
                placeholderTextColor={"gray"}
                secureTextEntry
                onChangeText={(e)=>handleInputChange(e)}
              />
            </View>
            <View>
              {isLoading ? (
                <Loading size={hp(8)} />
              ) : (
                <TouchableOpacity
                  onPress={handleRegisterForm}
                  className="bg-blue-800 rounded-xl px-4 py-2 text-center"
                >
                  <Text
                    style={{ fontSize: hp(2.7) }}
                    className="text-white text-center font-semibold tracking-widest"
                  >
                    Register
                  </Text>
                </TouchableOpacity>
              )}
            </View>

            <View className="flex-row items-center justify-center gap-1">
              <Text
                style={{ fontSize: hp(1.7) }}
                className="font-semibold text-neutral-500"
              >
                Already have an account?
              </Text>
              <Pressable onPress={() => router.push("/signin")}>
                <Text
                  style={{ fontSize: hp(1.7) }}
                  className="font-bold text-blue-500"
                >
                  Sign In
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      </View>
    </CustomKeyboardView>
  );
};

export default signup;
