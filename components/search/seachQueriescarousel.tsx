import { View, Text, StyleSheet, FlatList } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { TopSearchQueriesData } from "@/jsonData/TopSearchQueries";
import { FontAwesome } from "@expo/vector-icons";

interface itemProps {
  item: {
    id: string;
    hasIcon: boolean;
    text: string;
    name: string;
  };
}

const SeachQueriescarousel: React.FC = () => {
  const renderItem = ({ item }: itemProps) => {
    const { hasIcon, id, name, text } = item;
    return (
      <View style={styles.BoxContainer} key={id}>
        <Text style={styles.TextQuery}>{text}</Text>
      </View>
    );
  };
  return (
    <View style={styles.searchQueryContainer}>
      <FlatList
        data={TopSearchQueriesData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={styles.contentSeprator} />}
      />
    </View>
  );
};

export default SeachQueriescarousel;

const styles = StyleSheet.create({
  searchQueryContainer: {
    paddingLeft: hp(1.5),
  },
  BoxContainer: {
    backgroundColor: "#ffffff",
    width: "auto",
    flexDirection: "row",
    paddingHorizontal: wp(3),
    paddingVertical: hp(0.7),
    borderRadius: 8,
    marginTop: hp(0.8),
    gap: wp(0.2),
  },
  contentSeprator: {
    width: 8,
  },
  TextQuery: {
    fontWeight: "500",
    textTransform:"capitalize"
  },
});
