import React from 'react';
import { ImageBackground, Text, TouchableOpacity, View } from 'react-native';
import { Style } from "./SliderDayStyle.js";
import { useNavigation } from '@react-navigation/native';

const SliderDay = (props) => {
    const navigation = useNavigation();

    const workoutData = {
        name: props.name,
        image: props.image,

    };
    const registerPage = () => {
        navigation.navigate('Login', { workoutData });
    };

    return (
        <TouchableOpacity onPress={registerPage}>
            <View style={[Style.DayFit]}>
                <ImageBackground style={[Style.DayFitImage]} imageStyle={{ borderRadius: 30 }} source={{ uri: props.image }}>
                    <View style={Style.Text}>
                        <Text style={[Style.Title]}>{props.name}</Text>
                        <Text style={[Style.Desc]}>{props.desc}</Text>
                    </View>
                </ImageBackground>
            </View>
        </TouchableOpacity>
    );
}

export default SliderDay;