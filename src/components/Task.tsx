import { Text, TouchableOpacity, View } from 'react-native';

import { StyleSheet } from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { Trash } from 'phosphor-react-native';

type Props = {
    taskDescription: string;
    taskDone: boolean;
    onTaskDone: () => void;
    onRemove: () => void;
}

export function Task({ taskDescription, taskDone, onTaskDone, onRemove }: Props){
   
    return (
        <View style={styles.container}>
            <BouncyCheckbox
                fillColor='#808080'  
                onPress={onTaskDone}
            />

            <Text style={taskDone === true ? styles.taskDescriptionDone : styles.taskDescription}>{taskDescription}</Text>

            <TouchableOpacity
                onPress={onRemove}
            >
                <Trash
                    size={32}
                    color='#808080'
                />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#333333',
        marginTop: 10,
        marginHorizontal: 24,
        borderRadius: 8,
        height: 56,
        padding: 15
    },
    taskDescription: {
        color: '#F2F2F2',
        textAlign: 'center',
        flex: 1,
        fontFamily: 'Inter_400Regular'
    },
    taskDescriptionDone: {
        color: '#A09CB1',
        textDecorationLine: 'line-through',
        textAlign: 'center',
        flex: 1,
        fontFamily: 'Inter_400Regular'
    }
})