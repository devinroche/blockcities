import { StyleSheet } from 'react-native';
import theme from '../theme';

export default StyleSheet.create({
    grid: {
        backgroundColor: theme.LIGHT_TEXT_COLOR,
    },
    img: {
        flex: 1,
        resizeMode: 'cover',
        width: null,
        height: null,
    },
    body: {
        backgroundColor: '#B9DBF0',
    },
    textInput: {
        height: 40,
        borderColor: 'gray',
        width: '100%',
    },
});
