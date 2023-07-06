import React from 'react';
import { Outlet } from 'react-router-dom';
import Stepper from './components/global/Stepper';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Stepper />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
