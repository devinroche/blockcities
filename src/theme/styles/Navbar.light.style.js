import { StyleSheet } from 'react-native';
import theme from '../theme';

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    grid: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: theme.LIGHT_TEXT_COLOR,
    },
    topRow: {
        paddingTop: 20,
        paddingBottom: 10,
        backgroundColor: theme.LIGHT_TEXT_COLOR,
    },
});
