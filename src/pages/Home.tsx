import React from 'react';
import { Outlet } from 'react-router-dom';
import Stepper from '../components/global/Stepper';
import './Home.scss';

function Home() {
  return (
    <div className="App">
      <h1>Para interactuar con esta aplicacion necesitas una key de Cliente</h1>
    </div>
  );
}

export default Home;
