import React from 'react'
import { Pressable, TouchableOpacity, Text } from 'react-native'
import { Style } from "./MainButtonStyle";
import { useNavigation } from "@react-navigation/native";


const MainButton = (props) => {

    const navigator = useNavigation();
    const toPage = () => {
        navigator.navigate(props.toPage);
    };
    
    return (
        <Pressable style={[Style.StartHere, { width: props.width }]} >
            <TouchableOpacity onPress={toPage}>
                <Text style={Style.text}>{props.title}</Text>
            </TouchableOpacity>
        </Pressable>
    )
}

export default MainButton