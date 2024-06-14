import React from "react";
import { View, Text, Image } from "react-native";
import { weatherImages } from "../constants";


export default function WeatherInfo({ location, current, weather }) {
  console.log(weatherImages[current?.condition?.text],"===========>jkdfdf",current)
  return (
    <View
      style={{
        marginHorizontal: 20,
        justifyContent: "space-around",
        flex: 1,
        marginBottom: 20,
      }}
    >
      <Text
        style={{
          textAlign: "center",
          fontSize: 24,
          fontWeight: "bold",
          color: "white",
        }}
      >
        {location?.name},{" "}
        <Text style={{ fontSize: 18, fontWeight: "600", color: "gray" }}>
          {location?.country}
        </Text>
      </Text>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Image
          source={weatherImages[current?.condition?.text?current?.condition?.text: "other"]}
          style={{ width: 80, height: 80 }}
        />
      </View>
      <View style={{ marginTop: 20 }}>
        <Text
          style={{
            textAlign: "center",
            fontSize: 60,
            fontWeight: "bold",
            color: "white",
            marginLeft: 20,
          }}
        >
          {current?.temp_c}&#176;
        </Text>
        <Text style={{ textAlign: "center", fontSize: 24, color: "white" }}>
          {current?.condition?.text}
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginHorizontal: 20,
          marginTop: 20,
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image
            source={require("../assets/icons/wind.png")}
            style={{ width: 24, height: 24 }}
          />
          <Text style={{ color: "white", fontWeight: "bold", marginLeft: 10 }}>
            {current?.wind_kph}km
          </Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image
            source={weatherImages[current?.condition?.text || "other"]}
            style={{ width: 24, height: 24 }}
          />
          <Text style={{ color: "white", fontWeight: "bold", marginLeft: 10 }}>
            {current?.humidity}%
          </Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image
            source={require("../assets/icons/sun.png")}
            style={{ width: 24, height: 24 }}
          />
          <Text style={{ color: "white", fontWeight: "bold", marginLeft: 10 }}>
            {weather?.forecast?.forecastday[0]?.astro?.sunrise}
          </Text>
        </View>
      </View>
    </View>
  );
}
