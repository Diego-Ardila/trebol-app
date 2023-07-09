import React from 'react';
import { useGlobalState } from '../../utils/GlobalContext';
import { Alert, Snackbar } from '@mui/material';

function CustomAlert() {
  const { state: { globalAlert }, dispatch } = useGlobalState();

  const handleClose = () => {
    dispatch({type: 'SET_GLOBAL_ALERT', payload: {isOpen: false, message: ''}});
  }

  return (
    <Snackbar
      onClose={handleClose}
      open={globalAlert.isOpen}
      autoHideDuration={5000}
      anchorOrigin={{vertical: 'top', horizontal: 'right'}}
    >
      <Alert severity="error" sx={{ width: '100%' }}>
        {globalAlert.message}
      </Alert>
    </Snackbar>
  );
}

export default CustomAlert;
