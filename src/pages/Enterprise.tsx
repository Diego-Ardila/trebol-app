import React, { useState } from 'react';
import './Enterprise.scss';
import { GlobalContext } from '../utils/GlobalContext';
import EnterpriseForm from '../components/Enterprise/EnterpriseForm';
import { Button } from '@mui/material';
import ExistentEnterpriseForm from '../components/Enterprise/ExistentEnterpriseForm';

function Enterprise() {
  const [isNew, setIsNew] = useState<boolean>(true);
  
  return (
    <div className="enterprise">
      <section>
        <Button
          variant={isNew ? "contained" : "outlined"}
          onClick={() => setIsNew(true)}
        >
          Nueva empresa
        </Button>
        <Button
          variant={!isNew ? "contained" : "outlined"}
          onClick={() => setIsNew(false)}
        >
          Continuar proceso
        </Button>
      </section>
      {isNew ? <EnterpriseForm /> : <ExistentEnterpriseForm />}
    </div>
  );
}

export default Enterprise;
