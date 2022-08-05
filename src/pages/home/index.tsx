import React, {useCallback, useEffect, useState} from 'react';
import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {styles} from './home-style';

interface Task {
  id: number;
  text: string;
}

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

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.title}>Welcome</Text>
        <TextInput
          onChangeText={change => setNewTask(change)}
          placeholder="Nova tarefa"
          style={styles.input}
          placeholderTextColor="#555"
        />
        <TouchableOpacity
          onPress={addTask}
          activeOpacity={0.7}
          style={styles.button}>
          <Text style={styles.buttonText}>Adicionar</Text>
        </TouchableOpacity>
        <Text style={styles.titleTask}>Minhas Tarefas:</Text>
        {tasks.map(task => (
          <Text key={task.id} style={styles.taskResponse}>
            {task.text}
          </Text>
        ))}
      </View>
    </SafeAreaView>
  );
};
