import { StyleSheet, Dimensions } from 'react-native'

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

const mainTwoColor = '#D53E87';
var whiteGrayColor = "#353230";

export const Style = StyleSheet.create({
    container: {
        width: '100%',
        height: 150,
        backgroundColor: 'red',
        borderTopLeftRadius: 60,
        borderBottomLeftRadius: 60,
        marginTop: 25,
        flexDirection: 'row'
    },
    carImage: {
        backgroundColor: '#eaeaea',
        borderTopLeftRadius: 60,
        borderBottomLeftRadius: 60,
        flex: 1
    },
    carInfoText: {
        backgroundColor: '#3c3c3c',
        flex: 1.8
    },
    carImageI: {
        width: '100%',
        height: '100%',
        borderTopLeftRadius: 60,
        borderBottomLeftRadius: 60,
        objectFit: 'cover',
    },
    carInfoTextImageBackground: {
        flex: 1,
        flexDirection: 'row',
        opacity: 0.3
    },
    ByCarInfo: {
        margin: 20,
        color: mainTwoColor,
        opacity: 1,
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: 'Avenir-BlackOblique',
    }
});