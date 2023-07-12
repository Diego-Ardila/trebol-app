import React, { useRef, ChangeEvent, useState } from 'react';
import { TemplateInput } from '../../utils/Types';
import './FileInput.scss'
import { Button, CircularProgress } from '@mui/material';
import { AiFillCheckCircle, AiOutlineDelete, AiOutlineUpload } from "react-icons/ai";
import { useGlobalState } from '../../utils/GlobalContext';
import { deleteFile, saveFile } from '../../api/Enterprise/EnterpriseApi';

type FileInfo = {
  name: string;
  size: number;
  type: string;
}

type FileInputProps = {
  templateInput: TemplateInput;
}

function FileInput({ templateInput }: FileInputProps) {
  const { state: { enterprise }, dispatch } = useGlobalState();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleFileChange = async (event: ChangeEvent<HTMLInputElement>, id: number) => {
    setIsLoading(true);
    try {
      if (event.target.files?.[0]) {
        const formData = new FormData();
        formData.append('file', event.target.files?.[0]);
        
        const newEnterprise = await saveFile(formData, {
          templateInputId: id,
          enterpriseId: enterprise.id
        });
        dispatch({type: 'SET_ENTERPRISE', payload: newEnterprise})
      }
    } catch(err) {
      dispatch({type: 'SET_GLOBAL_ALERT', payload: {isOpen: true, message: 'Error en la carga, vuelve a intentarlo'}})
      console.error(err)
    }
    setIsLoading(false);
  };

  const handleFileRemove = async (id: number) => {
    setIsLoading(true);
    try {
      const newEnterprise = await deleteFile({
        templateInputId: id,
        enterpriseId: enterprise.id
      });
      dispatch({type: 'SET_ENTERPRISE', payload: newEnterprise})
    } catch(err) {
      dispatch({type: 'SET_GLOBAL_ALERT', payload: {isOpen: true, message: 'Hubo un error, vuelve a intentarlo'}})
      console.error(err)
    }
    setIsLoading(false);
  }

  const handleLoadClick = () => {
    if (fileInputRef.current) fileInputRef.current.click();
  }

  const renderFileInfo = () => {
    if (templateInput?.file) {
      const fileInfo: FileInfo = {
        name: templateInput.file.fileName,
        size: templateInput.file.size,
        type: templateInput.file.contentType,
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
      <div className="file-input file-input--no-file file-input--loading">
        <CircularProgress />
      </div>
    )
  }

  return (
    <div className={`file-input ${templateInput?.file ? 'file-input--loaded' : 'file-input--no-file'}`}>
      <label className="file-label">
        {templateInput.name}
        {templateInput?.file ? <AiFillCheckCircle /> : null}
      </label>
      <input
        ref={fileInputRef}
        type="file"
        accept={templateInput.accept}
        onChange={(e) => handleFileChange(e, templateInput.id)}
      />
      {renderFileInfo()}
      {templateInput?.file ? (
        <Button
          size="small"
          variant="outlined"
          startIcon={<AiOutlineDelete />}
          onClick={() => handleFileRemove(templateInput.id)}
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
