import React, {useContext} from 'react';
import {FlatList, Text, TouchableOpacity} from 'react-native';
import {ITasksContext, TasksContext} from '../../context/tasksContext';
import {stylesTaskList} from './taskList-style';

export const TaskList = () => {
  const {tasks, removeTask} = useContext(TasksContext);

  return (
    <FlatList
      data={tasks}
      keyExtractor={taskInTasks => taskInTasks.id.toString()}
      renderItem={({item}) => (
        <TouchableOpacity
          onPress={() => removeTask(item.id)}
          style={stylesTaskList.buttonTask}>
          <Text style={stylesTaskList.titleTask}>{item.title}</Text>
        </TouchableOpacity>
      )}
    />
  );
};
