import React, { useRef, useState } from 'react';
import { Style } from "./SliderStyle";
import { sliderData } from "../../Data";
import {
    SafeAreaView,
    ScrollView,
    Text,
    View,
    ImageBackground,
    Animated,
    useWindowDimensions,
    Button,
    Pressable,
    ActivityIndicator,
    TouchableOpacity
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Slider = () => {

    const navigation = useNavigation();
    const registerPage = () => {
        navigation.navigate('Register');
    }

    const scrollX = useRef(new Animated.Value(0)).current;

    const { width: windowWidth } = useWindowDimensions();


    return (
        <SafeAreaView style={[Style.container]}>
            <View style={[Style.scrollContainer]}>
                <ScrollView
                    horizontal={true}
                    pagingEnabled
                    showsHorizontalScrollIndicator={false}
                    onScroll={Animated.event([
                        {
                            nativeEvent: {
                                contentOffset: {
                                    x: scrollX,
                                },
                            },
                        },
                    ])}
                    scrollEventThrottle={1}>
                    {
                        sliderData.map((image, imageIndex) => {
                            const words = image.name.split(' ');
                            const firstName = words.slice(0, 3).join(' ');
                            const secondName = words.slice(3).join(' ');
                            return (
                                <View style={[Style.imageS, { width: windowWidth }]} key={imageIndex}>
                                    <ImageBackground source={{ uri: image.image }} style={Style.card}>
                                        <View style={Style.triangle}></View>
                                    </ImageBackground>
                                    <Text style={[Style.sliderDataName, { opacity: 0.5, marginBottom: -10, fontSize: 30 }]}>{firstName}</Text>
                                    <Text style={[Style.sliderDataName, { marginTop: -20, fontSize: 40, marginTop: -30 }]}>{secondName}</Text>
                                    {imageIndex == sliderData.length - 1 &&
                                        <Pressable style={Style.StartHere} >
                                            <TouchableOpacity onPress={registerPage}>
                                                <Text style={Style.text}>Start here {">"}</Text>
                                            </TouchableOpacity>
                                        </Pressable>
                                    }
                                </View>
                            );
                        })}
                </ScrollView>
                <View>
                    <View style={Style.indicatorContainer}>
                        {sliderData.map((image, imageIndex) => {
                            const width = scrollX.interpolate({
                                inputRange: [
                                    windowWidth * (imageIndex - 1),
                                    windowWidth * imageIndex,
                                    windowWidth * (imageIndex + 1),
                                ],
                                outputRange: [8, 16, 8],
                                extrapolate: 'clamp',
                            });
                            return (
                                <Animated.View
                                    key={imageIndex}
                                    style={[Style.normalDot, { width }]}
                                />
                            );
                        })}
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Slider