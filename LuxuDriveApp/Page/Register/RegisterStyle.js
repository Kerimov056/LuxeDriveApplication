import { StyleSheet, Dimensions } from 'react-native'

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

const mainTwoColor = '#D53E87';
var whiteGrayColor = "#353230";

export const Style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: width,
        height: height,
        backgroundColor: '#262425'
    },
    registerImageBack: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    luxeDrive: {
        fontSize: 70,
        color: mainTwoColor,
        fontWeight: 'bold',
        fontFamily: 'Avenir-BlackOblique',
        marginTop: -200,
        marginBottom: 100
    },
    RegisterInput: {
        borderBottomWidth: 1,
        width: '88%',
        padding: 17,
        marginTop: 30,
        color: 'white',
        backgroundColor: '#191716',
        borderRadius: 20,
        opacity: 0.6
    },
    eyeNotEye: {
        marginTop: -38,
        marginRight: -280,
    },
    RegisterButton: {
        width: '70%',
        height: 44,
        backgroundColor: whiteGrayColor,
        marginTop: 30,
        marginBottom: -30,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        borderRadius: 40,
        opacity: 0.8
    },
    RegisterButton_text: {
        color: 'white',
        fontFamily: 'Avenir-BlackOblique',
        fontSize: 30,
        fontWeight: 200
    },
    LoginButtons: {
        width: '100%',
        height: 70,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 100,
        marginBottom: -220
    },
    LoginButtonsLeft: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'start',
        marginTop: 50,
    },
    AppleLogin: {
        width: 52,
        height: 52,
        borderRadius: 26,
        backgroundColor: whiteGrayColor,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 24,
        marginTop: -48
    },
    GoogleLogin: {
        width: 52,
        height: 52,
        borderRadius: 26,
        backgroundColor: whiteGrayColor,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 94,
        marginTop: -53
    },
    LoginButtonsRight: {
        justifyContent: 'center',
        alignItems: 'center',
    },


})