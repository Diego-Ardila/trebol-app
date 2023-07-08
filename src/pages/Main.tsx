import React from 'react';
import Enterprise from './Enterprise';
import Documents, { loader as documentsLoader } from './Documents';
import { GlobalStateProvider, useGlobalState } from '../utils/GlobalContext';

function Main() {
  const { state: { stepId } } = useGlobalState();  

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
    <main>
      {componentMapper()}
    </main>
  );
}

export default Main;
