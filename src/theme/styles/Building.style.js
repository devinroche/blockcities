import { StyleSheet } from 'react-native';
import theme from '../theme';

export default StyleSheet.create({
    touch: {
        flex: 1,
        height: 310,
    },
    container: {
        justifyContent: 'center',
        alignSelf: 'center',
        flexWrap: 'wrap',
        width: 180,
        height: 220,
        padding: 20,
        borderRadius: 10,
        overflow: 'hidden',
    },
    buildingHead: {
        paddingLeft: 5,
        paddingTop: 5,
        fontFamily: theme.FONT_DEMI,
        fontSize: theme.FONT_SIZE_MEDIUM,
        letterSpacing: 1,
        color: theme.BLACK_TEXT,
    },
    subBuildingText: {
        lineHeight: 18,
        paddingTop: 3,
        paddingLeft: 5,
        fontSize: theme.FONT_SIZE_SMALL,
        fontFamily: theme.FONT_DEMI,
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
        flex: 0.9,
    },
});
