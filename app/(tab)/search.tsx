import React, { useRef } from "react";
import { View, StyleSheet, Animated, ScrollView } from "react-native";
import SearchHeader from "@/components/search/searchHeader";
import SeachQueriescarousel from "@/components/search/seachQueriescarousel";
import SearchGallery from "@/components/search/searchGallery";

const Search: React.FC = () => {
  return (
    <View style={styles.searchMainContainer}>
      <SearchHeader />
      <SeachQueriescarousel />
      <SearchGallery />
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  searchMainContainer: {
    flex: 1,
  },
  searchHeader: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 2,
    backgroundColor: "#fff",
  },
  searchCarousel: {
    position: "absolute",
    top: 100,
    left: 0,
    right: 0,
    zIndex: 1,
  },
  galleryContainer: {
    marginTop: 200,
  },
});
