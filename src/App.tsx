import React, {useState} from 'react';
import Stepper from './components/global/Stepper';
import Enterprise from './pages/Enterprise';
import Documents, { loader as documentsLoader } from './pages/Documents';
import './App.scss';
import { GlobalContext } from './utils/GlobalContext';

function App() {
  const [stepId, setStepId] = useState(1);

  const componentMapper = () => {
    switch (stepId) {
      case 1:
        return <Enterprise />
      case 2: 
        return <Documents />
      default:
        return null;
    }
  }
  
  return (
    <div className="App">
      <GlobalContext.Provider value={{stepId, setStepId}}>
        <Stepper />
        <main>
          {componentMapper()}
        </main>
      </GlobalContext.Provider>
    </div>
  );
}

export default App;
