import React, { useContext } from 'react';
import './EnterpriseForm.scss';
import { TextField } from '@mui/material';
import StepButtons from '../global/StepButtons';
import { EnterpriseInfoType } from '../../utils/Types';
import { useGlobalState } from '../../utils/GlobalContext';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

import Enterprise from '../../utils/Template.json';

const validationSchema = Yup.object({
  id: Yup
  .number()
  .required('El campo Nit es requerido')
  .typeError('Solo puedes ingresar números')
  .integer('Solo puedes ingresar números positivos'),
  name: Yup.string().required('El campo Nombre es requerido'),
  email: Yup.string().email('Ingresa un email válido').required('El campo Email es requerido')
});

function EnterpriseForm() {
  const { dispatch } = useGlobalState();
  const initialValues: EnterpriseInfoType = {
    id: '',
    name: '',
    email: ''
  };

  const handleSubmit = (values: EnterpriseInfoType) => {
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
      {({errors, touched}) => (
        <Form className='enterprise-form'>
          <section className="enterprise-form-inputs">
            <Field
              as={TextField}
              id="outlined-basic"
              name="id"
              label="Nit"
              variant="outlined"
              type="number"
              className='text-field'
              error={touched.id && Boolean(errors.id?.length)}
              helperText={touched.id && errors.id}
            />
            <Field
              as={TextField}
              id="outlined-basic"
              name="name"
              label="Nombre"
              variant="outlined"
              type="text"
              className='text-field'
              error={touched.name && Boolean(errors.name?.length)}
              helperText={touched.name && errors.name}
            />
            <Field
              as={TextField}
              id="outlined-basic"
              name="email"
              label="Email"
              variant="outlined"
              type="email"
              className='text-field'
              error={touched.email && Boolean(errors.email?.length)}
              helperText={touched.email && errors.email}
            />
          </section>
          <StepButtons />
        </Form>
      )}
    </Formik>
  );
}

export default EnterpriseForm;
