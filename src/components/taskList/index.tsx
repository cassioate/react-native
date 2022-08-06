import React, {useContext} from 'react';
import {Alert, FlatList, Text, TouchableOpacity} from 'react-native';
import {TasksContext} from '../../context/tasksContext';
import {stylesTaskList} from './taskList-style';

export const TaskList = () => {
  const {tasks, removeTask} = useContext(TasksContext);

  const handleRemoveTask = (taskId: string) => {
    Alert.alert('Excluir', 'Deseja realmente excluir a tarefa?', [
      {
        text: 'Sim',
        onPress: () => removeTask(taskId),
      },
      {
        text: 'Não',
      },
    ]);
  };

  return (
    <FlatList
      data={tasks}
      keyExtractor={taskInTasks => taskInTasks.id}
      renderItem={({item}) => (
        <TouchableOpacity
          onPress={() => handleRemoveTask(item.id)}
          style={stylesTaskList.buttonTask}>
          <Text style={stylesTaskList.titleTask}>{item.title}</Text>
        </TouchableOpacity>
      )}
    />
  );
};
