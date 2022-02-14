import React from 'react';
import { render, screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
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
});
