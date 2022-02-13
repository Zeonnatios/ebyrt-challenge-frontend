import React from 'react';

function Header() {
  return (
    <header className="header">
      <h1>Lista de Tarefas</h1>
      <div className="user-info">
        <div className="user-info-container">
          <span>Developed by:</span>
        </div>
        <div className="user-info-container">
          <span>Matheus &quot;Zeonnatios&quot; Antonio</span>
        </div>
      </div>
    </header>
  );
}

export default Header;
