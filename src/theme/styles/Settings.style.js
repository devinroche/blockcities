import { StyleSheet } from 'react-native';
import theme from '../theme';

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    response: {
        flex: 1,
        alignItems: 'center',
        marginTop: 10,
    },
    img: {
        width: 80,
        height: 80,
    },
    grid: {
        flex: 1,
        alignItems: 'center',
    },
    number: {
        color: theme.DARK_BLUE,
        fontFamily: 'GBold',
        fontSize: 18,
    },
    text: {
        color: theme.LIGHT_GREY,
    },
    line: {
        borderTopWidth: 1,
        borderTopColor: '#E0E0E0',
        width: '100%',
        padding: 10,
    },
    pillContainer: {
        paddingBottom: 20,
    },
    input: {
        height: 45,
        backgroundColor: '#F2F2F2',
        borderRadius: 35,
        width: '100%',
        padding: 15,
    },
    smallButton: {
        backgroundColor: '#4D92FF',
        borderRadius: 20,
        alignItems: 'center',
        padding: 6,
    },
    warningButton: {
        backgroundColor: '#EB5757',
        borderRadius: 18.5,
        alignItems: 'center',
        justifyContent: 'center',
        width: 160,
        height: 30,
        marginBottom: 10,
    },
});
