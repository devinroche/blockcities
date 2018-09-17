import { StyleSheet } from 'react-native';
import theme from '../theme';

export default StyleSheet.create({
    xlarge: {
        fontSize: theme.FONT_SIZE_XLARGE + 4,
        fontFamily: theme.FONT_BOLD,
        letterSpacing: 2,
        color: '#3258A8',
    },
    error: {
        fontSize: theme.FONT_SIZE_MEDIUM,
        fontFamily: theme.FONT_REGULAR,
        letterSpacing: 1,
        color: theme.ERR_TEXT,
    },
    errorStrong: {
        fontSize: theme.FONT_SIZE_MEDIUM,
        fontFamily: theme.FONT_BOLD,
        letterSpacing: 1,
        color: theme.ERR_TEXT,
    },
    title: {
        fontSize: theme.FONT_SIZE_XLARGE,
        fontFamily: theme.FONT_MEDIUM,
        letterSpacing: 2,
    },
    pageTitle: {
        fontSize: theme.FONT_SIZE_XLARGE,
        fontFamily: theme.FONT_DEMI,
        letterSpacing: 1,
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
        fontSize: 22,
        fontFamily: theme.FONT_BOLD,
        letterSpacing: 1,
        color: theme.BLACK_TEXT,
    },
    info: {
        fontSize: theme.FONT_SIZE_MEDIUM,
        fontFamily: theme.FONT_DEMI,
        letterSpacing: 1,
        color: theme.GREY_STANDARD,
    },
    infoFeature: {
        fontSize: theme.FONT_SIZE_MEDIUM,
        fontFamily: theme.FONT_DEMI,
        lineHeight: 25,
        letterSpacing: 1,
        color: theme.GREY_TEXT,
    },
    btnText: {
        fontSize: theme.FONT_SIZE_LARGE,
        fontFamily: theme.FONT_BOLD,
        letterSpacing: 1,
        color: theme.LIGHT_TEXT_COLOR,
    },
    btnTextDark: {
        fontSize: theme.FONT_SIZE_LARGE,
        fontFamily: theme.FONT_BOLD,
        letterSpacing: 1,
        color: theme.MEDIUM_BLUE,
    },
    btnTextDarkSmall: {
        fontSize: theme.FONT_SIZE_MEDIUM,
        fontFamily: theme.FONT_BOLD,
        letterSpacing: 1,
        color: theme.MEDIUM_BLUE,
    },
    light: {
        fontSize: theme.FONT_SIZE_SMALL,
        fontFamily: theme.FONT_BOLD,
        letterSpacing: 1,
        color: theme.LIGHT_TEXT_COLOR,
    },
    buildingHead: {
        fontFamily: theme.FONT_DEMI,
        fontSize: theme.FONT_SIZE_XLARGE,
        letterSpacing: 1,
    },
    buildingContentHead: {
        fontFamily: theme.FONT_DEMI,
        fontSize: theme.FONT_SIZE_SMALL,
        letterSpacing: 1,
        color: '#828282',
    },
    buildingContent: {
        fontFamily: theme.FONT_DEMI,
        fontSize: theme.FONT_SIZE_XLARGE - 2,
        letterSpacing: 1,
    },
    buildingContentThin: {
        fontFamily: theme.FONT_REGULAR,
        fontSize: theme.FONT_SIZE_XLARGE - 2,
        letterSpacing: 1,
    },
    buildingDetails: {
        fontFamily: theme.FONT_BOLD,
        fontSize: theme.FONT_SIZE_MEDIUM,
        letterSpacing: 1,
        color: '#828282',
        lineHeight: 25,
    },
    featureHead: {
        fontFamily: theme.FONT_MEDIUM,
        fontSize: 30,
        color: '#000000',
    },
    featurePrice: {
        fontFamily: theme.FONT_DEMI,
        fontSize: 14,
        letterSpacing: 1,
        color: '#7294e8',
    },
    filterBtnText: {
        fontFamily: theme.FONT_MEDIUM,
        fontSize: 14,
        letterSpacing: 1,
        lineHeight: 16,
        color: '#ffffff',
    },
    eraBtnText: {
      fontFamily: theme.FONT_MEDIUM,
      fontSize: 14,
      textAlign: 'center',
      color: '#828282',
    },
    filterHeaderText: {
      fontFamily: theme.FONT_MEDIUM,
      fontSize: 18,
      textAlign: 'center',
      color: '#000000',
      letterSpacing: 0.25,
    }
});
