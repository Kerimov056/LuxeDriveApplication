import React, { useEffect, useState } from 'react'
import { Style } from "./SearchStyle";
import { View, Text, Button, Modal, TextInput, Pressable, TouchableOpacity } from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';
import { MapStyle } from "./MapStyle";
import * as Location from 'expo-location';
import axios from "axios";
import { Google_Maps_Api_Key } from "../../Data/Data";

const Search = () => {

    const [markers, setMarkers] = useState([
        {
            lat: 40.382957,
            lng: 49.806150,
            title: 'Mekan 1',
            description: 'Salam Burda Sizin zovqunuz uygun her bir masin var.',
            image: 'https://i.pinimg.com/736x/c1/04/79/c10479f256bbbf06d3825ad4de726ff1.jpg',
        },
        {
            lat: 40.399519,
            lng: 49.829924,
            title: 'Mekan 2',
            description: 'Salam Burda Sizin zovqunuz uygun her bir masin var.',
            image: 'https://i.pinimg.com/564x/54/6b/9e/546b9e2abede0ec06d2dd771843f2017.jpg',
        },
        {
            lat: 40.382255,
            lng: 49.832319,
            title: 'Mekan 3',
            description: 'Salam Burda Sizin zovqunuz uygun her bir masin var.',
            image: 'https://i.pinimg.com/564x/fe/55/e9/fe55e9f5c74339e73a6171f3f84106de.jpg',
        },
    ]);

    const [serachCity, setSerachCity] = useState('');
    const [startLocation, setStartLocation] = useState({ lat: 39.9334, lng: 32.8597 });
    const [modalVisible, setModalVisible] = useState(true);

    const handleLocationPermission = async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            Alert.alert('Permission Denied', 'You must grant permission for location access.');
            setModalVisible(false);
            return;
        }

        let location = await Location.getCurrentPositionAsync({});
        setStartLocation({ lat: location.coords.latitude, lng: location.coords.longitude });
        setModalVisible(false);
    };
    useEffect(() => {
    }, [startLocation]);


    const fetchCoordinates = async (cityName) => {
        try {
            const response = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${cityName}&key=${Google_Maps_Api_Key}`);
            const { lat, lng } = response.data.results[0].geometry.location;
            setStartLocation({ lat, lng });
        } catch (error) {
            console.error("Error fetching coordinates: ", error);
        }
    };

    const handleSearch = () => {
        fetchCoordinates(serachCity);
    };

    return (
        <View style={Style.container}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={[Style.centeredView]}>
                    <View style={[Style.modalView]}>
                        <Text style={[Style.modalText]}>We want to access your location, do you allow it?</Text>
                        <View style={[Style.accesView]}>
                            <Pressable onPress={handleLocationPermission}>
                                <View style={[Style.yesAcces]}>
                                    <Text>Allow</Text>
                                </View>
                            </Pressable>
                            <Pressable onPress={() => setModalVisible(false)}>
                                <View style={[Style.noAcces]}>
                                    <Text>Block</Text>
                                </View>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </Modal>
            <TextInput
                maxLength={40}
                autoCapitalize='words'
                dataDetectorTypes='address'
                inlineImageLeft='search_icon'
                enterKeyHint='search'
                placeholderTextColor={'#09552A'}
                placeholder='  Search City'
                value={serachCity}
                onChangeText={city => setSerachCity(city)}
                style={[Style.searchCityInput]} />
            <Pressable onPress={handleSearch}>
                <View
                    style={[Style.searchCitybutton]}>
                    <Text style={Style.searchCitybuttonText}>Search</Text>
                </View>
            </Pressable>
            <MapView
                // onPress={(e) => setMarkers([...markers, { lat: e.nativeEvent.coordinate.latitude, lng: e.nativeEvent.coordinate.longitude }])}
                key={startLocation.lat}
                initialRegion={{
                    latitude: startLocation.lat,
                    longitude: startLocation.lng,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
                customMapStyle={MapStyle}
                style={Style.map} >
                {
                    markers.map((e, i) => (
                        <Marker
                            key={i}
                            pinColor='black'
                            title={e.title}
                            // image={{ uri: e.image }}
                            description={e.description}
                            coordinate={{ latitude: e.lat, longitude: e.lng }} >
                        </Marker>
                    ))
                }
            </MapView>

        </View>
    )
}

export default Search