import React, { useState, ChangeEvent } from 'react';
import { useGlobalState } from '../../utils/GlobalContext';
import './FileUploadInputs.scss';
import { Template } from '../../utils/Types';
import FileInput from './FileInput';

function FileUploadInputs() {
  const { state: { enterprise } } = useGlobalState();

  return (
    <div className="file-upload-container">
      {enterprise.templates.map((template: Template) => (
        <FileInput
          key={template.id}
          template={template}
        />
      ))}
    </div>
  );
};

export default FileUploadInputs;
