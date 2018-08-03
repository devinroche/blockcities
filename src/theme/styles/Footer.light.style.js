import { StyleSheet } from 'react-native';
import theme from '../theme';

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'flex-start',
    },
    grid: {
        flex: 1,
        alignItems: 'center',
    },
    bottomRow: {
        paddingTop: 10,
        borderTopWidth: 0.5,
        borderTopColor: theme.LIGHT_GREY,
    },
});
