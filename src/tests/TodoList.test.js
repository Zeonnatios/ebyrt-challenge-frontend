import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
// import axios from 'axios';
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

    const taskEditButton = await screen.findAllByTestId('data-button-edit');
    userEvent.click(taskEditButton[0]);
    const formEditButton = screen.getByTestId('button-edit');
    const formCancelButton = screen.getByTestId('button-cancel');

    expect(formEditButton).toBeInTheDocument();
    expect(formCancelButton).toBeInTheDocument();
  });
});
