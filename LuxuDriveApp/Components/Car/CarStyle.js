import { StyleSheet } from "react-native";
const mainTwoColor = '#D53E87';

export const Style = StyleSheet.create({
    DayFit: {
        width: 340,
        height: 420,
        borderRadius: 30,
        backgroundColor: 'white',
        marginLeft: 17.5,
        marginRight: 17.5,
    },
    DayFitImage: {
        width: '100%',
        height: '100%',
        justifyContent: 'space-between',
    },
    Text: {
        padding: 30,
    },
    Title: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
        fontFamily: 'Avenir-BlackOblique',
    },
    Desc: {
        color: mainTwoColor,
        fontSize: 25,
        fontWeight: 900,
        fontFamily: 'Avenir-BlackOblique',
    },
    orderNow: {
        width: 140,
        height: 50,
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginBottom: 10
    },
    orderNowIn: {
        color: mainTwoColor,
        fontSize: 23,
        fontWeight: 900,
        fontFamily: 'Avenir-BlackOblique',
    }
});
