import {
  View,
  Text,
  Image,
  TextInput,
  Pressable,
  Alert,
  StyleSheet,
  Button,
} from "react-native";
import { useState } from "react";
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

  const handleLogin = async () => {
    setIsLoading(true);
    try {
      if (!emialRef.current || !passwordRef.current) {
        Alert.alert("Sign In", "Please fill all input fields carefully!!");
        setIsLoading(false);
        return;
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <CustomKeyboardView>
      <View style={styles.authContainer}>
        <View>
          <View>
            <Image
              source={require("@/assets/images/instagram-logo.png")}
              resizeMode="contain"
              style={styles.logoImage}
            />
          </View>
          <View>
            <View style={styles.InputContainer}>
              <TextInput
                onChangeText={(value) => (emialRef.current = value)}
                style={styles.InputField}
                placeholder="Enter your email"
                placeholderTextColor={"rgba(0, 0, 0, 0.2)"}
              />
            </View>
            <View>
              <View style={styles.InputContainer}>
                <TextInput
                  onChangeText={(value) => (passwordRef.current = value)}
                  style={styles.InputField}
                  placeholder="Enter your password"
                  placeholderTextColor={"rgba(0, 0, 0, 0.2)"}
                  secureTextEntry
                />
              </View>
              <Pressable onPress={() => router.replace("/forget-password")}>
                <Text style={styles.forgetMessage}>forget password?</Text>
              </Pressable>
            </View>
            <View>
              <Pressable onPress={handleLogin} style={styles.submitButton}>
                <Text style={styles.buttonText}>
                  {isLoading ? "Loading.." : "Log In"}
                </Text>
              </Pressable>
            </View>

            <View>
              <Pressable onPress={() => router.push("/signup")}>
                <Text style={styles.noAccountLink}>
                  Don’t have an account?{" "}
                  <Text style={{ color: "#3797ef" }}>Sign up.</Text>
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      </View>
    </CustomKeyboardView>
  );
};

export default signin;

const styles = StyleSheet.create({
  submitButton: {
    backgroundColor: "#9bccf7",
    paddingVertical: hp(1.6),
    paddingHorizontal: wp(2),
    borderRadius: 5,
    marginTop: hp(2),
    marginBottom: hp(5),
  },
  buttonText: {
    fontSize: hp(1.5),
    color: "#ffffff",
    fontWeight: "400",
    textAlign: "center",
  },
  InputField: {
    fontSize: hp(1.5),
    color: "#262626",
  },
  InputContainer: {
    backgroundColor: "#FAFAFA",
    borderRadius: wp(0.3),
  },
  noAccountLink: {
    fontSize: hp(1.5),
    color: "rgba(0, 0, 0, 0.4)",
    fontWeight: "400",
    textAlign: "center",
  },
  forgetMessage: {
    fontSize: hp(1.5),
    color: "#3797ef",
    fontWeight: "400",
    textAlign: "right",
  },
  authContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: wp(5),
    height: hp("100%"),
  },
  logoImage: {
    height: hp(5),
    width: wp("100%"),
    objectFit: "contain",
    resizeMode: "contain",
  },
});
