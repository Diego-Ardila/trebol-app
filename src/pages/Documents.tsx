import React, { useContext, useEffect } from 'react';
import './Documents.scss';
import FileUploadInputs from '../components/Documents/FileUploadInputs';

function Documents() {

  return (
    <div className="documents">
      <FileUploadInputs />
    </div>
  );
}

export default Documents;
