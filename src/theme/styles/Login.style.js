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
    grid: {
        flex: 1,
        alignItems: 'center',
    },
    text: {
        color: theme.DARK_BLUE,
        fontSize: 40,
        fontWeight: '500',
    },
    whiteText: {
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
    clearButton: {
        backgroundColor: '#FFFFFF',
        alignItems: 'center',

    },
    input: {
        height: 45,
        backgroundColor: '#F2F2F2',
        borderRadius: 35,
        width: '80%',
        padding: 15,
    },
});
