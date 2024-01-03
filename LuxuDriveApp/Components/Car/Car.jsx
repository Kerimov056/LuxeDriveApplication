import React from 'react';
import { ImageBackground, Pressable, Text, TouchableOpacity, View } from 'react-native';
import { Style } from "./CarStyle.js";
import { useNavigation } from '@react-navigation/native';

const Car = (props) => {
    const navigation = useNavigation();

    const workoutData = {
        name: props.name,
        image: props.image,

    };
    const registerPage = () => {
        navigation.navigate('', { workoutData });
    };

    return (
        <TouchableOpacity onPress={registerPage}>
            <View style={[Style.DayFit]}>
                <ImageBackground style={[Style.DayFitImage]} imageStyle={{ borderRadius: 30 }} source={{ uri: props.image }}>
                    <View style={Style.Text}>
                        <Text style={[Style.Title]}>{props.name}</Text>
                        <Text style={[Style.Title]}> Categories: {props.categories}</Text>
                        <Text style={[Style.Desc]}>{props.price}</Text>
                    </View>
                    <Pressable>
                        <View style={Style.orderNow}>
                            <Text style={Style.orderNowIn}>Order Now</Text>
                        </View>
                    </Pressable>
                </ImageBackground>
            </View>
        </TouchableOpacity>
    );
}

export default Car;