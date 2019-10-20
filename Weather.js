import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const weatherOptions = {
    Thunderstorm: {
        iconName: "weather-lightning",
        gradient: ["blue", "blue"],
        title: "Thunderstorm",
        subtitle: "Today is Thunderstorm"
    },
    Drizzle: {
        iconName: "weather-pouring",
        gradient: ["blue", "red"],
        title: "Drizzle",
        subtitle: "Today is Drizzle"
    },
    Rain: {
        iconName: "weather-rainy",
        gradient: ["red", "yellow"],
        title: "Rain",
        subtitle: "Today is Rain"
    },
    Snow: {
        iconName: "weather-snowy",
        gradient: ["yellow", "green"],
        title: "Snow",
        subtitle: "Today is Snow"
    },
    Atmosphere: {
        iconName: "weather-hail",
        gradient: ["green", "black"],
        title: "Atmosphere",
        subtitle: "Today is Atmosphere"
    },
    Mist: {
        iconName: "weather-sunset",
        gradient: ["black", "yellow"],
        title: "Mist",
        subtitle: "Today is Mist"
    },
    Smoke: {
        iconName: "weather-lightning-rainy",
        gradient: ["yellow", "blue"],
        title: "Smoke",
        subtitle: "Today is Smoke"
    },
    Haze: {
        iconName: "weather-night",
        gradient: ["blue", "black"],
        title: "Haze",
        subtitle: "Today is Haze"
    },
    Dust: {
        iconName: "weather-partlycloudy",
        gradient: ["indigo", "indigo"],
        title: "Dust",
        subtitle: "Today is Dust"
    },
    Fog: {
        iconName: "weather-fog",
        gradient: ["olive", "olive"],
        title: "Fog",
        subtitle: "Today is Fog"
    },
    Sand: {
        iconName: "weather-sunset-down",
        gradient: ["pink", "pink"],
        title: "Sand",
        subtitle: "Today is Sand"
    },
    Ash: {
        iconName: "weather-sunset-up",
        gradient: ["salmon", "salmon"],
        title: "Ash",
        subtitle: "Today is Ash"
    },
    Squall: {
        iconName: "weather-hurricane",
        gradient: ["tan", "tan"],
        title: "Squall",
        subtitle: "Today is Squall"
    },
    Tornado: {
        iconName: "weather-hurricane",
        gradient: ["brown", "brown"],
        title: "Tornado",
        subtitle: "Today is Tornado"
    },
    Clear: {
        iconName: "weather-sunny",
        gradient: ["orange", "gray"],
        title: "Clear",
        subtitle: "Today is Clear"
    },
    Clouds: {
        iconName: "weather-cloudy",
        gradient: ["black", "gray"],
        title: "Clouds",
        subtitle: "Today is Clouds"
    }
}

export default function Weather({temp, condition}) {
    return (
        <LinearGradient
                colors= {weatherOptions[condition].gradient}
                style={styles.container}
        >
            <StatusBar barStyle="light-content" />  
             <View style={styles.halfContainer}>
                <MaterialCommunityIcons 
                    size={96}
                    name={weatherOptions[condition].iconName}
                    color="white"
                />
                <Text style={styles.temp}> {temp} </Text>
            </View>
        <View style={{...styles.halfContainer, ...styles.textContainer}}>
            <Text style={styles.title}>{weatherOptions[condition].title}</Text>
            <Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
        </View>
        </LinearGradient>
    );
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf([
        "Thunderstorm",
        "Drizzle",
        "Rain",
        "Snow",
        "Atmosphere",
        "Mist",
        "Smoke",
        "Haze",
        "Dust",
        "Fog",
        "Sand",
        "Ash",
        "Squall",
        "Tornado",
        "Clear",
        "Clouds"
    ]).isRequired
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    temp: {
        fontSize: 42,
        color: "white"
    },
    halfContainer: {
        flex: 1,
        justifyContent: "center",
        alignContent: "center"
    },
    title: {
        color: "white",
        fontSize: 44,
        fontWeight: "300",
        marginBottom: 10
    },
    subtitle: {
        fontWeight: "600",
        color: "white",
        fontSize: 24
    },
    textContainer: {
        paddingHorizontal: 20,
        alignItems: "flex-start"
    }
})