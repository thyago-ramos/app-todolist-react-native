import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#262626'
    }
  });

export const stylesTaskInput = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: -28,
        marginHorizontal: 24,
        borderRadius: 5,
    },
    input: {
        flex: 1,
        height: 56, 
        backgroundColor: '#333333',
        borderRadius: 5,
        color: '#FFF',
        paddingHorizontal: 20,
        marginRight: 5,
        fontSize: 16
    },
    button: {
        backgroundColor: '#1E6F9F',
        borderRadius: 5,
        height: 56,
        width: 56,
        alignItems: 'center',
        justifyContent: 'center'
    },
})