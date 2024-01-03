import React, { useState } from 'react'
import { View, Text, TextInput, ImageBackground, Pressable, TouchableOpacity, KeyboardAvoidingView } from 'react-native'
import { Style } from "./RegisterStyle.js";
import { MaterialCommunityIcons } from 'react-native-vector-icons'
// import AgeComponent from './AgeComponent';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import MainButton from "../../../Components/Button/MainButton.jsx";

const Register = () => {

    const [fullNameInputValue, setFullNameInputValue] = useState('');
    const [userNameInputValue, setUserNameInputValue] = useState('');
    const [emailInputValue, setEmailInputValue] = useState('');
    const [passwordInputValue, setPasswordInputValue] = useState('');

    const [showPassword, setShowPassword] = useState(false);
    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const navigator = useNavigation();
    const registerPage = () => {
        navigator.navigate('Register');
    };

    return (
        <View style={[Style.container]}>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={Style.KeyboardAvoidingView}
            >
                <ImageBackground source={{ uri: 'https://i.pinimg.com/564x/da/80/0c/da800c7cbf666a708ff8a8c85b85fb78.jpg' }} style={[Style.registerImageBack]}>
                    <Text style={[Style.luxeDrive]}>LuxeDrive</Text>
                    <TextInput style={[Style.RegisterInput]}
                        onChangeText={fullName => setFullNameInputValue(fullName)}
                        value={fullNameInputValue}
                        placeholder='Full Name'
                        placeholderTextColor={'rgba(253, 250, 252, 0.7)'}
                    />
                    <TextInput style={[Style.RegisterInput]}
                        onChangeText={userName => setUserNameInputValue(userName)}
                        value={userNameInputValue}
                        placeholder='User Name'
                        placeholderTextColor={'rgba(253, 250, 252, 0.7)'}
                    />

                    <TextInput style={[Style.RegisterInput]}
                        onChangeText={userName => setEmailInputValue(userName)}
                        value={emailInputValue}
                        placeholder='Email'
                        placeholderTextColor={'rgba(253, 250, 252, 0.7)'}
                    />
                    <TextInput style={[Style.RegisterInput]}
                        onChangeText={password => setPasswordInputValue(password)}
                        autoCapitalize={'none'}
                        autoCorrect={false}
                        secureTextEntry={!showPassword}
                        value={passwordInputValue}
                        placeholder="Password"
                        placeholderTextColor={'rgba(253, 250, 252, 0.7)'}
                    />
                    <MaterialCommunityIcons
                        name={showPassword ? 'eye-off' : 'eye'}
                        size={26}
                        color="#aaa"
                        style={[Style.eyeNotEye]}
                        onPress={toggleShowPassword}
                    />
                    <Pressable style={[Style.RegisterButton]}>
                        <TouchableOpacity onPress={registerPage}>
                            <Text style={[Style.RegisterButton_text]}>Create account</Text>
                        </TouchableOpacity>
                    </Pressable>
                    {/* <AgeComponent />   Bunu deddikki helelik static vereceyik helelik */}
                    <View style={[Style.LoginButtons]}>
                        <View style={[Style.LoginButtonsLeft]}>
                            <Pressable style={[Style.AppleLogin]}>
                                <TouchableOpacity onPress={registerPage}>
                                    <FontAwesome name="apple" size={24} color="white" />
                                </TouchableOpacity>
                            </Pressable>
                            <Pressable style={[Style.GoogleLogin]}>
                                <TouchableOpacity onPress={registerPage}>
                                    <FontAwesome name="google" size={24} color="white" />
                                </TouchableOpacity>
                            </Pressable>
                        </View>
                        <View style={[Style.LoginButtonsRight]}>
                            <MainButton toPage={"Login"} width={130} title={"Login  >"} />
                        </View>
                    </View>
                </ImageBackground>
            </KeyboardAvoidingView>
        </View>
    )
}

export default Register