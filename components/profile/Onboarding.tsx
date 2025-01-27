import { View, Text, Pressable, PressableProps } from "react-native";
import Animated, {
  AnimatedProps,
  FadeInLeft,
  FadeOutDown,
} from "react-native-reanimated";
import React from "react";

type OnboardingProps = {
  total: number;
  selectedIndex: number;
  onIndexChange: (index: number) => void;
};

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

function Button({ children, style, ...rest }: AnimatedProps<PressableProps>) {
  return (
    <AnimatedPressable
      style={[
        {
          height: _buttonHeight,
          borderRadius: _buttonHeight / 2,
          justifyContent: "center",
          paddingHorizontal: _buttonHeight,
        },
        style,
      ]}
      entering={FadeInLeft.springify().damping(80).stiffness(200)}
      exiting={FadeOutDown.springify().damping(80).stiffness(200)}
      {...rest}
    >
      {children}
    </AnimatedPressable>
  );
}

const _spacing = 8;
const _buttonHeight = 42;

const Onboarding = ({
  total,
  onIndexChange,
  selectedIndex,
}: OnboardingProps) => {
  return (
    <View style={{ padding: _spacing }}>
      <Text>Onboarding Step: {selectedIndex + 1} of {total}</Text>
      <View style={{ flexDirection: "row", gap: _spacing }}>
        {selectedIndex > 0 && (
          <Button
            style={{
              backgroundColor: "#dddddd",
            //   width: 80,
            }}
            onPress={() => {
              onIndexChange(selectedIndex - 1);
            }}
          >
            <Text style={{ textAlign: "center" }}>Back</Text>
          </Button>
        )}
        <Button
          onPress={() => {
            if (selectedIndex < total) {
              onIndexChange(selectedIndex + 1);
            }
          }}
          style={{
            backgroundColor: "#036BFB",
            flex: selectedIndex > 0 ? 1 : undefined, 
          }}
        >
          <Text style={{ color: "#ffffff", textAlign: "center" }}>
            {selectedIndex === total ? "Finish" : "Continue"}
          </Text>
        </Button>
      </View>
    </View>
  );
};

export default Onboarding;
