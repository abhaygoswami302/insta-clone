import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  FlatList,
  Pressable,
  Alert,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

interface itemsProps {
  item: {
    id: string;
    name: string;
    image: string;
  };
}

function StartPage() {
  const data = [
    { id: "1", name: "lorem1", image: "https://picsum.photos/id/621/200/300" },
    { id: "2", name: "lorem2", image: "https://picsum.photos/id/265/200/300" },
    { id: "3", name: "lorem3", image: "https://picsum.photos/id/237/200/300" },
    { id: "4", name: "lorem4", image: "https://picsum.photos/id/235/200/300" },
    { id: "5", name: "lorem5", image: "https://picsum.photos/id/203/200/300" },
    { id: "6", name: "lorem6", image: "https://picsum.photos/id/364/200/300" },
    { id: "7", name: "lorem7", image: "https://picsum.photos/id/366/200/300" },
    { id: "8", name: "lorem8", image: "https://picsum.photos/id/453/200/300" },
    { id: "9", name: "lorem9", image: "https://picsum.photos/id/102/200/300" },
    {
      id: "10",
      name: "lorem10",
      image: "https://picsum.photos/id/237/200/745",
    },
    {
      id: "11",
      name: "lorem11",
      image: "https://picsum.photos/id/789/200/300",
    },
    {
      id: "12",
      name: "lorem12",
      image: "https://picsum.photos/id/143/200/300",
    },
    {
      id: "13",
      name: "lorem13",
      image: "https://picsum.photos/id/456/200/300",
    },
    {
      id: "14",
      name: "lorem14",
      image: "https://picsum.photos/id/123/200/300",
    },
    {
      id: "15",
      name: "lorem15",
      image: "https://picsum.photos/id/741/200/300",
    },
    {
      id: "16",
      name: "lorem16",
      image: "https://picsum.photos/id/789/200/300",
    },
  ];
  const renderItems = ({ item }: itemsProps) => {
    return (
      <View style={styles.Items}>
        <Pressable onPress={() => {}}>
          <Image
            source={{ uri: item.image }}
            style={styles.image}
            className="rounded-full w-7 h-7"
          />
        </Pressable>
        <Text style={styles.ItemsTitle}>{item.name}</Text>
      </View>
    );
  };
  return (
    <View
      // source={require("../assets/images/bg-site.jpg")}
      // resizeMode={"cover"}
      style={{ flex: 1 }}
      className="px-2"
    >
      <View style={styles.headerView}>
        <Pressable>
          <Image
            source={require("../assets/images/Camera Icon.png")}
            width={105}
            height={28}
            style={styles.logoDem}
          />
        </Pressable>
        <Pressable>
          <Image
            source={require("../assets/images/Instagram Logo.png")}
            width={105}
            height={28}
            style={styles.logoDem}
          />
        </Pressable>

        <View style={styles.ImageStyle}>
          <Pressable>
            <Image
              source={require("../assets/images/IGTV.png")}
              width={105}
              height={28}
              style={styles.logoDem}
            />
          </Pressable>
          <Pressable>
            <Image
              source={require("../assets/images/Messanger.png")}
              width={105}
              height={28}
              style={styles.logoDem}
            />
          </Pressable>
        </View>
      </View>
      <FlatList
        data={data}
        renderItem={renderItems}
        horizontal
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={styles.seperator} />}
      />

      {/* <ActivityIndicator size={"large"} color={"gray"}/> */}
    </View>
  );
}

export default StartPage;

const styles = StyleSheet.create({
  contentContainer: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
    gap: 10,
  },
  gradientBorder: {
    width: 100,
    height: 100,
    borderRadius: 50,
    padding: 3, // Space between gradient and inner content
    justifyContent: "center",
    alignItems: "center",
  },
  headerView: {
    paddingHorizontal: 5,
    paddingVertical: 10,
    justifyContent: "space-between",
    alignContent: "center",
    flexDirection: "row",
    gap: 2,
    borderBottomWidth: 1,
    borderBottomColor: "#E5E5E5",
    borderStyle: "solid",
  },
  logoDem: {
    resizeMode: "contain",
    alignSelf: "center",
  },
  ImageStyle: {
    flexDirection: "row",
    gap: 20,
    alignItems: "center",
  },
  image: {
    height: 70,
    width: 70,
    borderRadius: 99999,
    objectFit: "cover",
    backgroundColor: "#ffffff",
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: "#f5f5f5",
  },
  Items: {
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: hp(1),
  },
  appTitle: {
    fontSize: hp(3),
    color: "#ffffff",
    textAlign: "center",
    fontWeight: "700",
  },
  ItemsTitle: {
    fontSize: hp(1.7),
    color: "#101010",
    textAlign: "center",
    fontWeight: "500",
    textTransform: "capitalize",
  },
  seperator: {
    width: 10,
  },
});
