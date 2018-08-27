import { StyleSheet } from 'react-native';
import theme from '../theme';

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    grid: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: theme.LIGHT_TEXT_COLOR,
        justifyContent: 'space-between'
    },
    topRow: {
        paddingTop: 20,
        paddingBottom: 10,
        justifyContent: 'space-between',
        backgroundColor: theme.LIGHT_TEXT_COLOR,
    },
});
