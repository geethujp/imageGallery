/**
 * Gallery Style sheet
 */
import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
    image: {
        height: 110,
        width: Dimensions.get('window').width / 2 ,
        resizeMode: 'cover'//Device width divided in almost a half
    },
    headline: {
        color: '#000',
        textAlign: 'center',
    },
    list_view: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexWrap: 'wrap',
    },

});
