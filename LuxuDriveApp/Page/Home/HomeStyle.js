import { StyleSheet, Dimensions } from 'react-native'

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

const mainTwoColor = '#D53E87';
var whiteGrayColor = "#353230";

export const Style = StyleSheet.create({
    container: {
        width: width,
        height: 'auto',
        backgroundColor: whiteGrayColor
    },
    containerIn: {
        width: '100%',
        height: '100%',
    },
    mainCarSlider: {
        width: 'auto',
        height: 300,
    },
    mainCarSliderScroll: {
        width: 'auto',
        height: '100%',
        flexDirection: 'row'
    },
    mainCarSliderScroll_in: {
        width: 'auto',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    mainCarCard:{
        width: 'auto',
        height: 440,
    },
    mainCarCardScroll: {
        width: 'auto',
        height: '100%',
        flexDirection: 'row'
    },
    mmainCarCardScroll_in: {
        width: 'auto',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },







    


    mainUpText1: {
        fontSize: 40,
        fontFamily: 'Avenir-BlackOblique',
        fontWeight: 500,
        color: mainTwoColor
    },
    mainUpText2: {
        fontSize: 40,
        fontFamily: 'Avenir-BlackOblique',
        fontWeight: 500,
        color: '#eaeaea'
    },
    mainUpText3: {
        fontSize: 23,
        fontFamily: 'Avenir-BlackOblique',
        fontWeight: 500,
        color: mainTwoColor,
        padding: 15
    },
    // mainUpText4: {
    //     fontSize: 19,
    //     fontFamily: 'Avenir-BlackOblique',
    //     fontWeight: 500,
    //     color: '#eaeaea'
    // },
});