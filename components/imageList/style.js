/**
 * Gallery Style sheet
 */
import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
    image: {
        resizeMode: 'cover'//Device width divided in almost a half
    },
    headline: {
        color: '#000',
        textAlign: 'center',
    },
    list_view: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
});
