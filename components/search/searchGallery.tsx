import React, { useEffect, useRef, useState } from "react";

import { StyleSheet, View, Image, Text, Alert } from "react-native";
import { ResponsiveGrid } from "react-native-flexible-grid";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { originalData } from "@/jsonData/SeachMediaData";
interface DataProp {
  id: number;
  widthRatio?: number;
  heightRatio?: number;
  imageUrl: string;
}

const SearchGallery: React.FC = () => {
  let idCounter = useRef(0);
  const [data, setData] = useState<DataProp[]>([]);

  const generateData = () => {
    let clonedData: DataProp[] = [];

    for (let i = 0; i < 100; i++) {
      const newData = originalData.map((item) => ({
        ...item,
        id: ++idCounter.current,
      }));
      clonedData = [...clonedData, ...newData];
    }

    return clonedData;
  };

  const renderItem = ({ item }: { item: DataProp }) => {
    return (
      <View style={styles.boxContainer}>
        <Image
          source={{ uri: item.imageUrl }}
          style={styles.box}
          resizeMode="cover"
        />
      </View>
    );
  };

  useEffect(() => {
    setData(generateData());
  }, []);

  return (
    <View style={styles.GallerymainContainer}>
      <ResponsiveGrid
        maxItemsPerColumn={3}
        data={data}
        renderItem={renderItem}
        showScrollIndicator={false}
        keyExtractor={(item: DataProp) => item.id.toString()}
        onEndReached={() => Alert.alert("End here")}
      />
    </View>
  );
};

export default SearchGallery;

const styles = StyleSheet.create({
  GallerymainContainer: {
    paddingVertical: hp(1.5),
  },
  boxContainer: {
    flex: 1,
    margin: 1,
  },
  image: {
    width: 100,
    height: 100,
  },
  box: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
  },
  text: {
    color: "white",
    fontSize: 10,
    position: "absolute",
    bottom: 10,
  },
});
