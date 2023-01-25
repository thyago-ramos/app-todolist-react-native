import { View, Text, StyleSheet } from 'react-native';

import { ClipboardText } from 'phosphor-react-native';

export function ListEmpty(){
    return(
        <View style={styles.container}>
            <ClipboardText 
                size={70}
                color='#808080'
            />

            <Text style={styles.title}>
                Você ainda não tem tarefas cadastradas
            </Text>

            <Text style={styles.subtitle}>
                Crie tarefas e organize seus itens a fazer
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50
    },
    title: {
        fontSize: 14,
        color: '#808080',
        fontFamily: 'Inter_700Bold',
        fontWeight: 'bold'
    },
    subtitle: {
        fontSize: 14,
        color: '#808080',
        fontFamily: 'Inter_400Regular'
    }
})