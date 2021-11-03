import React, { useContext } from 'react';
import { FaCaretDown } from 'react-icons/fa';
import TasksContext from '../../context/TasksContext';
import editImg from '../../images/edit.png';
import deleteImg from '../../images/delete.png';

function Table() {
  const { tasks, excludeTaskById, sortAlphabetical } = useContext(TasksContext);

  const renderThead = () => (
    <thead className="thead">
      <tr>
        <th>
          Tarefa
          <FaCaretDown className="sort-Button" onClick={ sortAlphabetical } />
        </th>
        <th>Descrição</th>
        <th>
          Status
          <FaCaretDown className="sort-Button" />
        </th>
        <th>
          Data de Criação
          <FaCaretDown className="sort-Button" />
        </th>
        <th>Editar/Excluir</th>
      </tr>
    </thead>
  );

  const renderTbody = () => (
    <tbody className="tbody">
      {
        tasks.map((t, index) => {
          const { _id, task, description, status, createdDate } = t;
          return (
            <tr key={ index }>
              <td>{task}</td>
              <td>{description}</td>
              <td>{status}</td>
              <td>{createdDate}</td>
              <td>
                <div className="action-buttons">
                  <button type="button">
                    <img src={ editImg } alt="edit button" />
                  </button>
                  <button type="button" onClick={ () => excludeTaskById(_id) }>
                    <img src={ deleteImg } alt="exclude button" />
                  </button>
                </div>

              </td>
            </tr>
          );
        })
      }
    </tbody>
  );

  return (
    <table className="table">
      {renderThead()}
      {renderTbody()}
    </table>
  );
}

export default Table;
