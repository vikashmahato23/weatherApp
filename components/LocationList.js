import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function LocationList({ locations, handleLocation, fetchLoad }) {
  return (
    <View
      style={{
        width: "100%",
        backgroundColor: "#ccc",
        top: 40,
        borderRadius: 20,
      }}
    >
      {locations.length > 0 && !fetchLoad? (
        locations.map((loc, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => handleLocation(loc)}
            style={{
              flexDirection: "row",
              alignItems: "center",
              padding: 10,
              borderBottomWidth: index + 1 !== locations.length ? 1 : 0,
              borderBottomColor: "#ddd",
            }}
          >
            <Ionicons name="location" size={20} color="gray" />
            <Text style={{ marginLeft: 10, fontSize: 18, color: "black" }}>
              {loc.name}, {loc.country}
            </Text>
          </TouchableOpacity>
        ))
      ) : (
        <Text style={{ marginLeft: 10, fontSize: 18, color: "black" ,padding:10 }}>
          No Found city
        </Text>
      )}
    </View>
  );
}
