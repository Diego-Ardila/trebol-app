import React, { useState, ChangeEvent } from 'react';
import { useGlobalState } from '../../utils/GlobalContext';
import './FileUploadInputs.scss';
import { TemplateInput } from '../../utils/Types';
import FileInput from './FileInput';

function FileUploadInputs() {
  const { state: { enterprise } } = useGlobalState();

  return (
    <div className="file-upload-container">
      {enterprise.templateInputs.map((templateInput: TemplateInput) => (
        <FileInput
          key={templateInput.id}
          templateInput={templateInput}
        />
      ))}
    </div>
  );
};

export default FileUploadInputs;
