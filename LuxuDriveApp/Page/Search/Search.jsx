import React, { useEffect, useState } from 'react'
import { Style } from "./SearchStyle";
import { View, Text, ActivityIndicator, Modal, TextInput, Pressable, ScrollView, ImageBackground } from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';
import { MapStyle } from "./MapStyle";
import * as Location from 'expo-location';
import axios from "axios";
import { Google_Maps_Api_Key, UNSPLASH_API_KEY } from "../../Data/Data";
import SearchCarResponse from "./SearchCarResponse.jsx";
// import KxImage from "../../Image/Kkx.jpg";


const Search = () => {

    const [markers, setMarkers] = useState([
        {
            lat: 40.382957,
            lng: 49.806150,
            image: 'https://i.pinimg.com/564x/69/41/de/6941def2b5fb6e42356eb98ac9fc7141.jpg',
            marka: 'BMW',
            model: 'E60',
            year: 2021
        },
        {
            lat: 40.344265,
            lng: 49.751288,
            image: 'https://scontent.fgyd20-1.fna.fbcdn.net/v/t39.30808-6/417369807_273100269119025_831489183917268021_n.jpg?stp=dst-jpg_p843x403&_nc_cat=105&ccb=1-7&_nc_sid=3635dc&_nc_ohc=hq4DPkCHocgAX_j4a2v&_nc_ht=scontent.fgyd20-1.fna&oh=00_AfBO4E-nCXQUZl37QwuoB0H_nkw_U9xt_TlZHKcT4h1HeQ&oe=659C7BA6',
            marka: 'Hyundai',
            model: 'i40',
            year: 2012
        },
        {
            lat: 55.3781,
            lng: 3.4360,
            image: 'https://i.pinimg.com/564x/77/e8/cc/77e8ccbc2ca241747b21967d1c54b345.jpg',
            marka: 'BMW',
            model: 'M3',
            year: 2014
        },
    ]);

    const [serachCity, setSerachCity] = useState('');
    const [startLocation, setStartLocation] = useState({ lat: 39.9334, lng: 32.8597 });
    const [modalVisible, setModalVisible] = useState(true);
    const [activityIndicatorState, setActivityIndicatorState] = useState(false);

    const [mapWidth, setMapWidth] = useState(false);


    const handleLocationPermission = async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            Alert.alert('Permission Denied', 'You must grant permission for location access.');
            setModalVisible(false);
            return;
        }

        let location = await Location.getCurrentPositionAsync({});
        setStartLocation({ lat: location.coords.latitude, lng: location.coords.longitude });
        setMarkers([...markers, { lat: location.coords.latitude, lng: location.coords.longitude, title: "My Location" }])
        setActivityIndicatorState(true);
        setTimeout(() => {
            setActivityIndicatorState(false);
            setModalVisible(false);
        }, 1200)
    };
    useEffect(() => {
    }, [startLocation]);

    //bounds surroundings car 
    const [cityBounds, setCityBounds] = useState(null);
    const fetchCoordinates = async (cityName) => {
        try {
            const response = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${cityName}&key=${Google_Maps_Api_Key}`);
            const { lat, lng } = response.data.results[0].geometry.location;
            setStartLocation({ lat, lng });
            setCityBounds(response.data.results[0].geometry.bounds);
            setMapWidth(true);
        } catch (error) {
            // console.error("Error fetching coordinates: ", error);
        }
    };

    const handleSearch = () => {
        fetchCoordinates(serachCity);
    };


    //Unsplash
    const [images, setImages] = useState([]);
    useEffect(() => {
        if (serachCity) {
            const apiUrl = `https://api.unsplash.com/search/photos?page=1&query=${serachCity}&client_id=${UNSPLASH_API_KEY}`;

            fetch(apiUrl)
                .then(response => response.json())
                .then(data => {
                    setImages(data.results);
                })
                .catch(error => console.error("Error:", error));
        }
    }, [serachCity]);

    //bounds surroundings not car 
    const [surroundingsNotCar, setSurroundingsNotCar] = useState(false);

    useEffect(() => {
        let isCarInBounds = false;
        if (cityBounds && markers) {
            for (let byCar of markers) {
                const carLatitude = byCar.lat;
                const carLongitude = byCar.lng;
                if (carLatitude >= cityBounds.southwest.lat &&
                    carLatitude <= cityBounds.northeast.lat &&
                    carLongitude >= cityBounds.southwest.lng &&
                    carLongitude <= cityBounds.northeast.lng) {
                    isCarInBounds = true;
                    break;
                }
            }
        }
        setSurroundingsNotCar(!isCarInBounds);
    }, [cityBounds, markers]);

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
                        <Text style={[Style.modalText]}>We want to access your location, do you allow it ?</Text>
                        <View style={[Style.accesView]}>
                            <Pressable onPress={handleLocationPermission}>
                                <View style={[Style.yesAcces]}>
                                    <Text>Allow</Text>
                                </View>
                            </Pressable>
                            <ActivityIndicator
                                color={'#0ED47B'}
                                animating={activityIndicatorState}
                                size="large" />
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
                style={[Style.map, { height: mapWidth ? '50%' : '100%' }]} >
                {
                    markers.map((e, i) => (
                        <Marker
                            key={i}
                            pinColor='black'
                            // image={e.image}
                            title={e.marka}
                            description={e.model + " " + e.year}
                            coordinate={{ latitude: e.lat, longitude: e.lng }} >
                        </Marker>
                    ))
                }
            </MapView>
            <ScrollView
                horizontal={false}
                pagingEnabled
                showsVerticalScrollIndicator={false}
                scrollEventThrottle={1}>
                <View style={[Style.SearchCarsResponse]}>
                    <ImageBackground style={[Style.SearchCarsResponseImageBackground]} source={{ uri: images[0]?.urls.small ? images[0]?.urls.small : 'https://lh5.googleusercontent.com/p/AF1QipNkbaej15qhHtjmoOI9xmUzHlFpHZnbcds0Cow0=w675-h390-n-k-no' }}>
                        <View style={[Style.SearchCarsResponseIn]}>
                            {cityBounds && markers?.map((byCar, index) => {
                                const carLatitude = byCar.lat;
                                const carLongitude = byCar.lng;
                                if (cityBounds &&
                                    carLatitude >= cityBounds.southwest.lat &&
                                    carLatitude <= cityBounds.northeast.lat &&
                                    carLongitude >= cityBounds.southwest.lng &&
                                    carLongitude <= cityBounds.northeast.lng
                                ) {
                                    return (
                                        <SearchCarResponse image={byCar.image} marka={byCar.marka} model={byCar.model} year={byCar.year} key={index} />
                                    );
                                }
                            })}
                            {surroundingsNotCar == true &&
                                <Text style={[Style.notBoundCar]}>We are sorry, but we do not have any cars in {serachCity}.</Text>
                            }
                        </View>
                    </ImageBackground>
                </View>
            </ScrollView>
        </View>
    )
}

export default Search