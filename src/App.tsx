import React from 'react';
import Stepper from './components/global/Stepper';
import { GlobalStateProvider } from './utils/GlobalContext';
import './App.scss';
import Main from './pages/Main';

function App() {

  return (
    <div className="App">
      <GlobalStateProvider>
        <Stepper />
        <Main />
      </GlobalStateProvider>
    </div>
  );
}

export default App;
