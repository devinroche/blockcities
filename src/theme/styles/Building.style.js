import { StyleSheet } from 'react-native';
import theme from '../theme';

export default StyleSheet.create({
    touch: {
        width: 160,
        height: 250,
        paddingHorizontal: 20,
    },
    buildingHead: {
        paddingTop: 5,
        fontFamily: theme.FONT_MEDIUM,
        fontSize: theme.FONT_SIZE_LARGE,
        letterSpacing: 1,
        color: theme.BLACK_TEXT,
    },
    subBuildingText: {
        lineHeight: 18,
        fontSize: theme.FONT_SIZE_SMALL,
        fontFamily: theme.FONT_MEDIUM,
        color: theme.DARK_TEXT_COLOR,
    },
    buyText: {
        color: theme.GREY_TEXT,
        fontSize: theme.FONT_SIZE_SMALL,
        fontFamily: theme.FONT_MEDIUM,
        lineHeight: 19,
    },
    img: {
        flex: 1,
        borderRadius: 10,
    },
});
