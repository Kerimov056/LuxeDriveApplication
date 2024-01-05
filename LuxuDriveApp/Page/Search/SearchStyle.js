import { StyleSheet, Dimensions } from 'react-native'

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

const mainTwoColor = '#D53E87';
var whiteGrayColor = "#353230";

export const Style = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        width: '100%',
        // height: '50%',
        // height: '100%', helelik
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    accesView: {
        width: 'auto',
        height: 60,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    yesAcces: {
        width: 'auto',
        padding: 10,
        marginRight: 20,
        backgroundColor: '#0ED47B',
        borderWidth: 1,
        borderRadius: 24,
        borderColor: '#06B791',
        paddingLeft: 40,
        paddingRight: 40
    },
    noAcces: {
        width: 'auto',
        padding: 10,
        marginLeft: 20,
        backgroundColor: '#F25555',
        borderWidth: 1,
        borderRadius: 24,
        borderColor: '#B00C0C',
        paddingLeft: 40,
        paddingRight: 40
    },
    searchCityInput: {
        width: '100%',
        height: 60,
        backgroundColor: '#eaeaea',
        marginTop: 25,
        borderBottomWidth: 5,
        borderColor: '#B00C84',
        paddingLeft: 15
    },
    searchCitybutton: {
        width: '100%',
        height: 30,
        backgroundColor: '#09552A',
        justifyContent: 'center',
        alignItems: 'center'
    },
    searchCitybuttonText: {
        color: 'white',
        fontSize: 13,
        fontWeight: 'bold',
        // fontFamily: 'Avenir-BlackOblique',
    },

    //Search cars response 
    SearchCarsResponse: {
        width: '100%',
        minHeight: 500,
        backgroundColor: whiteGrayColor,
        justifyContent: 'center',
        alignItems: 'center'
    },
    SearchCarsResponseImageBackground: {
        objectFit: 'cover',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    SearchCarsResponseIn: {
        width: '92%',
        height: '100%',
    },
    notBoundCar: {
        color: 'white',
        fontSize: 33,
        fontWeight: 'bold',
        // fontFamily: 'Avenir-BlackOblique',
        alignSelf: 'center',
        marginTop: '30%'
    }
});