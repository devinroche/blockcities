import { StyleSheet } from 'react-native';
import theme from './theme';

export default StyleSheet.create({
    touch: {
        width: 160, 
        height: 250, 
        paddingHorizontal: 20,
    },
    number: {
        color: '#1e3799',
        fontWeight: 'bold',
        fontSize: theme.FONT_SIZE_MEDIUM,
    },
    text: {
        color: '#95a5a6',
    },
    buildingHead: {
        lineHeight: 18,
        fontFamily: theme.FONT_MEDIUM,
        fontSize: theme.FONT_SIZE_LARGE,
        letterSpacing: 1,
        color: '#000000',
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
