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
        height: '100%',
    },



    // centeredView: {
    //     flex: 1,
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     marginTop: 22,
    // },
    // modalText: {
    //     marginBottom: 15,
    //     textAlign: 'center',
    // },
    // modalView: {
    //     margin: 20,
    //     backgroundColor: 'white',
    //     borderRadius: 20,
    //     padding: 35,
    //     alignItems: 'center',
    //     shadowColor: '#000',
    //     shadowOffset: {
    //         width: 0,
    //         height: 2,
    //     },
    //     shadowOpacity: 0.25,
    //     shadowRadius: 4,
    //     elevation: 5,
    // },
});