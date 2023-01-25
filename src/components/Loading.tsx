import { View, ActivityIndicator, StyleSheet } from 'react-native';

export function Loading() {
    return(
        <View style={styles.container}>
            <ActivityIndicator color={'#FFF'} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0D0D0D',
        alignItems: 'center',
        justifyContent: 'center'
    }
});