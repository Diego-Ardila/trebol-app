import React, { useContext, useEffect } from 'react';
import './Documents.scss';
import FileUploadInputs from '../components/Documents/FileUploadInputs';
import StepButtons from '../components/global/StepButtons';

function Documents() {

  return (
    <div className="documents">
      <FileUploadInputs />
      <StepButtons />
    </div>
  );
}

export default Documents;
