import React, { useEffect, useState } from 'react'
import { Style } from "./SearchStyle";
import { View, Text, Modal } from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';
import { MapStyle } from "./MapStyle";

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
    ])

    const [modalVisible, setModalVisible] = useState(false);


    useEffect(() => {
        if (markers.length === 4) {
            setModalVisible(true)
        }
    }, [markers])

    return (
        <View style={Style.container}>
            <MapView
                onPress={(e) => setMarkers([...markers, { lat: e.nativeEvent.coordinate.latitude, lng: e.nativeEvent.coordinate.longitude }])}
                initialRegion={{
                    latitude: 40.399873,
                    longitude: 49.846821,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
                customMapStyle={MapStyle}
                style={Style.map} >
                {
                    markers.map((e, i) => (
                        <Marker
                            pinColor='black'
                            title={e.title}
                            // image={{ uri: e.image }}
                            description={e.description}
                            coordinate={{ latitude: e.lat, longitude: e.lng }} >
                        </Marker>
                    ))
                }
            </MapView>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    setModalVisible(!modalVisible);
                }}>
                <View style={Style.centeredView}>
                    <View style={Style.modalView}>
                        <Text style={Style.modalText}>Hello World!</Text>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

export default Search