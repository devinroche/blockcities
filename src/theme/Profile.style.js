import { StyleSheet } from 'react-native';
import theme from './theme';

export default StyleSheet.create({
    grid: {
        backgroundColor: theme.LIGHT_TEXT_COLOR,
    },
    topRow: {
        paddingTop: 40,
        paddingBottom: 10,
    },
    bottomRow: {
        paddingTop: 10,
        borderTopWidth: 0.5,
        borderTopColor: '#95a5a6',
    },
});
