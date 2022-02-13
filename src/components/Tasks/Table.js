import React, { useContext } from 'react';
import { FaCaretDown, FaCaretUp } from 'react-icons/fa';
import Context from '../../context/Context';
import editImg from '../../images/edit.png';
import deleteImg from '../../images/delete.png';

function Table() {
  const { tasks, excludeTaskById, setActionButton, setInputTask, getTaskById,
    sortAlphabeticalAsc, sortByCreatedDateAsc, sortByStatusAsc,
    sortAlphabeticalDesc, sortByCreatedDateDesc, sortByStatusDesc,
  } = useContext(Context);

  const setTaskToEdit = (id) => {
    const data = getTaskById(id);
    setInputTask(data);
    setActionButton({ create: false, edit: true });
  };

  const renderThead = () => (
    <thead className="thead">
      <tr>
        <th>
          <FaCaretUp className="sort-Button" onClick={ sortAlphabeticalDesc } />
          Tarefa
          <FaCaretDown className="sort-Button" onClick={ sortAlphabeticalAsc } />
        </th>
        <th>Descrição</th>
        <th>
          <FaCaretUp className="sort-Button" onClick={ sortByStatusDesc } />
          Status
          <FaCaretDown className="sort-Button" onClick={ sortByStatusAsc } />
        </th>
        <th>
          <FaCaretUp className="sort-Button" onClick={ sortByCreatedDateDesc } />
          Data de Criação
          <FaCaretDown className="sort-Button" onClick={ sortByCreatedDateAsc } />
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
    return parseDate;
  };

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
                  <button type="button" onClick={ () => setTaskToEdit(_id) }>
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
