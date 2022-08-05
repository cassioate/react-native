import React from 'react';
import {FlatList, Text, TouchableOpacity} from 'react-native';
import {Task} from '../../types/tasks';
import {stylesTaskList} from './taskList-style';

interface TaskListProps {
  tasks: Task[];
  // eslint-disable-next-line @typescript-eslint/ban-types
  removeTask: Function;
}

export const TaskList = (props: TaskListProps) => {
  return (
    <FlatList
      data={props.tasks}
      keyExtractor={(taskInTasks: Task) => taskInTasks.id.toString()}
      renderItem={({item}) => (
        <TouchableOpacity
          onPress={() => props.removeTask(item.id)}
          style={stylesTaskList.buttonTask}>
          <Text style={stylesTaskList.titleTask}>{item.text}</Text>
        </TouchableOpacity>
      )}
    />
  );
};
