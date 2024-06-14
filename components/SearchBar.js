import React, { useState } from "react";
import { View, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { debounce } from "lodash";
import { theme } from "../theme";

const SearchBar = ({ showSearch, setSearch, handleSearch }) => {
  const [searchText, setSearchText] = useState("");

  
  const handleTextDebounce = debounce((text) => {
    handleSearch(text);
  }, 700);

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: showSearch ? theme.bgWhite(0.2) : "transparent" },
      ]}
    >
      {showSearch && (
        <TextInput
          value={searchText}
          onChangeText={(text) => {
            setSearchText(text);
            handleTextDebounce(text);
          }}
          placeholder="Search city"
          placeholderTextColor="lightgray"
          style={styles.input}
          accessibilityLabel="Search input"
          accessibilityHint="Type to search for cities"
        />
      )}
      <TouchableOpacity
        onPress={() => {
          setSearch(!showSearch);
          setSearchText("");
        }}
        style={styles.iconContainer}
        accessibilityLabel={showSearch ? "Close search" : "Open search"}
      >
        <Ionicons
          name={showSearch ? "close" : "search"}
          size={25}
          color="white"
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    borderRadius: 999,
    top: 35,
    zIndex: 1,
    paddingHorizontal: 10,
  },
  input: {
    paddingLeft: 6,
    height: 50,
    flex: 1,
    color: "white",
  },
  iconContainer: {
    borderRadius: 999,
    padding: 10,
    margin: 5,
    backgroundColor: theme.bgWhite(0.3),
  },
});

export default SearchBar;
