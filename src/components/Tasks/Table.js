import React, { useContext } from 'react';
import { FaCaretDown } from 'react-icons/fa';
import TasksContext from '../../context/TasksContext';
import editImg from '../../images/edit.png';
import deleteImg from '../../images/delete.png';

function Table() {
  const { tasks, excludeTaskById,
    sortAlphabetical, sortByCreatedDate, sortByStatus } = useContext(TasksContext);

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
          <FaCaretDown className="sort-Button" onClick={ sortByStatus } />
        </th>
        <th>
          Data de Criação
          <FaCaretDown className="sort-Button" onClick={ sortByCreatedDate } />
        </th>
        <th>Editar/Excluir</th>
      </tr>
    </thead>
  );

  const getTimeUnit = (unit) => {
    const limit = 10;
    return unit < limit ? `0${unit}` : unit;
  };

  const renderDate = (date) => {
    const rawDate = new Date(date);
    const day = rawDate.getDate();
    const mounth = rawDate.getMonth() + 1;
    const year = rawDate.getFullYear();
    const hours = getTimeUnit(rawDate.getHours());
    const minutes = getTimeUnit(rawDate.getMinutes());
    const parseDate = `${day}/${mounth}/${year} ${hours}:${minutes}`;
    console.log(parseDate);
    return parseDate;
  };
  const miliseconds = 1635964208551;

  renderDate(miliseconds);

  const renderTbody = () => (
    <tbody className="tbody">
      {
        tasks.map((t, index) => {
          const { _id, task, description, status, createdDate } = t;
          const parsedDate = renderDate(createdDate);
          return (
            <tr key={ index }>
              <td>{task}</td>
              <td>{description}</td>
              <td>{status}</td>
              <td>{parsedDate}</td>
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
