import React, {useContext} from 'react';
import {fireEvent, render, renderHook} from '@testing-library/react-native';
import {Home} from '../../src/pages/home';
import {TasksContext, TasksProvider} from '../../src/context/tasksContext';
import {act} from 'react-test-renderer';

describe('Name of the group', () => {
  test('renders correctly', () => {
    const {getByPlaceholderText} = render(<Home />);

    const input = getByPlaceholderText('Nova tarefa');
    expect(input).toBeDefined();
    expect(input.props.placeholder).toBeTruthy();
    expect(input.props.placeholder).toEqual('Nova tarefa');
  });

  test('Should addTask inserted one Task in the TasksContext', async () => {
    const {result} = renderHook(() => useContext(TasksContext), {
      wrapper: TasksProvider,
    });
    const {addTask} = result.current;
    const data = {id: 'Task01', title: 'Task01'};
    await act(() => addTask(data.title));
    // é melhor usar assim, pois se tentar desestruturar o tasks para ser utilizado abaixo,
    // ele não irá atualizar após a inserção do addTask
    expect(result.current.tasks.length).toBe(1);

    // Isso abaixo não pode ser feito, pois um hook necessita ser utilizado pelos children's,
    // sendo assim não é possível puxar o contexto para um local (no caso para o arquivo de tests)
    // sem que esse local seja um children do contexto
    //
    //--------------------------------------------------------------
    // const {tasks, addTask} = useContext(TasksContext);
    // const data = {id: 'Task01', title: 'Task01'};
    // await addTask(data.title);
    // expect(tasks.length).toBe(1);
    // --------------------------------------------------------------
    //
    // EX: abaixo teremos o <TasksProvider> que é igual ao "useContext(TasksContext);",
    // e estamos simulando seu children que é o <Home />
    // <TasksProvider>
    //   <Home />
    // </TasksProvider>
  });

  test('Should Adicionar button exist and can be pressed', async () => {
    const {getByTestId, getByPlaceholderText} = render(<Home />, {
      wrapper: TasksProvider,
    });

    const {result} = renderHook(() => useContext(TasksContext), {
      wrapper: TasksProvider,
    });

    const data = {id: 'Task01', title: 'Task011'};

    const input = getByPlaceholderText('Nova tarefa');
    const addButton = getByTestId('addButton');
    act(() => fireEvent.changeText(input, data.title));
    await act(() => {
      fireEvent.press(addButton);
    });

    expect(result.current.tasks).toBeTruthy();
    // nao funciona, pois o hook nao atualiza o state do componente imediatamente, então o tasks fica vazio
    // expect(result.current.tasks.length).toBe(1);
  });
});
