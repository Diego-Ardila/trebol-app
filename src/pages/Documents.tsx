import React, { useContext, useEffect } from 'react';
import './Documents.scss';
import { GlobalContext } from '../utils/GlobalContext';

export async function loader() {
  return {};
}

function Documents() {
  const { setStepId } = useContext(GlobalContext);

  useEffect(() => {
    setStepId(2)
  }, [])

  return (
    <div className="documents">
      <h1>Documents</h1>
    </div>
  );
}

export default Documents;
