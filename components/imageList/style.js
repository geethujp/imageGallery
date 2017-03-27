/**
 * Gallery Style sheet
 */
 import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    image: {
        height: 100,
        width: 100
    },
    title: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        color: '#5c6bc0',
    },
    container: {
        flex:1,
        flexDirection:'row',
        alignItems: 'center',
    },
    image: {
        height: 120,        
        width: 120,
        margin: 3,
    },
    title: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        color: '#5c6bc0',
    },
    info_wrapper: {
        fontSize: 16,
        textAlign: 'center',
        margin: 15,
        padding: 10,
        borderRadius: 5,
        borderWidth: 0.5,
        borderColor: '#5c6bc0',
        color: '#5c6bc0',
    },
    proceed: {
        flex:1,
        margin:20,
    },
    list_view: {
        flexDirection:'row',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    headline: {
       color: '#000',
       textAlign: 'center',
    }
});