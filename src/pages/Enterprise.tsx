import React, { useContext, useEffect } from 'react';
import './Enterprise.scss';
import { GlobalContext } from '../utils/GlobalContext';

function Enterprise() {
  const { setStepId } = useContext(GlobalContext);

  useEffect(() => {
    setStepId(1)
  }, [])
  
  return (
    <div className="enterprise">
      <h1>Enterprise</h1>
    </div>
  );
}

export default Enterprise;
