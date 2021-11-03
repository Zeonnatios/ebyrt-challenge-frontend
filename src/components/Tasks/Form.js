import React, { useContext } from 'react';
import TasksContext from '../../context/TasksContext';

function Form() {
  const { newTask, setNewTask } = useContext(TasksContext);
  const options = ['', 'pendente', 'em andamento', 'pronto'];

  const handleChange = ({ target: { name, value } }) => {
    setNewTask({
      ...newTask,
      [name]: value,
    });
  };

  return (
    <form className="form-task">
      <div>
        <label className="form-task-label" htmlFor="task">
          Tarefa:
          <input
            className="form-task-input-field"
            type="text"
            id="task"
            name="task"
            value={ newTask.task }
            onChange={ handleChange }
          />
        </label>
      </div>
      <div>
        <label className="form-task-label" htmlFor="description">
          Descrição:
          <input
            className="form-task-input-field"
            type="text"
            id="description"
            name="description"
            value={ newTask.description }
            onChange={ handleChange }
          />
        </label>
      </div>
      <div>
        <label className="form-task-label" htmlFor="status">
          Status:
          <select
            className="form-task-input-field"
            id="status"
            name="status"
            value={ newTask.status }
            onChange={ handleChange }
          >
            {options.map((opt, index) => (
              <option key={ index } value={ opt }>{opt}</option>
            ))}
          </select>
        </label>
      </div>
      <div>
        <button
          className="form-task-button-add-expense"
          type="button"
        >
          Adicionar Tarefa
        </button>
      </div>
    </form>
  );
}

export default Form;
