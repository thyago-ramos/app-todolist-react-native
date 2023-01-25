import { useEffect, useState } from 'react';
import { Keyboard } from 'react-native';

import { SafeAreaView, FlatList, View, TextInput, TouchableOpacity } from 'react-native';

import { PlusCircle } from 'phosphor-react-native';

import { Header } from '../../components/Header';
import { Task } from '../../components/Task';
import { TaskCounter } from '../../components/TaskCounter';
import { ListEmpty } from '../../components/ListEmpty';

import { styles, stylesTaskInput } from './styles';

export function Home() {

  type taskType = {
    id: number,
    name: string,
    done: boolean
  }

  
  const [taskList, setTaskList] = useState<taskType[]>([]);
  const [newTask, setNewTask] = useState('');
  const [tasksToDo, setTaksToDo] = useState(taskList.length);
  const [tasksConcluded, setTasksConcluded] = useState(0);
  const [idController, setIdController] = useState(0);
  const [flatListRenderHelper, setFlatListRenderHelper] = useState(false)

  function handleTaskAdd(){
    if(!(newTask === '')){
      const id = idController;
      setTaskList(prevState => [...prevState, { id, name: newTask, done: false }]);
      setNewTask('');
    }
    Keyboard.dismiss();
  }

  function handleTaskRemoval(taskId: number){
    setTaskList(prevState => prevState.filter(task => task.id !== taskId));
  }

  function handleTaskDone(task: taskType){
    if(task.done === true){
      task.done = false;
    } else {
      task.done = true;
    }

    setFlatListRenderHelper(() => flatListRenderHelper === false ? true : false)
  }

  useEffect(() => {
    setTaksToDo(taskList.length);
    setIdController(idController + 1);
    setTasksConcluded(() => (
      taskList.reduce((acc, task) => {
        return (task.done === true ? acc + 1 : acc)
      }, 0)
    ));
    
  }, [taskList, flatListRenderHelper]);

  return (
    <SafeAreaView style={styles.container}>
      <Header />

      <View style={stylesTaskInput.container}>
        <TextInput 
          style={stylesTaskInput.input}
          placeholder='Adicione uma nova tarefa'
          placeholderTextColor='#808080'
          selectionColor='#808080'
          onChangeText={setNewTask}
          value={newTask}
        />

        <TouchableOpacity 
          style={stylesTaskInput.button}
          onPress={handleTaskAdd}
        >
          <PlusCircle 
            size={26}
            color='#FFF'
          />
        </TouchableOpacity>
      </View>

      <TaskCounter 
        tasksToDo={tasksToDo}
        tasksConcluded={tasksConcluded}
      />
      
      <FlatList 
        data={taskList}
        keyExtractor={(item) => item.id.toString()}
        extraData={flatListRenderHelper}
        renderItem={({ item }) => (
          <Task 
            taskDescription={item.name} 
            taskDone={item.done}
            onTaskDone={() => handleTaskDone(item)}
            onRemove={() => handleTaskRemoval(item.id)}
          />
        )}
        ListEmptyComponent={<ListEmpty />}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}
