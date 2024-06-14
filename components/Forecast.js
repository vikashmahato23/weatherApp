import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { weatherImages } from "../constants";
import { theme } from "../theme";

export default function Forecast({ forecast }) {

  return (
    <View style={{ marginBottom: 20,position:"fixed" }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginHorizontal: 20,
        }}
      >
        <Ionicons name="calendar" size={22} color="white" />
        <Text style={{ color: "white", fontSize: 18, marginLeft: 10 }}>
          Daily forecast
        </Text>
      </View>
      <ScrollView
        horizontal
        contentContainerStyle={{ paddingHorizontal: 15 }}
        showsHorizontalScrollIndicator={false}
      >
        {forecast.map((item, index) => {
          const date = new Date(item.date);
          const options = { weekday: "long" };
          let dayName = date.toLocaleDateString("en-US", options);
          dayName = dayName.split(",")[0];
       
          return (
            <View
              key={index}
              style={{
                justifyContent: "center",
                alignItems: "center",
                width: 100,
                borderRadius: 20,
                paddingVertical: 10,
                marginRight: 10,
                backgroundColor: theme.bgWhite(0.15),
              }}
            >
              <Image
                source={weatherImages[item?.day?.condition?.text || "other"]}
                style={{ width: 50, height: 50 }}
              />
              <Text style={{ color: "white" }}>{dayName}</Text>
              <Text
                style={{ color: "white", fontSize: 18, fontWeight: "bold" }}
              >
                {item?.day?.avgtemp_c}&#176;
              </Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}
