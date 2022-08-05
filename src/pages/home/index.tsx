import React, {useCallback, useEffect, useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  ScrollView,
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

  const removeTask = (taskId: number) => {
    const newArray = tasks.filter(filteredTask => filteredTask.id !== taskId);
    setTasks(newArray);
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
        <Text style={styles.titleTasks}>Minhas Tarefas:</Text>

        <FlatList
          data={tasks}
          keyExtractor={(taskInTasks: Task) => taskInTasks.id.toString()}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => removeTask(item.id)}
              style={styles.buttonTask}>
              <Text style={styles.titleTask}>{item.text}</Text>
            </TouchableOpacity>
          )}
        />
        {/* Essa é uma das formas de se utilizar scroll de lista, mas ela é menos performática */}
        {/* <ScrollView>
          {tasks.map(task => (
            <TouchableOpacity
              onPress={() => removeTask(task.id)}
              key={task.id}
              style={styles.buttonTask}>
              <Text style={styles.titleTask}>{task.text}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView> */}
      </View>
    </SafeAreaView>
  );
};
