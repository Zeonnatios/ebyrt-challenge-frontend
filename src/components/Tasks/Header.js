import React from 'react';
import { Link } from 'react-router-dom';

import { FaUserCircle, FaSignOutAlt } from 'react-icons/fa';

function Header() {
  return (
    <header className="header">
      <h1>Lista de Tarefas</h1>
      <div className="user-info">
        <div className="user-info-container">
          <FaUserCircle className="header-icon" size="32" />
          <span>userName</span>
        </div>
        <div className="user-info-container">
          <Link to="/">
            <FaSignOutAlt className="header-icon header-icon-logout" size="32" />
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
