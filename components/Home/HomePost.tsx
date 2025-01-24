import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  Dimensions,
  Pressable,
} from "react-native";
import React, { useEffect, useState } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Entypo } from "@expo/vector-icons";
import { userPostData } from "@/jsonData/PostData";
interface mediaItemProps {
  item: {
    id: string;
    mediaURL: string;
  };
}

interface PostItemProps {
  item: {
    id: string;
    username: string;
    profileImg: string;
    location: string;
    media: { id: string; mediaURL: string }[];
    lastLikedBy: string;
    totalLikes: number;
    lastLikedUserProfile: string;
  };
}

const HomePost = () => {
  const screenWidth = Dimensions.get("window").width;
  const [userData, setUserData] = useState<PostItemProps | null>();
  useEffect(() => {
    setUserData(userPostData);
  }, []);

  const renderMediaItem = ({ item }: mediaItemProps) => {
    return (
      <View style={styles.ImagesContainer} key={item.id}>
        <Image
          source={{ uri: item.mediaURL }}
          style={[styles.ImageStyle, { width: screenWidth }]}
        />
      </View>
    );
  };

  const renderItem = ({ item }: PostItemProps) => {
    const {
      id,
      lastLikedBy,
      location,
      media,
      totalLikes,
      username,
      lastLikedUserProfile,
      profileImg,
    } = item;
    return (
      <View key={parseInt(id)}>
        <View style={styles.PostHeader}>
          <View style={styles.profileImageContainer}>
            <View>
              <Image source={{ uri: profileImg }} style={styles.ImageWidth} />
            </View>
            <View>
              <Text style={styles.headerName}>{username}</Text>
              <Text style={styles.headerLocation}>{location}</Text>
            </View>
          </View>
          <View style={styles.PostHeaderOptions}>
            <Entypo
              name="dots-three-horizontal"
              size={24}
              style={styles.OptionIcon}
            />
          </View>
        </View>
        <FlatList
          data={media}
          renderItem={renderMediaItem}
          keyExtractor={(mediaitem) => mediaitem.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled={true}
        />
        <View style={styles.PostFooterConatiner}>
          <View style={styles.InteractionMenu}>
            <View style={styles.ReactButton}>
              <Pressable>
                <Image
                  source={require("@/assets/images/heart-react.png")}
                  width={30}
                  height={30}
                  style={styles.ReactIocns}
                />
              </Pressable>
              <Pressable>
                <Image
                  source={require("@/assets/images/comment.png")}
                  width={30}
                  height={30}
                  style={{ resizeMode: "contain" }}
                />
              </Pressable>
              <Pressable>
                <Image
                  source={require("@/assets/images/paper-plane.png")}
                  width={30}
                  height={30}
                  style={{ resizeMode: "contain" }}
                />
              </Pressable>
            </View>
            <View style={styles.dotContainer}>
              <Entypo
                name="dot-single"
                size={24}
                style={styles.OptionIcon}
                color={"#3897F0"}
              />
              <Entypo
                name="dot-single"
                size={24}
                style={styles.OptionIcon}
                color={"#e5e5e5"}
              />
              <Entypo
                name="dot-single"
                size={24}
                style={styles.OptionIcon}
                color={"#e5e5e5"}
              />
            </View>
            <View>
              <Image source={require("@/assets/images/bookmark.png")} />
            </View>
          </View>
          <View style={styles.peopalConatiner}>
            <Image
              source={{ uri: lastLikedUserProfile }}
              style={styles.LikedByImage}
            />
            <View>
              <Text>
                Liked By{" "}
                <Text style={{ fontWeight: "500" }}>{lastLikedBy} </Text>
                and{" "}
                <Text style={{ fontWeight: "500" }}>{totalLikes} others</Text>
              </Text>
            </View>
          </View>
          <View style={styles.captionConatiner}>
            <Text>
              <Text style={{ fontWeight: "700" }}>{username}</Text> Lorem ipsum,
              dolor sit amet consectetur adipisicing elit. Laborum non
              accusantium ab.
            </Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.postContainer}>
      <FlatList
        data={userData}
        renderItem={renderItem}
        scrollsToTop={true}
        keyExtractor={(postId) => postId.id}
      />
    </View>
  );
};

export default HomePost;

const styles = StyleSheet.create({
  postContainer: {},
  PostHeader: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: hp(1.3),
    paddingHorizontal: wp(2),
  },
  profileImageContainer: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
  ImageWidth: {
    width: wp(13),
    height: hp(6),
    borderRadius: 1000,
  },
  PostHeaderOptions: {},
  headerName: {
    fontSize: hp(2),
    color: "#262626",
    fontWeight: "600",
  },
  OptionIcon: {
    color: "#262626",
  },
  headerLocation: {
    fontSize: hp(1.5),
    color: "#262626",
    fontWeight: "400",
  },
  ImagesContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f8f8f8",
    height: hp("50%"),
  },
  ImageStyle: {
    width: wp("100%"),
    height: hp("100%"),
    resizeMode: "contain",
  },
  PostFooterConatiner: {
    paddingVertical: hp(1.2),
    paddingHorizontal: wp(2.5),
  },
  InteractionMenu: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 3,
    alignItems: "center",
  },
  ReactButton: {
    flexDirection: "row",
    gap: wp(4),
    alignItems: "center",
    justifyContent: "center",
  },
  dotContainer: {
    marginLeft: -50,
    flexDirection: "row",
    gap: wp(0.3),
    alignContent: "center",
    justifyContent: "center",
  },
  ReactIocns: {
    resizeMode: "contain",
  },
  captionConatiner: {
    flexDirection: "row",
    gap: 3,
    marginTop: 5,
  },
  peopalConatiner: {
    flexDirection: "row",
    gap: 10,
    marginTop: hp(1),
  },
  LikedByImage: {
    width: 20,
    height: 20,
    borderRadius: 9999,
    objectFit: "cover",
    resizeMode: "cover",
  },
});
