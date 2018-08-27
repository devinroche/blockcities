import { StyleSheet } from 'react-native';
import theme from '../theme';

export default StyleSheet.create({
    touch: {
        flex: 1,
        height: 375,
    },
    container: {
        justifyContent: 'center',
        alignSelf: 'center',
        width: 180,
        height: 260,
        padding: 20,
        borderRadius: 10,
    },
    buildingHead: {
        paddingLeft: 5,
        paddingTop: 5,
        fontFamily: theme.FONT_MEDIUM,
        fontSize: theme.FONT_SIZE_LARGE,
        letterSpacing: 1,
        color: theme.BLACK_TEXT,
    },
    subBuildingText: {
        lineHeight: 18,
        paddingTop: 3,
        paddingLeft: 5,
        fontSize: theme.FONT_SIZE_SMALL,
        fontFamily: theme.FONT_MEDIUM,
        color: theme.DARK_TEXT_COLOR,
    },
    buyText: {
        color: theme.GREY_TEXT,
        paddingLeft: 5,
        paddingTop: 3,
        fontSize: theme.FONT_SIZE_SMALL,
        fontFamily: theme.FONT_MEDIUM,
        lineHeight: 19,
    },
    img: {
        flex: 1,
    },
});