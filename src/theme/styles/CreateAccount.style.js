import { StyleSheet } from 'react-native';
import theme from '../theme';

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    img: {
        width: 85,
        height: 85,
    },
    text: {
        color: theme.BLACK_TEXT,
        fontSize: 19,
        fontWeight: '500',
    },
    whiteText: {
        color: theme.LIGHT_TEXT_COLOR,
        fontWeight: '700',
        fontSize: 12,
    },
    errorText: {
        paddingTop: 10,
        paddingBottom: 10,
    },
    errorInput: {
        borderWidth: 2,
        borderColor: theme.ERR_TEXT,
    },
    loginText: {
        color: theme.LIGHT_TEXT_COLOR,
        fontWeight: '700',
        fontSize: 17,
    },
    darkText: {
        color: theme.BLUE_TEXT,
        fontWeight: '700',
        fontSize: 13,
    },
    largeButton: {
        backgroundColor: '#4D92FF',
        borderRadius: 35,
        alignItems: 'center',
        width: '80%',
        padding: 15,
    },
    smallButton: {
        backgroundColor: '#4D92FF',
        borderRadius: 15,
        alignItems: 'center',
        width: '80%',
        padding: 5,
    },
    clearButton: {
        backgroundColor: '#FFFFFF',
        alignItems: 'center',

    },
    input: {
        height: 45,
        backgroundColor: '#F2F2F2',
        borderRadius: 35,
        width: '75%',
        padding: 15,
    },
    align: {
        alignItems: 'flex-end',
    },
    center: {
        alignItems: 'center',
    },
});
