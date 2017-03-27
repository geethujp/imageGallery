/**
 * Gallery Style sheet
 */
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    image: {
        margin:5,
        resizeMode: 'contain',

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
