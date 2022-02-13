import React, { useContext } from 'react';
import Context from '../../context/Context';

function Form() {
  const {
    inputTask,
    setInputTask,
    createNewTask,
    updateTaskById,
    actionButton,
    setActionButton,
  } = useContext(Context);
  const options = ['', 'pendente', 'em andamento', 'pronto'];

  const handleChange = ({ target: { name, value } }) => {
    setInputTask({
      ...inputTask,
      [name]: value,
    });
  };

  const cancelOperation = () => {
    setInputTask({ task: '', description: '', status: '' });
    setActionButton({ create: true, edit: false });
  };

  const createTaskHandle = (body) => {
    createNewTask(body);
    setInputTask({ task: '', description: '', status: '' });
    setActionButton({ create: true, edit: false });
  };

  const updateTaskHandle = (body) => {
    const id = Object.values(body)[0];
    updateTaskById(id, body);
    setInputTask({ task: '', description: '', status: '' });
    setActionButton({ create: true, edit: false });
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
            value={inputTask.task}
            onChange={handleChange}
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
            value={inputTask.description}
            onChange={handleChange}
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
            value={inputTask.status}
            onChange={handleChange}
          >
            {options.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </label>
      </div>

      {actionButton.create && (
        <button
          className="form-task-button-add-expense"
          type="button"
          onClick={() => {
            createTaskHandle(inputTask);
          }}
        >
          Adicionar Tarefa
        </button>
      )}
      {actionButton.edit && (
        <>
          <div>
            <button
              className="form-task-button-edit-expense"
              type="button"
              onClick={() => {
                updateTaskHandle(inputTask);
              }}
            >
              Salvar Tarefa
            </button>
          </div>
          <div>
            <button
              className="form-task-button-cancel-expense"
              type="button"
              onClick={cancelOperation}
            >
              Cancelar
            </button>
          </div>
        </>
      )}
    </form>
  );
}

export default Form;
