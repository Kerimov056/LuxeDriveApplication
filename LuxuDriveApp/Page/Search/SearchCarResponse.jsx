import React from 'react'
import { Image, ImageBackground, Text, View } from 'react-native'
import { Style } from "./SearchCarResponseStyle.js";
import { FontAwesome5 } from '@expo/vector-icons';

const SearchCarResponse = (props) => {
    return (
        <View style={[Style.container]}>
            <View style={[Style.carImage]}>
                <Image style={[Style.carImageI]} source={{ uri: props.image }} />
            </View>
            <View style={[Style.carInfoText]}>
                <View style={[{ flexDirection: 'row', justifyContent: 'space-around' }]}>
                    <Text style={[Style.ByCarInfo]}>{props.marka} {props.model} {props.year}</Text>
                    <FontAwesome5 style={[{ marginTop: 20 }]} name="shopify" size={24} color="#D53E87" />
                </View>
                <ImageBackground source={{ uri: props.image }} style={[Style.carInfoTextImageBackground]}>
                </ImageBackground>
            </View>
        </View>
    )
}

export default SearchCarResponse