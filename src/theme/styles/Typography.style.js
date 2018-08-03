import { StyleSheet } from 'react-native';
import theme from '../theme';

export default StyleSheet.create({
    title: {
        fontSize: theme.FONT_SIZE_XLARGE,
        fontFamily: theme.FONT_DEMIBOLD,
        letterSpacing: 2,
    },
    bold: {
        fontSize: theme.FONT_SIZE_XLARGE,
        fontFamily: theme.FONT_BOLD,
        letterSpacing: 1,
        color: theme.DARK_BLUE,
    },
    normal: {
        fontSize: theme.FONT_SIZE_LARGE,
        fontFamily: theme.FONT_DEMIBOLD,
        letterSpacing: 1,
        color: theme.GREY_STANDARD,
    },
    strong: {
        fontSize: theme.FONT_SIZE_LARGE,
        fontFamily: theme.FONT_BOLD,
        letterSpacing: 1,
        color: theme.BLACK_TEXT,
    },
    info: {
        fontSize: theme.FONT_SIZE_MEDIUM,
        fontFamily: theme.FONT_DEMIBOLD,
        letterSpacing: 1,
        color: theme.GREY_STANDARD,
    },

    light: {
        fontSize: theme.FONT_SIZE_SMALL,
        fontFamily: theme.FONT_BOLD,
        letterSpacing: 1,
        color: theme.LIGHT_TEXT_COLOR,
    },

});
