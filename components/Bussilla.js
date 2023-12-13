import React, { useState } from 'react';
import { View, TextInput, Button, Alert, StyleSheet, ActivityIndicator, KeyboardAvoidingView, Platform } from 'react-native';
import { fetchStopIdByNameOrNumber } from '../Api';
import { fetchStopsByRadius } from '../Api';
import { useFocusEffect } from '@react-navigation/native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import * as Location from 'expo-location';

function Bussilla({ navigation }) {
  const [query, setQuery] = useState('');
  const [region, setRegion] = useState(null);
  const [nearbyStops, setNearbyStops] = useState([]);
  const [timetables, setTimetables] = useState([]);

  // User location and permissions
  useFocusEffect(
    React.useCallback(() => {
      (async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          Alert.alert('Lupa hylätty', 'Sovellus tarvitsee luvan sijainnin käyttöön!');
          return;
        }

        let location = await Location.getCurrentPositionAsync({});
        setRegion({
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        });
      })();
      return () => { };
    }, [])
  );

  // Initial stop-id fetch by using name or number of the stop
  const handleSearch = async () => {
    try {
      const stops = await fetchStopIdByNameOrNumber(query);
      if (stops.length > 0) {
        navigation.navigate('Bussit', { stopId: stops[0].gtfsId });
      } else {
        Alert.alert('Virhe', 'Pysäkkiä ei löydetty, yritä uudella numerolla!');
      }
    } catch (error) {
      console.error("Error fetching stops:", error);
      Alert.alert('Virhe', 'Pysäkkitietojen haku epäonnistui!');
    }
  };

  const handleMapPress = async (event) => {
    const { latitude, longitude } = event.nativeEvent.coordinate;
    try {
      // Query nearby bus stops using Digitransit API
      const stops = await fetchStopsByRadius(latitude, longitude, 30);
      if (stops.length > 0) {
        // Assuming you want to navigate to the first stop in the list
        navigation.navigate('Bussit', { stopId: stops[0].gtfsId });
        //setNearbyStops(stops);
      } else {
        Alert.alert('Pysäkkiä ei löydetty', 'Ei pysäkkejä tällä alueella, tai tarkkuus ei ollut riittävä!');
      }
    } catch (error) {
      console.error('Error fetching stops:', error);
      Alert.alert('Virhe', 'Kohteen pysäkkien haku epäonnistui!');
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View style={styles.content}>
        <TextInput
          style={styles.input}
          placeholder="Syötä pysäkin numero (esim. 11)"
          value={query}
          onChangeText={setQuery}
        />
        <View style={styles.buttonContainer}>
          <Button title="Hae aikataulu" onPress={handleSearch} color="#0B3B24" />
        </View>
      </View>
      {region ? (
        <View style={styles.mapContainer}>
          <MapView
            provider={PROVIDER_GOOGLE}
            style={styles.map}
            region={region}
            showsUserLocation={true}
            onPress={handleMapPress}
          />
        </View>
      ) : (
        <ActivityIndicator size="large" color="#0000ff" />
      )}
    </KeyboardAvoidingView>
  );
}

// Styling
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#F7F2E0',
  },
  content: {
    flex: 1,
  },
  input: {
    borderColor: '#6E6E6E',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  buttonContainer: {
    marginBottom: 10,
  },
  listItem: {
    backgroundColor: 'f0f0f0',
    padding: 15,
    borderRadius: 5,
    marginVertical: 8,
  },
  listItemText: {
    fontSize: 16,
  },
  stopItem: {
    marginVertical: 8,
  },
  stopItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 8,
  },
  mapContainer: {
    height: 300,
    width: '100%',
    borderRadius: 15,
    overflow: 'hidden',
  },
  map: {
    height: '100%',
    width: '100%',
  },
});

export default Bussilla;