import React, { useContext } from 'react';
import TasksContext from '../../context/TasksContext';
import editImg from '../../images/edit.png';
import deleteImg from '../../images/delete.png';

function Table() {
  const { tasks } = useContext(TasksContext);
  const renderThead = () => (
    <thead className="thead">
      <tr>
        <th>Tarefa</th>
        <th>Descrição</th>
        <th>Status</th>
        <th>Data de Criação</th>
        <th>Editar/Excluir</th>
      </tr>
    </thead>
  );

  return (
    <table className="table">
      {renderThead()}
      <tbody className="tbody">
        {
          tasks.map((task) => {
            const { _id, title, description, status, createdDate } = task;
            return (
              <tr key={ _id }>
                <td>{title}</td>
                <td>{description}</td>
                <td>{status}</td>
                <td>{createdDate}</td>
                <td>
                  <div className="action-buttons">
                    <button type="button">
                      <img src={ editImg } alt="edit" />
                    </button>
                    <button type="button">
                      <img src={ deleteImg } alt="delete" />
                    </button>
                  </div>

                </td>
              </tr>
            );
          })
        }
      </tbody>
    </table>
  );
}

export default Table;
