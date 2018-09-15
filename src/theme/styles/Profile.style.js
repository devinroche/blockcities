import { StyleSheet } from 'react-native';
import theme from '../theme';

export default StyleSheet.create({
    grid: {
        backgroundColor: theme.LIGHT_TEXT_COLOR,
    },
    topRow: {
        paddingTop: 40,
        paddingBottom: 10,
    },
    bottomRow: {
        paddingTop: 10,
        borderTopWidth: 0.5,
        borderTopColor: '#95a5a6',
    },
    centerContent: {
        flex: 1,
        justifyContent: 'center',
        textAlign: 'center',
    },
    greyBG: {
      position: 'relative',
      top: 0,
      left: 0,
      backgroundColor: '#F2F2F2',
      width: 414,
      height: 500,
    }
});
