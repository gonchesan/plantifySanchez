import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

import { useUpdateAddressMutation } from "@/services/userService";
import Spinner from "@/components/core/Spinner.jsx";
import Button from "@/components/core/Button.jsx";

const LocationPicker = () => {
  const [location, setLocation] = useState({ longitude: 0, latitude: 0 });
  const [error, setError] = useState("");
  const [address, setAddress] = useState("");
  const [triggerUpdateAddress, { isLoading }] = useUpdateAddressMutation();
  const localId = useSelector((state) => state.authReducer.user.localId);
  const navigation = useNavigation();

  const getCurrentLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      setError("Permission to access location was denied");
      return;
    }

    let currentLocation = await Location.getCurrentPositionAsync({});
    setLocation({
      latitude: currentLocation.coords.latitude,
      longitude: currentLocation.coords.longitude,
    });
    await fetchAddress(
      currentLocation.coords.latitude,
      currentLocation.coords.longitude
    );
  };

  useEffect(() => {
    (async () => {
      await getCurrentLocation();
    })();
  }, []);

  const fetchAddress = async (latitude, longitude) => {
    const reverseGeocodingUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${longitude},${latitude}.json?access_token=${process.env.EXPO_PUBLIC_MAP_BOX_TOKEN}`;
    try {
      const response = await fetch(reverseGeocodingUrl);
      const data = await response.json();
      if (data.features && data.features.length > 0) {
        setAddress(data.features[0].place_name);
      }
    } catch (error) {
      console.error("Error fetching address:", error);
    }
  };

  const handleMapPress = async (event) => {
    const { latitude, longitude } = event.nativeEvent.coordinate;
    setLocation({ latitude, longitude });
    await fetchAddress(latitude, longitude);
  };

  const handleConfirmLocation = () => {
    triggerUpdateAddress({ localId, address, location });
    navigation.navigate("profile");
  };

  return (
    <View style={styles.container}>
      {isLoading ? <Spinner /> : null}
      {location.latitude && location.longitude ? (
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: location.latitude,
            longitude: location.longitude,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          }}
          onPress={handleMapPress}
        >
          <Marker
            coordinate={{
              latitude: location.latitude,
              longitude: location.longitude,
            }}
            title="Selected Location"
          />
        </MapView>
      ) : (
        <Text>{error || "Fetching location..."}</Text>
      )}

      {address ? <Text>{`Address: ${address}`}</Text> : null}

      <Button onPress={handleConfirmLocation}>Confirm Location</Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingVertical: 24,
  },
  map: {
    flex: 1,
  },
  loadingOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default LocationPicker;
