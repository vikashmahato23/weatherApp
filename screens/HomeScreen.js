import React, {  useEffect, useState } from "react";
import { View, Image, SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";
import * as Progress from "react-native-progress";
import { theme } from "../theme";
import { fetchLocationsDetails, fetchWeatherForecastDetails } from "../api/weather";
import { getData, storeData } from "../utils/asyncStorage";
import Forecast from "../components/Forecast";
import WeatherInfo from "../components/WeatherInfo";
import LocationList from "../components/LocationList";
import SearchBar from "../components/SearchBar";

export default function HomeScreen() {
  const [showSearch, setSearch] = useState(false);
  const [locations, setLocations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [weather, setWeather] = useState({});
 const [fetchLoad,setFetchLoad]=useState(false)
  const handleSearch = (search) => {
    if (search && search.length > 1){

      fetchLocationsDetails({ cityName: search }).then((data) => {
      
        if(data.length==0) setFetchLoad(true)
          else{
        setLocations(data)
        setFetchLoad(false)
          }

      });
    }else{
      setLocations([])
    }
  };

  const handleLocation = (locParam) => {
    setLoading(true);
    setSearch(false);
    setLocations([]);
    fetchWeatherForecastDetails({
      cityName: locParam.name,
      days: "7",
    }).then((data) => {
      
      setLoading(false);
      setWeather(data);
      storeData("city", locParam.name);
    });
  };

  useEffect(() => {
    initialfetchWeatherData();
  }, []);

  const initialfetchWeatherData = async () => {
    let myCity = await getData("city");
    let cityName = myCity || "Jamshedpur";
    fetchWeatherForecastDetails({
      cityName,
      days: "7",
    }).then((data) => {
      // console.log(data,"===========>data")
      setWeather(data);
      setLoading(false);
    }).catch((err)=>{
      
      // console.log(err,"============>err")
    });
  };

  return (
    <View style={{ flex: 1, position: "relative" }}>
      <StatusBar style="light" />
      <Image
        blurRadius={70}
        source={require("../assets/bg.jpg")}
        style={{ position: "absolute", width: "100%", height: "100%" }}
      />
      {loading ? (
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Progress.CircleSnail thickness={10} size={140} color="#0bb3b2" />
        </View>
      ) : (
        <SafeAreaView style={{ flex: 1, display: "flex" }}>
          <View style={{ height: "20%", marginHorizontal: 20, zIndex: 0 }}>
            <SearchBar
              showSearch={showSearch}
              setSearch={setSearch}
              handleSearch={handleSearch}
            />
            {locations.length > 0 && showSearch ? (
              <LocationList
              fetchLoad={fetchLoad}
                locations={locations}
                handleLocation={handleLocation}
              />
            ): null}
          </View>
          <WeatherInfo
            location={weather.location}
            current={weather.current}
            weather={weather}
          />
          <Forecast forecast={weather?.forecast?.forecastday} />
        </SafeAreaView>
      )}
    </View>
  );
}
