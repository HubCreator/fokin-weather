import React from 'react';
import { Alert } from "react-native";
import Loading from "./Loading.js";
import Weather from "./Weather.js";
import * as Location from "expo-location";
import  axios from "axios";

const API_KEY = "6002ebea69c602ee065002e7ae484f26";

export default class extends React.Component {
  state = {
    isLoading: true,
    condition: "Clear"
  };

  getWeather = async(latitude, longitude) => {
    const { 
      data: { 
        main: { temp } ,
        weather
      } 
    } = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${API_KEY}&units=metric&units=metric`);
  
    this.setState({
      isLoading: false,
      condition: weather[0].main,
      temp
      });
  };

  getLocation = async () => {
    try {
      await Location.requestPermissionsAsync();
      const {
        coords: { latitude, longitude }
      } = await Location.getCurrentPositionAsync();
      this.getWeather(latitude, longitude);
      //this.setState({ isLoading: false });
    } catch (error) {
      Alert.alert("Can't find you..", "So bad");
    }
  };

  componentDidMount() {
    this.getLocation();
  }

  render() {
    const { isLoading, temp, condition } = this.state;
    return isLoading ?  <Loading /> : <Weather temp={Math.round(temp)} condition={condition} />;
  }
}
