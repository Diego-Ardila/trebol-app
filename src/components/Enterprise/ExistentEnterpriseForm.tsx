import React, { useContext } from 'react';
import { TextField } from '@mui/material';
import StepButtons from '../global/StepButtons';
import { ExistentEnterpriseInfoType } from '../../utils/Types';
import { useGlobalState } from '../../utils/GlobalContext';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './ExistentEnterpriseForm.scss';

import Enterprise from '../../utils/Template.json';


const validationSchema = Yup.object({
  id: Yup.number().typeError('Solo puedes ingresar números').required('El campo Nit es requerido'),
});

function ExistentEnterpriseForm() {
  const { dispatch } = useGlobalState();
  const initialValues: ExistentEnterpriseInfoType = {
    id: '',
  };

  const handleSubmit = (values: ExistentEnterpriseInfoType) => {
    console.log('Formulario válido');
    console.log(values);

    dispatch({type: 'SET_ENTERPRISE', payload: Enterprise});
    dispatch({type: 'INCREMENT_STEP_ID'});
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({errors}) => (
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
