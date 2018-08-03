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
    },
    number: {
        color: theme.DARK_BLUE,
        fontFamily: 'GDemiBold',
        fontSize: 18,
    },
    text: {
        color: theme.LIGHT_GREY,
    },
});
