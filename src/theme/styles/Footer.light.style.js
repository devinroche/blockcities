import { StyleSheet } from 'react-native';
import theme from '../theme';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingBottom: 12,
        alignItems: 'flex-end',
    },
    grid: {
        flex: 1,
        alignItems: 'center',
    },
    bottomRow: {
        paddingTop: 10,
        borderTopWidth: 0.5,
        borderTopColor: '#F2F2F2',
        backgroundColor: theme.LIGHT_TEXT_COLOR,
        zIndex: 100,
    },
});
