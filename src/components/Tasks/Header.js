import React from 'react';

import { FaUserCircle } from 'react-icons/fa';

function Header() {
  return (
    <header className="header">
      <h1>Lista de Tarefas</h1>
      <div className="user-info">
        <div className="user-info-container">
          <FaUserCircle className="header-icon" size="32" />
          <span>Super User</span>
        </div>
      </div>
    </header>
  );
}

export default Header;
