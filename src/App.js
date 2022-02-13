import React from 'react';
import Provider from './context/Provider';
import Routes from './routes';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/style.css';

function App() {
  return (
    <Provider>
      <Routes />
    </Provider>
  );
}

export default App;
