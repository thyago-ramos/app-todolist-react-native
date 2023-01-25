import { View, Text, StyleSheet } from 'react-native';

type Props = {
    tasksToDo: number;
    tasksConcluded: number;
}

export function TaskCounter({ tasksToDo, tasksConcluded }:Props){
    return(
        <View style={styles.container}>
            <View style={styles.containerInsider}>
                <Text style={styles.textCriadas}>
                    Criadas
                </Text>
                <Text style={styles.textTasksToDo}>
                    {tasksToDo}
                </Text>
            </View>

            <View style={styles.containerInsider}>
                <Text style={styles.textTaksConcluded}>
                    {tasksConcluded}
                </Text>
                <Text style={styles.textConcluidas}>
                    Concluídas
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 24,
        marginTop: 32
    },
    containerInsider: {
        flexDirection: 'row'
    },
    textCriadas: {
        color: '#4EA8DE',
        marginRight: 12,
        fontFamily: 'Inter_400Regular'
    },
    textTasksToDo: {
        color: '#FFF',
        backgroundColor: '#4EA8DE', 
        borderRadius: 18,
        width: 25,
        paddingLeft: 8,
        fontFamily: 'Inter_400Regular'
    },
    textTaksConcluded:{
        color: '#FFF',
        backgroundColor: '#5E60CE', 
        borderRadius: 18,
        width: 25,
        paddingLeft: 8,
        fontFamily: 'Inter_400Regular'
    },
    textConcluidas: {
        color: '#5E60CE',
        marginLeft: 12,
        fontFamily: 'Inter_400Regular'
    },
})