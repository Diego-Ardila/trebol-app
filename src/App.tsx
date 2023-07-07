import React, {useState} from 'react';
import { Outlet } from 'react-router-dom';
import Stepper from './components/global/Stepper';
import './App.scss';
import { GlobalContext } from './utils/GlobalContext';

function App() {
  const [stepId, setStepId] = useState(1);
  
  return (
    <div className="App">
      <GlobalContext.Provider value={{stepId, setStepId}}>
        <Stepper />
        <main>
          <Outlet />
        </main>
      </GlobalContext.Provider>
    </div>
  );
}

export default App;
