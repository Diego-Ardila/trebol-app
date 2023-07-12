import React, { useState } from 'react';
import { CircularProgress, TextField } from '@mui/material';
import StepButtons from '../global/StepButtons';
import { ExistentEnterpriseInfoType } from '../../utils/Types';
import { useGlobalState } from '../../utils/GlobalContext';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './ExistentEnterpriseForm.scss';

import Enterprise from '../../utils/Template.json';
import { getEnterprise } from '../../api/Enterprise/EnterpriseApi';
import axios from 'axios';


const validationSchema = Yup.object({
  id: Yup
    .number()
    .typeError('Solo puedes ingresar números')
    .required('El campo Nit es requerido')
    .integer('Solo puedes ingresar números positivos'),
});

function ExistentEnterpriseForm() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { dispatch } = useGlobalState();

  const initialValues: ExistentEnterpriseInfoType = {
    id: '',
  };

  const handleSubmit = async (values: ExistentEnterpriseInfoType) => {
    setIsLoading(true);
    try {
      const enterprise = await getEnterprise(values.id);
      dispatch({ type: 'SET_ENTERPRISE', payload: enterprise });
      dispatch({ type: 'INCREMENT_STEP_ID' });
    } catch (error) {
      let message = 'Error desconocido'
      if(axios.isAxiosError(error)) message = error.response?.data.message
      else if (error instanceof Error) message = error.message
      dispatch({
        type: 'SET_GLOBAL_ALERT', payload: {
          isOpen: true,
          message
        }
      })
    }
    setIsLoading(false);
  };

  if (isLoading) {
    return (
      <div className="loader-container">
        <CircularProgress />
      </div>
    )
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ errors }) => (
        <Form className='existent-enterprise-form'>
          <section className="enterprise-form-inputs">
            <Field
              as={TextField}
              id="outlined-basic"
              name="id"
              label="Nit"
              variant="outlined"
              type="number"
              className='text-field'
              error={Boolean(errors.id)}
              helperText={errors.id}
            />
          </section>
          <StepButtons />
        </Form>
      )}
    </Formik>
  );
}

export default ExistentEnterpriseForm;
