import { StyleSheet } from 'react-native';
import theme from './theme';

export default StyleSheet.create({
    largeButtonText: {
        fontSize: theme.FONT_SIZE_LARGE,
        fontWeight: theme.FONT_WEIGHT_HEAVY,
    },
    largeHeaderText: {
        fontSize: theme.FONT_SIZE_LARGE,
    },
    mediumHeaderText: {
        fontSize: theme.FONT_SIZE_MEDIUM,
        color: theme.PRIMARY_COLOR,
    },
});
