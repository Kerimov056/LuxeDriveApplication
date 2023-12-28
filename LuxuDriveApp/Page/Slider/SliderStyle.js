import { StyleSheet, Dimensions } from 'react-native'

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

const mainTwoColor = '#D53E87';

export const Style = StyleSheet.create({
   container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: width,
        height: height,
        backgroundColor: '#262425'
    },
    scrollContainer: {
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',

    },
    imageS: {
        height: '95%',
        resizeMode: 'cover',
    },
    sliderDataName: {
        width: '100%',
        height: '10%',
        textAlign: 'center',
        color: 'white',
        fontFamily: 'Avenir-BlackOblique'
    },
    StartHere: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 15,
        paddingHorizontal: 32,
        borderRadius: 30,
        elevation: 3,
        backgroundColor: '#D53E87',
        width: 200,
        marginLeft: 84,
    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
        fontFamily: 'Avenir-BlackOblique'
    },
    card: {
        flex: 1,
        marginVertical: 0,
        marginHorizontal: 0,
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',
        width: "100%",
        height: "100%"
    },
    triangle: {
        width: 0,
        height: 0,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderLeftWidth: 400,
        borderBottomWidth: 120,
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomColor: '#262425',
        bottom: 0,
        right: 0,
        position: 'absolute'
    },
    infoText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    normalDot: {
        height: 8,
        width: 8,
        borderRadius: 4,
        backgroundColor: mainTwoColor,
        marginHorizontal: 4,
    },
    indicatorContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: 60,
        height: '3%',
    },
    centeredView: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
    }
})