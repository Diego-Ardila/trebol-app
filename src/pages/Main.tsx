import React from 'react';
import Enterprise from './Enterprise';
import Documents from './Documents';
import { useGlobalState } from '../utils/GlobalContext';
import { Alert } from '@mui/material';

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
    <main className='main-view'>
      <Alert variant="outlined" severity="error">
        This is an error alert — check it out!
      </Alert>
      {componentMapper()}
    </main>
  );
}

export default Main;
