import React, { useContext, useEffect } from 'react';
import './Documents.scss';
import FileUploadInputs from '../components/Documents/FileUploadInputs';
import StepButtons from '../components/global/StepButtons';
import { useGlobalState } from '../utils/GlobalContext';
import { TemplateInput } from '../utils/Types';
import FileInput from '../components/Documents/FileInput';

function Documents() {
  const { state: { enterprise }, dispatch } = useGlobalState();

  const handleClick = () => {
    const areAllUploaded = enterprise.templateInputs.every(x => x.hasOwnProperty('file'));
    if(areAllUploaded) {
      dispatch({type: 'INCREMENT_STEP_ID'});
    } else {
      dispatch({
        type: 'SET_GLOBAL_ALERT', payload: {
          isOpen: true,
          message: 'Aun te faltan archivos por cargar'
        }
      })
    }
  }

  return (
    <div className="documents">
      <div className="file-upload-container">
        {enterprise.templateInputs.map((templateInput: TemplateInput) => (
          <FileInput
            key={templateInput.id}
            templateInput={templateInput}
          />
        ))}
      </div>
      <StepButtons handleClick={handleClick} />
    </div>
  );
}

export default Documents;
