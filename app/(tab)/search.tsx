import { View, StyleSheet } from "react-native";
import React from "react";
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
  searchMainContainer: {},
});
