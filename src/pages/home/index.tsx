import React, {useContext, useState} from 'react';
import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {TaskList} from '../../components/taskList';
import {TasksContext} from '../../context/tasksContext';
import {stylesHome} from './home-style';

export const Home = () => {
  const [newTask, setNewTask] = useState('');
  const {addTask} = useContext(TasksContext);

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
          onPress={() => addTask(newTask)}
          activeOpacity={0.7}
          style={stylesHome.button}>
          <Text style={stylesHome.buttonText}>Adicionar</Text>
        </TouchableOpacity>
        <Text style={stylesHome.titleTasks}>Minhas Tarefas:</Text>

        <TaskList />
      </View>
    </SafeAreaView>
  );
};
