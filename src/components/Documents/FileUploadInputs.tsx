import React, { useState, ChangeEvent, useContext } from 'react';
import { useGlobalState } from '../../utils/GlobalContext';

function FileUploadComponent() {
  const { state: { enterprise } } = useGlobalState();
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

  if(!enterprise) {
    return null
  }

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>, id: number) => {
    const newSelectedFiles = [...selectedFiles];
    newSelectedFiles[id] = event.target.files![0];
    setSelectedFiles(newSelectedFiles);
  };

  const renderFileInputs = () => {
    return enterprise.template.map((file) => (
      <div key={file.id}>
        <label>{file.name}</label>
        <input
          type="file"
          accept={file.accept}
          onChange={(event) => handleFileChange(event, file.id)}
        />
      </div>
    ));
  };

  return (
    <div>
      {renderFileInputs()}
      <button onClick={() => console.log(selectedFiles)}>Upload</button>
    </div>
  );
};

export default FileUploadComponent;
