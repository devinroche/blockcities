import { StyleSheet } from 'react-native';
import theme from '../theme';

export default StyleSheet.create({
    touch: {
        flex: 1,
        height: 375,
    },
    body: {
        flexGrow: 1,
        alignItems: 'center',
    },
    container: {
        justifyContent: 'center',
        width: 360,
        height: 420,
        padding: 20,
        borderRadius: 10,
    },
    buildingHead: {
        paddingTop: 10,
        paddingLeft: 5,
        paddingTop: 5,
        fontFamily: theme.FONT_MEDIUM,
        fontSize: theme.FONT_SIZE_XLARGE,
        letterSpacing: 1,
        color: theme.BLACK_TEXT,
        textAlign: 'center',
    },
    subBuildingText: {
        lineHeight: 18,
        paddingTop: 5,
        paddingLeft: 5,
        fontSize: theme.FONT_SIZE_LARGE,
        fontFamily: theme.FONT_DEMI,
        color: theme.BLUE_TEXT,
        textAlign: 'center',
    },
    buyText: {
        color: theme.GREY_TEXT,
        paddingLeft: 5,
        paddingTop: 5,
        fontSize: theme.FONT_SIZE_SMALL,
        fontFamily: theme.FONT_MEDIUM,
        lineHeight: 19,
    },
    img: {
        flex: 1
    },
    paddedRow: {
        paddingVertical: 10,
    }
});