import { View, Text } from "react-native";
import { useState } from "react";
import Onboarding from "@/components/profile/Onboarding";



const Profile = () => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [total, setTotal] = useState<number>(4);
  return (
    <View>
      <Onboarding
        total={total}
        selectedIndex={selectedIndex}
        onIndexChange={(index: number) => setSelectedIndex(index)}
      />
    </View>
  );
};

export default Profile;
