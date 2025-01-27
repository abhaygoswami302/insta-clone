import { KeyboardAvoidingView, Platform, ScrollView } from "react-native";

const ios = Platform.OS === "ios";
const CustomKeyboardView = ({ children }) => {
  return (
    <KeyboardAvoidingView
      behavior={ios ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <ScrollView
        bounces={false}
        contentContainerStyle={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          width:"auto"
        }}
        showsVerticalScrollIndicator={false}
      >
        {children}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
export default CustomKeyboardView;
