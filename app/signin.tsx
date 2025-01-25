import {
  View,
  Text,
  Image,
  TextInput,
  Pressable,
  Alert,
  StyleSheet,
} from "react-native";
import { useState } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useRouter } from "expo-router";
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
    <View style={styles.authContainer}>
      <View style={styles.innerContainer}>
        <View style={styles.logoImageContainer}>
          <Pressable onPress={() => router.push("/(tab)")}>
            <Image
              source={require("@/assets/images/instagram-logo.png")}
              resizeMode="contain"
              style={styles.logoImage}
            />
          </Pressable>
        </View>
        <View style={styles.formContainer}>
          <TextInput
            onChangeText={(value) => (emialRef.current = value)}
            style={styles.InputField}
            placeholder="Enter your email"
            placeholderTextColor={"rgba(0, 0, 0, 0.2)"}
          />
          <TextInput
            onChangeText={(value) => (passwordRef.current = value)}
            style={styles.InputField}
            placeholder="Enter your password"
            placeholderTextColor={"rgba(0, 0, 0, 0.2)"}
            secureTextEntry
          />
          <Pressable onPress={() => router.replace("/forget-password")}>
            <Text style={styles.forgetMessage}>forget password?</Text>
          </Pressable>

          <Pressable onPress={handleLogin} style={styles.submitButton}>
            <Text style={styles.buttonText}>
              {isLoading ? "Loading.." : "Log In"}
            </Text>
          </Pressable>
        </View>
        <View style={styles.ForgetPasswordContainer}>
          <Text style={styles.noAccountLink}>
            Don’t have an account?{" "}
            <Pressable
              onPress={() => router.push("/signup")}
              style={{ alignItems: "center", justifyContent: "center" }}
            >
              <Text style={{ color: "#3797ef",justifyContent:"center",alignItems:"center" }}>Sign up.</Text>
            </Pressable>
          </Text>
        </View>
      </View>
    </View>
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
    width: "100%",
    paddingVertical: hp(1),
    paddingHorizontal: wp(3),
    marginBottom: hp(1.5),
    backgroundColor: "#FAFAFA",
    borderRadius: 5,
  },
  noAccountLink: {
    fontSize: hp(1.5),
    color: "rgba(0, 0, 0, 0.4)",
    fontWeight: "400",
    textAlign: "center",
    alignContent: "center",
    justifyContent: "center",
  },
  forgetMessage: {
    fontSize: hp(1.5),
    color: "#3797ef",
    fontWeight: "400",
    textAlign: "right",
  },
  authContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: wp(4),
  },
  logoImageContainer: {},
  logoImage: {
    height: hp(5),
    objectFit: "contain",
    resizeMode: "contain",
    marginBottom: hp(3),
  },
  innerContainer: {
    width: "100%",
    paddingHorizontal: wp(1),
    justifyContent: "center",
    alignItems: "center",
    padding: 6,
  },
  formContainer: {
    width: "100%",
  },
  ForgetPasswordContainer: {
    alignItems: "center",
    justifyContent:"center"
  },
});
