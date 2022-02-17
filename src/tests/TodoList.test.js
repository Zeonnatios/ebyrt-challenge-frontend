import React from 'react';
import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import App from '../App';
// import { axiosGet, axiosPost, axiosPut } from './MockAxios';

describe('Test if render', () => {
  it('Render the header', async () => {
    render(<App />);
    const title = screen.getByText('Lista de Tarefas');
    const developedBy = screen.getByText('Developed by:');
    const zeon = screen.getByText('Matheus "Zeonnatios" Antonio');

    expect(title).toBeInTheDocument();
    expect(developedBy).toBeInTheDocument();
    expect(zeon).toBeInTheDocument();
  });

  it('Render the form task', async () => {
    render(<App />);

    const inputTask = screen.getByTestId('input-task');
    const inputDescription = screen.getByTestId('input-description');
    const inputStatus = screen.getByTestId('input-status');
    const buttonCreate = screen.getByTestId('button-create');

    expect(inputTask).toBeInTheDocument();
    expect(inputDescription).toBeInTheDocument();
    expect(inputStatus).toBeInTheDocument();
    expect(buttonCreate).toBeInTheDocument();
  });

  it('Is possible to create a task', async () => {
    await act(async () => { render(<App />); });
    const inputTask = screen.getByTestId('input-task');
    const inputDescription = screen.getByTestId('input-description');
    const inputStatus = screen.getByTestId('input-status');
    const buttonCreate = screen.getByTestId('button-create');

    userEvent.type(inputTask, 'Teste RTL');
    userEvent.type(inputDescription, 'Teste create Task with RTL');
    userEvent.selectOptions(inputStatus, 'pendente');
    userEvent.click(buttonCreate);

    render(<App />);

    const tasks = await screen.findAllByTestId('data-task');
    expect(tasks[tasks.length - 1]).toHaveTextContent('Teste RTL');
  });

  it('Is possible to edit a task', async () => {
    await act(async () => { render(<App />); });

    const taskEditButton = await screen.findAllByTestId('data-button-edit');
    await userEvent.click(taskEditButton[taskEditButton.length - 1]);

    const inputTask = await screen.findByTestId('input-task');
    await userEvent.type(inputTask, ' edit');
    expect(inputTask).toHaveValue('Teste RTL edit');

    const formEditButton = await screen.findByTestId('button-edit');
    expect(formEditButton).toBeInTheDocument();
    await userEvent.click(formEditButton);
  });
});
