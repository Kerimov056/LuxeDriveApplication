import React, { useState } from 'react'
import { View, Text, TextInput, ImageBackground, Pressable, TouchableOpacity, KeyboardAvoidingView } from 'react-native'
import { Style } from "./LoginStyle.js";
import { MaterialCommunityIcons } from 'react-native-vector-icons'
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import MainButton from "../../../Components/Button/MainButton.jsx";
import { useFormik } from "formik";
import { useMutation } from 'react-query'
import { useDispatch, useSelector } from 'react-redux';
import { login } from "../../../Services/authServices.js";

const Login = () => {

    const [emailInputValue, setEmailInputValue] = useState('');
    const [passwordInputValue, setPasswordInputValue] = useState('');
    // console.log(emailInputValue);
    // console.log(passwordInputValue);

    const [showPassword, setShowPassword] = useState(false);
    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const navigator = useNavigation();
    const registerPage = () => {
        navigator.navigate('Register');
    };


    const dispatch = useDispatch();
    const { token } = useSelector(x => x.authReducer)

    // console.log("Token 1 " + token);
    const { mutate, isLoading, error } = useMutation((values) => login(values), {
        onSuccess: (resp) => {
            dispatch(loginAction(resp.data));
            console.log("Yess");
            console.log("Token 2 " + token);
        },
        onError: (error) => {
            console.error(error);
        }
    });

    const formik = useFormik({
        initialValues: {
            UsernameOrEmail: '',
            password: '',
        },
        onSubmit: (values) => {
            mutate(values);
            console.log("Main-> Email: " + values.UsernameOrEmail);
            console.log("Main-> Password: " + values.password);
        },
    });


    return (
        <View style={[Style.container]}>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={Style.KeyboardAvoidingView}
            >
                <ImageBackground source={{ uri: 'https://i.pinimg.com/564x/bb/95/6f/bb956fcfc9ccfc90ccbb1d411362db26.jpg' }} style={[Style.registerImageBack]}>
                    <Text style={[Style.luxeDrive]}>LuxeDrive</Text>
                    <TextInput style={[Style.RegisterInput]}
                        onChangeText={formik.handleChange('UsernameOrEmail')}
                        value={formik.values.UsernameOrEmail}
                        placeholder='Email'
                        placeholderTextColor={'rgba(253, 250, 252, 0.7)'}
                    />
                    <TextInput style={[Style.RegisterInput]}
                        onChangeText={formik.handleChange('password')}
                        value={formik.values.password}
                        autoCapitalize={'none'}
                        autoCorrect={false}
                        secureTextEntry={!showPassword}
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
                        {/* <TouchableOpacity onPress={registerPage}> */}
                        <TouchableOpacity onPress={formik.handleSubmit}>
                            <Text style={[Style.RegisterButton_text]}>Login</Text>
                        </TouchableOpacity>
                    </Pressable>
                    {/* <Text style={[Style.forgetPassword]}>Forget Password</Text> */}
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
                            <MainButton toPage={"Register"} width={150} title={"Register  >"} />
                        </View>
                    </View>
                </ImageBackground>
            </KeyboardAvoidingView>
        </View>
    )
}

export default Login



