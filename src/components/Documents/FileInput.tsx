import React, { useRef, ChangeEvent, useState } from 'react';
import { Template } from '../../utils/Types';
import './FileInput.scss'
import { Button, CircularProgress } from '@mui/material';
import { AiFillCheckCircle, AiOutlineDelete, AiOutlineUpload } from "react-icons/ai";
import { useGlobalState } from '../../utils/GlobalContext';
import { saveFile } from '../../api/Enterprise/EnterpriseApi';

type FileInfo = {
  name: string;
  size: number;
  type: string;
}

type FileInputProps = {
  template: Template;
}

function FileInput({ template }: FileInputProps) {
  const { state: { enterprise }, dispatch } = useGlobalState();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleFileChange = async (event: ChangeEvent<HTMLInputElement>, id: number) => {
    setIsLoading(true);
    try {
      if (event.target.files?.[0]) {
  
        const formData = new FormData();
        formData.append('templateId', template.id.toString());
        formData.append('enterpriseId', enterprise.id.toString());
        formData.append('file', event.target.files?.[0]);
        
        const response = await saveFile(formData);
      }
      //dispatch({type: 'SET_ENTERPRISE', payload: {...enterprise, templates: [...enterprise.templates] }})
    } catch(err) {
      console.error(err)
    }
    setIsLoading(false);
  };

  const handleFileRemove = (id: number) => {
    console.log(id);
  }

  const handleLoadClick = () => {
    if (fileInputRef.current) fileInputRef.current.click();
  }

  const renderFileInfo = () => {
    if (template?.file) {
      const fileInfo: FileInfo = {
        name: template.file.name,
        size: template.file.size,
        type: template.file.type,
      };

      return (
        <div className="file-info">
          <span>
            <strong>Nombre de archivo:</strong> {fileInfo.name}
          </span>
          <span>
            <strong>Tamaño:</strong> {fileInfo.size} bytes
          </span>
          <span>
            <strong>Tipo:</strong> {fileInfo.type}
          </span>
        </div>
      );
    }

    return (
      <div className="file-info">
        <span>Carga tu archivo</span>
        <span>Recuerda que solo puedes cargar archivos de tipo PDF o .doc</span>
      </div>
    );
  };

  if(isLoading) {
    return (
      <div className="file-input file-input--no-file">
        <CircularProgress />
      </div>
    )
  }

  return (
    <div className={`file-input ${template?.file ? 'file-input--loaded' : 'file-input--no-file'}`}>
      <label className="file-label">
        {template.name}
        {template?.file ? <AiFillCheckCircle /> : null}
      </label>
      <input
        ref={fileInputRef}
        type="file"
        accept={template.accept}
        onChange={(e) => handleFileChange(e, template.id)}
      />
      {renderFileInfo()}
      {template?.file ? (
        <Button
          size="small"
          variant="outlined"
          startIcon={<AiOutlineDelete />}
          onClick={() => handleFileRemove(template.id)}
        >
          Eliminar
        </Button>
      ) : (
        <Button
          size="small"
          variant="contained"
          startIcon={<AiOutlineUpload />}
          onClick={handleLoadClick}
        >
          Cargar
        </Button>
      )}
    </div>
  );
};

export default FileInput;
