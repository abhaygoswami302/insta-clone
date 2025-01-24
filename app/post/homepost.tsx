import { FontAwesome } from "@expo/vector-icons";
import { CameraView, CameraType, useCameraPermissions } from "expo-camera";
import { Stack, useRouter } from "expo-router";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useState } from "react";
import { Button, StyleSheet, Text, View, Image, Pressable } from "react-native";
import { FlexGrid } from "react-native-flexible-grid";

interface itemProps {
  item: {
    imageUrl: string;
    text: string;
  };
}

export default function HomePost() {
  const [facing, setFacing] = useState<CameraType>("back");
  const [zoomDem, setZoomDem] = useState<number>(0);
  const [permission, requestPermission] = useCameraPermissions();
  const router = useRouter();

  if (!permission) {
    // Camera permissions are still loading.
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <View style={styles.container}>
        <Text style={styles.message}>
          We need your permission to show the camera
        </Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  function toggleCameraFacing() {
    setFacing((current) => (current === "back" ? "front" : "back"));
  }

  const renderItem = ({ item }: itemProps) => (
    <View style={styles.boxContainer}>
      <Image
        source={{ uri: item.imageUrl }}
        style={styles.box}
        resizeMode="cover"
      />
      <Text style={styles.text}>{item.text}</Text>
    </View>
  );

  const handleIncreaseZoom = () => {
    if (zoomDem >= 1) {
      return setZoomDem(1);
    } else {
      setZoomDem(zoomDem + 0.1);
    }
  };
  const handleDecreaseZoom = () => {
    console.log(zoomDem);
    if (zoomDem <= 0) {
      return setZoomDem(0);
    } else {
      setZoomDem(zoomDem - 0.1);
    }
  };
  const data = [
    {
      imageUrl: "https://picsum.photos/200/300?random=1",
      widthRatio: 1,
      heightRatio: 1,
      text: "Item 1",
      id: 1,
    },
    {
      imageUrl: "https://picsum.photos/200/300?random=2",
      widthRatio: 2,
      heightRatio: 1,
      text: "Item 2",
      id: 2,
    },
    {
      imageUrl: "https://picsum.photos/200/300?random=3",
      widthRatio: 2,
      heightRatio: 1,
      text: "Item 3",
      id: 3,
    },
  ];

  return (
    <View style={styles.container}>
      <View>
        <Pressable onPress={() => router.back()}>
          <FontAwesome name="arrow-circle-left" color={"#262626"} size={25} />
        </Pressable>
      </View>
      <CameraView style={styles.camera} facing={facing} zoom={0}>
        <View>
          <View>
            <Pressable style={styles.button} onPress={toggleCameraFacing}>
              <Text style={styles.text}>Flip Camera</Text>
            </Pressable>
          </View>

          <View style={styles.ZoomContainer}>
            <View>
              <Pressable style={styles.button} onPress={handleIncreaseZoom}>
                <FontAwesome name="plus-circle" size={20} color={"#ffffff"} />
              </Pressable>
            </View>
            <View>
              <Text style={styles.text}>Zoom</Text>
            </View>
            <View>
              <Pressable onPress={handleDecreaseZoom}>
                <FontAwesome name="minus-circle" size={20} color={"#ffffff"} />
              </Pressable>
            </View>
          </View>
        </View>
      </CameraView>

      <View style={styles.mediagalleryContainer}>
        <FlexGrid
          keyExtractor={(item) => item.id.toString()}
          maxColumnRatioUnits={60}
          itemSizeUnit={60}
          data={data}
          virtualizedBufferFactor={2}
          renderItem={renderItem}
          virtualization={true}
          showScrollIndicator={false}
          style={{ flex: 1 }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  boxContainer: {},
  box: {},
  message: {
    textAlign: "center",
    paddingBottom: 10,
  },
  camera: {
    flex: 1,
    height: hp("100%"),
    justifyContent: "flex-end",
  },
  buttonContainer: {
    flex: 1,
    marginBottom: "auto",
    flexDirection: "row",
    backgroundColor: "transparent",
    margin: 64,
    alignContent: "flex-end",
    justifyContent: "space-between",
  },
  button: {
    flex: 1,
    alignSelf: "flex-end",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
  mediagalleryContainer: {
    backgroundColor: "red",
  },
  ZoomContainer: {
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center",
    gap: 3,
  },
});
