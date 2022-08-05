import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {TaskList} from '../../components/taskList';
import {Task} from '../../types/tasks';
import {stylesHome} from './home-style';

export const Home = () => {
  const [newTask, setNewTask] = useState('');
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = () => {
    const data = {
      id: tasks.length + 1,
      text: newTask,
    };
    setTasks([...tasks, data]);
  };

  const removeTask = (taskId: number) => {
    const newArray = tasks.filter(filteredTask => filteredTask.id !== taskId);
    setTasks(newArray);
  };

  return (
    <SafeAreaView style={stylesHome.safeArea}>
      <View style={stylesHome.container}>
        <Text style={stylesHome.title}>Welcome</Text>
        <TextInput
          onChangeText={change => setNewTask(change)}
          placeholder="Nova tarefa"
          style={stylesHome.input}
          placeholderTextColor="#555"
        />
        <TouchableOpacity
          onPress={addTask}
          activeOpacity={0.7}
          style={stylesHome.button}>
          <Text style={stylesHome.buttonText}>Adicionar</Text>
        </TouchableOpacity>
        <Text style={stylesHome.titleTasks}>Minhas Tarefas:</Text>

        <TaskList tasks={tasks} removeTask={removeTask} />
      </View>
    </SafeAreaView>
  );
};
