import { StyleSheet } from 'react-native';
import theme from '../theme';

export default StyleSheet.create({
    xlarge: {
        fontSize: theme.FONT_SIZE_XLARGE + 4,
        fontFamily: theme.FONT_BOLD,
        letterSpacing: 2,
        color: '#3258A8'
    },
    error: {
        fontSize: theme.FONT_SIZE_MEDIUM,
        fontFamily: theme.FONT_REGULAR,
        letterSpacing: 1,
        color: theme.ERR_TEXT,
    },
    title: {
        fontSize: theme.FONT_SIZE_XLARGE,
        fontFamily: theme.FONT_MEDIUM,
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
        fontFamily: theme.FONT_MEDIUM,
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
        fontFamily: theme.FONT_MEDIUM,
        letterSpacing: 1,
        color: theme.GREY_STANDARD,
    },
    btnText: {
        fontSize: theme.FONT_SIZE_LARGE,
        fontFamily: theme.FONT_BOLD,
        letterSpacing: 1,
        color: theme.LIGHT_TEXT_COLOR
    },
    btnTextDark: {
        fontSize: theme.FONT_SIZE_LARGE,
        fontFamily: theme.FONT_BOLD,
        letterSpacing: 1,
        color: theme.MEDIUM_BLUE
    },
    btnTextDarkSmall: {
        fontSize: theme.FONT_SIZE_MEDIUM,
        fontFamily: theme.FONT_BOLD,
        letterSpacing: 1,
        color: theme.MEDIUM_BLUE
    },
    light: {
        fontSize: theme.FONT_SIZE_SMALL,
        fontFamily: theme.FONT_BOLD,
        letterSpacing: 1,
        color: theme.LIGHT_TEXT_COLOR,
    },

});
