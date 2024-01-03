import React, { useRef } from 'react'
import { Animated, SafeAreaView, ScrollView, Text, View } from 'react-native'
import { Style } from "./HomeStyle";
import { mainCarData } from "../../Data/Data";
import SliderDay from "../../Components/Day/SliderDay";
import Car from '../../Components/Car/Car';


const Home = () => {

    const scrollX = useRef(new Animated.Value(0)).current;


    return (
        <View style={Style.container}>
            <SafeAreaView style={Style.containerIn}>
                <ScrollView
                    horizontal={false}
                    pagingEnabled
                    showsVerticalScrollIndicator={false}
                    scrollEventThrottle={1}>

                    <Text style={Style.mainUpText1}>Luxe Drive</Text>
                    <Text style={Style.mainUpText2}>Rent a car now</Text>
                    <View style={Style.mainCarSlider}>
                        <ScrollView
                            horizontal={true}
                            pagingEnabled
                            showsHorizontalScrollIndicator={false}
                            onScroll={Animated.event(
                                [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                                { useNativeDriver: false }
                            )}
                            scrollEventThrottle={1}
                            style={[Style.mainCarSliderScroll]}>
                            <View style={Style.mainCarSliderScroll_in}>
                                {mainCarData.map((data, dataIndex) => {
                                    return (
                                        <SliderDay key={dataIndex} image={data.image} name={data.name} desc={data.desc} />
                                    );
                                })}
                            </View>
                        </ScrollView>
                    </View>
                    <Text style={Style.mainUpText3}>What We Provide Is The Luxury Transport And Most Comfortable Experience</Text>
                    <View style={Style.mainCarCard}>
                        <ScrollView
                            horizontal={true}
                            pagingEnabled
                            showsHorizontalScrollIndicator={false}
                            onScroll={Animated.event(
                                [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                                { useNativeDriver: false }
                            )}
                            scrollEventThrottle={1}
                            style={[Style.mainCarCardScroll]}>
                            <View style={Style.mmainCarCardScroll_in}>
                                {mainCarData.slice(0, mainCarData.length / 2).map((data, dataIndex) => {
                                    return (
                                        <Car key={dataIndex} image={data.image} name={data.name} desc={data.desc} categories={data.categories} price={data.price} />
                                    );
                                })}
                            </View>
                        </ScrollView>
                    </View>
                    <View style={Style.mainCarCard}>
                        <ScrollView
                            horizontal={true}
                            pagingEnabled
                            showsHorizontalScrollIndicator={false}
                            onScroll={Animated.event(
                                [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                                { useNativeDriver: false }
                            )}
                            scrollEventThrottle={1}
                            style={[Style.mainCarCardScroll]}>
                            <View style={Style.mmainCarCardScroll_in}>
                                {mainCarData.slice().reverse().slice(0, Math.ceil(mainCarData.length / 2)).map((data, dataIndex) => {
                                    return (
                                        <Car key={dataIndex} image={data.image} name={data.name} desc={data.desc} categories={data.categories} price={data.price} />
                                    );
                                })}
                            </View>
                        </ScrollView>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </View>
    )
}

export default Home