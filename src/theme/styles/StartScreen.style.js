import { StyleSheet } from 'react-native';
import theme from '../theme';

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    img: {
        width: 275,
        height: 275,
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
        fontSize: 17,
    },
    largeButton: {
        backgroundColor: '#4D92FF',
        borderRadius: 35,
        alignItems: 'center',
        width: '90%',
        padding: 15,
    },
    clearButton: {
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
    },
});
